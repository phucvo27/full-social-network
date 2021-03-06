const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide your name'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please provide an email address'],
        unique: true,
        trim: true,
        validate: {
            validator: function(email){
                return validator.isEmail(email)
            },
            message: (email) => `${email} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true , 'please provide a password'],
        minlength: 6
    },
    avatar: {
        type: String,
        default: null
    },
    thumb: {
        type: String,
        default: null
    },
    friends: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        default: []
    },
    friendRequests: [
        {
            username: String,
            avatar: String,
            uid: mongoose.Schema.Types.ObjectId
        }
    ],
    sentRequestTo: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    tokens: {
        type: [String],
        default: []
    },
    tokenResetPassword: {
        type: String,
        default: null
    },
    tokenResetExpired: Date
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toJSON: {
        getters: true,
        virtuals: true
    }
});

userSchema.methods.toJSON = function(){
    const { username, _id, avatar, thumb, friends} = this;
    return {
        username,
        uid: _id,
        avatar,
        thumb,
        friends
    }
}

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();

})

userSchema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign(
        {
            uid: user._id,
        }, 
        'ThisIsTheSecretMessage',
        {
            expiresIn: '12h'
        })
    user.tokens = [...user.tokens, token];
    try {
        await user.save();
        return token;
    }catch(e){
        throw new Error('Could not generate new Token');
    }
    
}

userSchema.methods.isTokenStillValid = async function(token){
    const user = this;

    const tokenIndex = user.tokens.findIndex( item => item === token);
    if(tokenIndex !== -1){
        return true;
    }else{
        throw new Error('Token is invalid')
    }
}

userSchema.methods.addFriendRequest = async function(user, userIsRequired){
    /*
        idea : 
            -   Add id of current user ( user ) to list friend request of that friend ( userIsRequired )
            -   Add id of friend ( userIsRequired ) to list friend that is sent the request of current user
    */
    try{
        const { _id, username, avatar } = user;
        const friend = {uid: _id, username, avatar };

        // add user id to friend request list of friend 
        userIsRequired.friendRequests = [friend, ...this.friendRequests];
        // Add if of friend to sentRequestTo of user
        this.sentRequestTo = [userIsRequired._id, ...this.sentRequestTo];
        await this.save();
        await userIsRequired.save();
        return true;
    }catch(e){
        return false;
    }
    
}

userSchema.methods.acceptAndDenyFriend = async function(newFriend, type = null){

    /*
        idea: 
            -   first : check user is exist
            -   second : 
                -   click accept -> add that user to list friend of that current user , and then remove that user out from friend requests 
                -   after that remove currentUser out from the list sentRequestTo of friend 
    */
    if(!type){
        // accept friend request
        this.friends = [...this.friends, newFriend._id];
        // remove request 
        this.friendRequests = this.friendRequests.filter( friend => friend.uid !== newFriend._id);
        newFriend.sentRequestTo = newFriend.sentRequestTo.filter( user => user.toString() !== this._id.toString()); // because at this time is ObjectId
    }else{
        this.friendRequests = this.friendRequests.filter( friend => friend.uid !== newFriend._id);
    }
    try{
        await this.save();
        await newFriend.save();
        return {
            uid: newFriend._id,
            username: newFriend.username,
            avatar: newFriend.avatar
        };
    }catch(e){
        console.log('Error saving user === acceptAndDenyFriend')
        return false;
    }
    

}

userSchema.statics.verifyAccount = async function(email, password){
    const User = this;

    const user = await User.findOne({email}); // return null if email doesnt exist

    if(user){
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(isCorrectPassword){
            return user;
        }else{
            throw new Error('Your password is not valid')
        }
    }else{
        throw new Error('Your email is not valid')
    }
}

userSchema.statics.removeToken = async function(uid, currentToken){
    const User = this;
    const user = await User.findById(uid);
    user.tokens = user.tokens.filter(token => token !== currentToken);
    await user.save();
    return true;
}

const User = mongoose.model('User', userSchema);

module.exports = { User };
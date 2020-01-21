import React from 'react';
import { 
    CardWrapper, 
    CardTitle, 
    CardAuthor, CardAvatar, CardBody, CardFooter, FriendListLiked, FriendLiked, FriendAvatar, FormComment, FormInput, ListComments } from './Card.styled'
import Comment from '../Comment/Comment.component';
import { ReactComponent as Heart } from '../../assets/SVG/Heart.svg';
import { ReactComponent as Message } from '../../assets/SVG/Message.svg';
import { ReactComponent as Edit } from '../../assets/SVG/Edit.svg';
import { ReactComponent as Delete } from '../../assets/SVG/Delete.svg';
import { connect } from 'react-redux';
import { addCommentToPostStart, editCommentStart, removeCommentStart } from '../../redux/comment/comment.actions';
import { deletePostStart } from '../../redux/post/post.actions';
import userAvatar from '../../assets/user-1.jpg';
import userAvatar2 from '../../assets/user-2.jpg';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            comment: '',
            commentID: '',
            editComment: false,
        }
    }

    handleChange = (e)=>{
        const comment = e.target.value;
        this.setState(()=>({comment}))
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const postID = this.props.post._id;
        const { comment, commentID } = this.state;
        if(this.state.editComment){
            this.props.editComment({postID, content: comment, commentID})
        }else{
            this.props.addComment({postID, content: comment})
        }
    }

    handleEditPost = ()=>{
        // const rootElement = document.querySelector('.root');
        // const headerElement = document.querySelector('.header');
        this.props.showPopUp(this.props.post)
        
    }

    enableEditComment = ( currentContent, commentID )=>{
        this.setState((prevState)=>{
            if(!prevState.editComment){
                return {
                    editComment: true,
                    comment: currentContent,
                    commentID
                }
            }else{
                return {
                    editComment: false,
                    comment: '',
                    commentID: ''
                }
            }
        })
    }

    deletePost = () => {
        const { removePost } = this.props;
        removePost(this.props.post._id);
    }
    deleteComment = (comment)=>{
        const { postID, _id, } = comment;
        this.props.removeComment({postID, commentID: _id})
    }
    renderComments = ()=>{
        const { post } = this.props;
        if(post){
            if(Array.isArray(post.comments)){
                return post.comments.map(
                    comment => <Comment 
                                    key={comment._id} 
                                    enableEditComment={this.enableEditComment}  
                                    deleteComment={this.deleteComment}
                                    comment={comment}/>
                    )
            }else{
                console.log('Something went wrong');
            }
        }else{

        }
    }
    render(){
        const { listImage = [], isEditPost, post, auth} = this.props;
        console.log(this.props.post)
        let content, avatar, username, uid, created_at, numComments, numLikes;
        if(post){
            content = post.content;
            username = post.owner.username;
            uid = post.owner.uid;
            avatar = post.owner.avatar;
            created_at = new Date(post.created_at).toLocaleDateString();
            numLikes = post.numLikes;
            numComments = post.numComments
        }
        return (
            <CardWrapper>
                <CardTitle>
                    <CardAvatar src={ avatar ? avatar : userAvatar} alt='user-avatar' />
                    <CardAuthor>
                        <h1>{username}</h1>
                        <p>{created_at}</p>
                    </CardAuthor>
                    {
                        uid === auth.currentUser.uid && 
                        <React.Fragment>
                            <Edit onClick={this.handleEditPost}/>
                            <Delete onClick={this.deletePost} />
                        </React.Fragment>
                    }
                </CardTitle>
                <CardBody>
                    <p>{ content && content}</p>
                    { listImage.length > 0 && listImage.map((image, idx) => {
                        return (<img key={idx} src={image} alt='post-content' />)
                    })}
                </CardBody>
                {
                    !isEditPost && 
                        <React.Fragment>
                            <CardFooter>
                                <Heart />
                                <p>{numLikes ? numLikes : 0}</p>
                                <FriendListLiked>
                                    <FriendLiked>
                                        <FriendAvatar src={userAvatar2} alt='user-avatar' />
                                    </FriendLiked>
                                    <FriendLiked>
                                        <FriendAvatar src={userAvatar} alt='user-avatar' />
                                    </FriendLiked>
                                    <FriendLiked>
                                        <FriendAvatar src={userAvatar} alt='user-avatar' />
                                    </FriendLiked>
                                </FriendListLiked>
                                <Message />
                                <p>{numComments ? numComments : 0}</p>
                            </CardFooter>
                            <ListComments>
                                {this.renderComments()}
                            </ListComments>
                            <FormComment>
                                <FormInput onSubmit={this.handleSubmit}>
                                    <input 
                                        onChange={this.handleChange}
                                        type='text' 
                                        value={this.state.comment} 
                                        placeholder='Add comment here..'/>
                                    <button className={this.state.editComment ? 'edit' : ''}>
                                        { this.state.editComment ? 'Edit Comment' : 'Add Comment'}
                                    </button>
                                </FormInput>
                            </FormComment>
                        </React.Fragment>
                }
            </CardWrapper>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

const mapDispathToProps = dispatch => {
    return {
        addComment: payload => dispatch(addCommentToPostStart(payload)),
        editComment: payload => dispatch(editCommentStart(payload)),
        removePost: postID => dispatch(deletePostStart(postID)),
        removeComment: payload => dispatch(removeCommentStart(payload))
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Card);
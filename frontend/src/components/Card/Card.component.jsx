import React from 'react';
import { 
    CardWrapper, 
    CardTitle, 
    CardAuthor, CardAvatar, CardBody, CardFooter, FriendListLiked, FriendLiked, FriendAvatar, FormComment, FormInput } from './Card.styled'
import { ReactComponent as Heart } from '../../assets/SVG/Heart.svg';
import { ReactComponent as Message } from '../../assets/SVG/Message.svg';
import { ReactComponent as Edit } from '../../assets/SVG/edit.svg';
import { connect } from 'react-redux';
import { addCommentToPostStart } from '../../redux/post/post.actions'
import userAvatar from '../../assets/user-1.jpg';
import userAvatar2 from '../../assets/user-2.jpg';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            comment: ''
        }
    }

    handleChange = (e)=>{
        const comment = e.target.value;
        this.setState(()=>({comment}))
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const { postID } = this.props;
        const { comment } = this.state;
        this.props.addComment({postID, comment})
    }
    render(){
        const { listImage = [], content} = this.props
        return (
            <CardWrapper>
                <CardTitle>
                    <CardAvatar src={userAvatar} alt='user-avatar' />
                    <CardAuthor>
                        <h1>Phuc Vo</h1>
                        <p>19 hours ago</p>
                    </CardAuthor>
                    <Edit />
                </CardTitle>
                <CardBody>
                    <p>{content}</p>
                    { listImage.length > 0 && listImage.map((image, idx) => {
                        return (<img key={idx} src={image} alt='post-content' />)
                    })}
                </CardBody>
                <CardFooter>
                    <Heart />
                    <p>8</p>
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
                    <p>17</p>
                </CardFooter>
                <FormComment>
                    <FormInput>
                        <input type='text' placeholder='Add comment here..'/>
                        <button>Add Comment</button>
                    </FormInput>
                </FormComment>
            </CardWrapper>
        )
    }
    
}

const mapDispathToProps = dispatch => {
    return {
        addComment: payload => dispatch(addCommentToPostStart(payload))
    }
}
export default connect(null, mapDispathToProps)(Card);
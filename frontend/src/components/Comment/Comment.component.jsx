import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, CommentBox, CommentAvatar, CommentContent, EditCommentWrapper, EditButton, DeleteButton, CommentAuthor } from './Comment.styled';
import { ReactComponent as Edit } from '../../assets/SVG/Edit.svg';
import { ReactComponent as Delete } from '../../assets/SVG/Delete.svg';

class Comment extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showEditForm: false
        }
    }
    showEditForm = ()=>{
        const { enableEditComment} = this.props
        const { content, _id } = this.props.comment
        enableEditComment(content, _id)
    }
    render(){
        console.log(this.props.comment)
        return (
            <Wrapper>
                <CommentBox>
                    <CommentAvatar>
                        <img src="https://www.viendong.edu.vn/Images/default-avatar.PNG" alt="user" />
                    </CommentAvatar>
                    <CommentContent>
                        <CommentAuthor>
                            <Link to='/' className='title'>Phuc Vo</Link>
                            <span className='time'>12 hours ago</span>
                        </CommentAuthor>
                        <p>
                            {this.props.comment && this.props.comment.content}
                        </p>
                    </CommentContent>
                </CommentBox>
                <EditButton className='edit' onClick={this.showEditForm}>
                    <Edit />
                </EditButton>
                <DeleteButton onClick={()=>{ this.props.deleteComment(this.props.comment)}}>
                    <Delete />
                </DeleteButton>
                <EditCommentWrapper className={this.state.showEditForm ? 'active' : ''}>
                    <form>
                        <input type="text" placeholder='Edit your comment '/>
                        <button>Edit</button>
                        <span>Cancel</span>
                    </form>
                </EditCommentWrapper>
            </Wrapper>
        )
    }
    
}

export default Comment;
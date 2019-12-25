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
        const { content, enableEditComment } = this.props
        enableEditComment(content)
    }
    render(){
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint id neque eum exercitationem ex optio dignissimos tempore blanditiis minima vitae odio, necessitatibus perspiciatis ut modi atque. Fugiat, voluptatem quos!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint id neque eum exercitationem ex optio dignissimos tempore blanditiis minima vitae odio, necessitatibus perspiciatis ut modi atque. Fugiat, voluptatem quos!
                          
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sint id neque eum exercitationem ex optio dignissimos tempore blanditiis minima vitae odio, necessitatibus perspiciatis ut modi atque. Fugiat, voluptatem quos!
                        </p>
                    </CommentContent>
                </CommentBox>
                <EditButton className='edit' onClick={this.showEditForm}>
                    <Edit />
                </EditButton>
                <DeleteButton>
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
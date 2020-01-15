import React , { Component } from 'react';
import { Wrapper, LeftContent , RightContent } from './EditPost.styled'
import Card from '../Card/Card.component';
//import { ReactComponent as Camera } from '../../assets/SVG/Camera.svg';
import StatusForm from '../StatusForm/Status-Form.component';

class EditPost extends Component {

    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            post: props.post,
            content: ''
        }
    }
    componentDidMount(){
        console.log('DidMount from EditPost')
    }
    componentWillUnmount(){
        console.log('UnMount from EditPost')
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        console.log('submit edit form')
    }
    render(){
        const { post } = this.props;
        return (
            <Wrapper>
                <LeftContent>
                    <Card post={this.props.post} isEditPost={true} />
                </LeftContent>
                <RightContent>
                    <StatusForm content={post && post.content} postID={post && post._id} isEdit={true}/>
                </RightContent>
            </Wrapper>
        )
    }
}

export default EditPost;
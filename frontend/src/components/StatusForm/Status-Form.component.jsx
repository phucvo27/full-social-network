import React from 'react';
import { StatusFormWrapper, StatusFormHeader, HeaderItem, StatusFormBody, StatusFormFooter } from './Status-Form.styled'
import Button from '../Button/Button.component';
import { ReactComponent as Camera } from '../../assets/SVG/Camera.svg';
import { postCreateStart, editPostStart } from '../../redux/post/post.actions';
import { connect } from 'react-redux';
class StatusForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: props.content ? props.content : ''
        }
    }
    handleChange = e =>{
        const content = e.target.value;
        this.setState(()=>({content}));
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const file = e.target.elements.file;
        const formData = new FormData();
        formData.append('content', this.state.content)
        if(!file.files[0]){
            formData.append('withImage', false)
        }else{
            formData.append('withImage', true);
            formData.append('file', file.files[0])
        }
        if(this.props.isEdit){
            console.log(`Content is : ${this.state.content}`)
            console.log(formData.entries().next().done)
            this.props.editPost(this.props.postID, formData);
        }else{
            this.props.createPost(formData)
        }
        
        e.target.reset();
        this.setState(()=>({content: ''}))
    }
    render(){
        console.log(this.props)
        return (
            <StatusFormWrapper>
                <StatusFormHeader>
                <HeaderItem>
                    <p>Status</p>
                </HeaderItem>
                </StatusFormHeader>
                <StatusFormBody>
                <form className="status__form__body" onSubmit={this.handleSubmit}>
                    <div className="box__multi">
                        <textarea 
                            onChange={this.handleChange}
                            placeholder="What are you thinking..." 
                            value={this.state.content} 
                            name="content" 
                            cols="30" 
                            rows="10" />
                    </div> 
                        
                    <StatusFormFooter>
                        <div>  
                            <input type="file" name="file" id="file"/>
                            <label htmlFor="file" id="file">
                                <Camera />
                            </label>
                        </div>
                    
                        <Button type='submit' typeBtn='highlight'>{this.props.isEdit ? 'Edit Status' : 'Post Status'}</Button>
                    </StatusFormFooter>
                </form>
                </StatusFormBody>
                
            </StatusFormWrapper>
        )
    }
    
}

const mapDispatchToProps = dispatch =>{
    return {
        createPost: (payload)=> dispatch(postCreateStart(payload)),
        editPost: (postID, payload) => dispatch(editPostStart(postID, payload))
    }
}

export default connect(null, mapDispatchToProps)(StatusForm);

/*
{
                        this.state.currentTabs === 'status' 
                            ? <textarea onChange={this.handleTextChange} placeholder="What are you thinking..." name="status" value={this.state.status} cols="30" rows="10" />
                            : <div className="box__multi">
                                <textarea onChange={this.handleTextChange}  placeholder="What are you thinking..." name="status" value={this.state.status} cols="30" rows="10" />
                                <input type="file" name="file" id="file"/>
                                <label htmlFor="file" id="file">Upload your file</label>
                            </div> 
                    }

*/
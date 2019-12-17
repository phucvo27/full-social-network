import React from 'react';
import { StatusFormWrapper, StatusFormHeader, HeaderItem, StatusFormBody, StatusFormFooter } from './Status-Form.styled'
import Button from '../Button/Button.component';
import { ReactComponent as Camera } from '../../assets/SVG/Camera.svg'
const StatusForm = () => {
    return (
        <StatusFormWrapper>
            <StatusFormHeader>
            <HeaderItem>
                <p>Status</p>
            </HeaderItem>
            </StatusFormHeader>
            <StatusFormBody>
            <form className="status__form__body">
                <div className="box__multi">
                    <textarea placeholder="What are you thinking..." name="status" cols="30" rows="10" />
                    
                </div> 
                    
                <StatusFormFooter>
                    <div>  
                        <input type="file" name="file" id="file"/>
                        <label htmlFor="file" id="file">
                            <Camera />
                        </label>
                    </div>
                
                    <Button type='submit' typeBtn='highlight'>Post Status</Button>
                </StatusFormFooter>
            </form>
            </StatusFormBody>
            
        </StatusFormWrapper>
    )
}

export default StatusForm

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
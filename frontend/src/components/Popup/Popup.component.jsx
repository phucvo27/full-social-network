import React, { Component } from 'react';
import { Close, Content, Popup } from './Popup.styled';
import EditPost from '../EditPost/EditPost.component';

class PopUp extends Component{

    componentDidMount(){
        const popup = document.querySelector('#popup');
        // rootElement.classList.add('makeBlur');
        // headerElement.classList.add('makeBlur');
        popup.classList.add('active')
    }

    componentWillUnmount(){
        console.log('UnMount from PopUp')
    }

    handleClosePopUp = ()=>{
        const rootElement = document.querySelector('.root');
        const popup = document.querySelector('#popup');
        const headerElement = document.querySelector('.header');
        rootElement.classList.remove('makeBlur');
        headerElement.classList.remove('makeBlur');
        popup.classList.remove('active');
        setTimeout(()=>{
            this.props.hidePopUp()
        }, 600)

    }
    render(){
        return (
            <Popup id='popup'>
                <Content className='content'>
                    <EditPost post={this.props.post}/>
                    <Close onClick={this.handleClosePopUp}>X</Close>
                </Content>
            </Popup>
        )
    }

}


export default PopUp;
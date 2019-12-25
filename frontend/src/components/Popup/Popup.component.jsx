import React, { Component } from 'react';
import { Close, Content, Popup } from './Popup.styled';

class PopUp extends Component{

    handleClosePopUp = ()=>{
        const rootElement = document.querySelector('.root');
        const popup = document.querySelector('#popup');
        const headerElement = document.querySelector('.header');
        rootElement.classList.remove('makeBlur');
        headerElement.classList.remove('makeBlur');
        popup.classList.remove('active');
    }
    render(){
        return (
            <Popup id='popup'>
                <Content className='content'>
                    <h2>This is content of popup</h2>
                    <Close onClick={this.handleClosePopUp}>X</Close>
                </Content>
            </Popup>
        )
    }

}


export default PopUp;
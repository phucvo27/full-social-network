import React from 'react';
import { FlashMessageWrapper } from './Flash-Message.styled';

const FlashMessage = ({ message, type })=>{
    return (
        <FlashMessageWrapper type={type}>
            <p>{message}</p>
        </FlashMessageWrapper>
    )
}

export default FlashMessage;
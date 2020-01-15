import React from 'react';
import { Wrapper, Scence, Cube, Face } from './Spinner.styled';
import html5 from '../../assets/img-cube/html5-icon.png';
import nodejs from '../../assets/img-cube/nodejs-icon.svg';
import mongodb from '../../assets/img-cube/mongodb-icon.png';
import react from '../../assets/img-cube/react-icon.png';
import sass from '../../assets/img-cube/sass-logo.png';
import js from '../../assets/img-cube/js-icon.svg';
const Loading = ()=>{
    return (
        <Wrapper>
            <Scence>
                <Cube>
                    <Face className='face--front'>
                        <img src={nodejs} alt="" />
                    </Face>
                    <Face className='face--back'>
                        <img src={mongodb} alt="" />
                    </Face>
                    <Face className='face--left'>
                        <img src={react} alt="" />
                    </Face>
                    <Face className='face--right'>
                        <img src={js} alt="" />
                    </Face>
                    <Face className='face--top'>
                        <img src={html5} alt="" />
                    </Face>
                    <Face className='face--bottom'>
                        <img src={sass} />
                    </Face>

                </Cube>
            </Scence>
        </Wrapper>
    )
}

export default Loading;
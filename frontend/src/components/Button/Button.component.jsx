import React from 'react';
import { Button } from './Button.styled';


const ButtonComplex = ({ typeBtn,handleChange, children })=>{
    return (
        <Button typeBtn={typeBtn} onclick={handleChange}>
            {children}
        </Button>
    )
}
export default ButtonComplex
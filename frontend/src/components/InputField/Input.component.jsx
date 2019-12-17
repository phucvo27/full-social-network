import React from 'react';
import { Input, InputWrapper } from './Input.styled'

const InputField = ({handleChange, width ,label ,...otherProps}) => {
    return (
        <InputWrapper width={width}>
            <Input onChange={handleChange} {...otherProps} />
            {
                label && <label>{label}</label>
            }
        </InputWrapper>
    )
}

export default InputField;
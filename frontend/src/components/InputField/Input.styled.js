import styled from 'styled-components';

export const InputWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center
    position: relative;
    width: ${ props => props.width};
    margin-bottom: 2rem;
    label { 
        position: absolute;
        top: 1rem;
        left: 1rem;
        font-size: 1.6rem;
        transition: all .2s;
    }
    
`
export const Input = styled.input`
    color: #333;
    padding: 1.5rem
    border: none;
    border-bottom: .1rem solid transparent;
    font-size: 1.2rem;
    outline: none;
    width: 100%;
    background-color: #fff;
    ::placeholder{
        color : #9a9fbf;
    }
    :focus{
        outline: none;
        border-bottom: .1rem solid orange;
    }
    :focus + label, &:valid + label {
        top: 0;
        left: 1rem;
        font-size: 1rem;
        color: green;
      }
    :invalid + label {
        font-size: 1rem;
        color: red;
        top: 0rem;
        left: 1rem;
    }
`
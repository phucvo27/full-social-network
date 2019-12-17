import styled from 'styled-components';


export const Button = styled.button`

    diplays: inline-block;
    padding: 1rem 2rem;
    color: #fff;
    font-size: 1.2rem;
    border: none;
    border-radius: .5rem;
    background-color: ${ props => {
        if(props.typeBtn === 'highlight'){
            return '#ff5e3a'
        }else {
            return '#32e4cd'
        }
    }};
    cursor: pointer;
    transition: transform .2s;

    :hover {
        transform: translateY(-1rem);
    }

`
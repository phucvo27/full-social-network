import styled, { keyframes } from 'styled-components';


const slideIn = keyframes`

    from {
        right: -50rem;
        opacity: 0;
    }
    to{
        right: 0rem;
        opacity: 1;
    }

`

export const FlashMessageWrapper = styled.div`

    position: fixed;
    top: 0;
    right: 0;
    width: 30rem;
    height: 5rem;
    background-color: ${props => props.type === 'success' ? 'lightgreen' : '#EA5153'};
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.4rem;
    border-radius: .2rem;
    animation: ${slideIn} 1s;
    z-index: 50;
`

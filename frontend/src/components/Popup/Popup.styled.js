import styled from 'styled-components';


export const Popup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: transparent;

    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: all .5s;

    &.active {
        visibility: visible;
        opacity: 1;
        backdrop-filter: blur(1rem);
        z-index: 100;
    }

    &.active .content{
        transform: scale(1);
        transition: all .5s;
    }
`

export const Content = styled.div`

    height: 400px;
    width: 400px;
    background-color: red;
    border-radius: .5rem;
    transform: scale(0);
    transition: all .5s;

    position: relative;

`

export const Close = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    font-size: 1.6rem;
    cursor: pointer;
`
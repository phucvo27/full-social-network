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
    width: 50%;
    background-color: #fff;
    border-radius: .5rem;
    transform: scale(0);
    transition: all .5s;
    padding: 2rem;
    position: relative;
    box-shadow: .1rem .4rem .6rem rgba(0,0,0,.3);

`

export const Close = styled.span`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #333;
    font-size: 1.6rem;
    cursor: pointer;
`
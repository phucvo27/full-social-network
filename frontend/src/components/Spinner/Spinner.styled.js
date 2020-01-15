import styled, { keyframes } from 'styled-components';

const spin = keyframes`

    0%{
        transform: rotateY(0deg)
    }
    50%{
        transform: rotateY(360deg)
    }
    75%{
        transform: rotateX(90deg)
    }
    90%{
        transform: rotateX(-90deg)
    }
    100%{
        transform: rotateX(0deg)
    }

`

export const Wrapper = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Scence = styled.div`
    width: 20rem;
    height: 20rem;
    perspective: 60rem;
`

export const Cube = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    transform-style: preserve-3d;
    animation: ${spin} 10s;
    animation-iteration-count: infinite;
    animation-delay: 1s;
`
export const Face = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: #fff;

    img {
        width: 50%;
    }

    &.face--front{
        background-color: #fff;
        transform: rotateY(0deg) translateZ(10rem);
    }
    &.face--back{
        background-color: #fff;
        transform: rotateY(180deg) translateZ(10rem);
    }
    &.face--left{
        background-color: #fff;
        transform: rotateY(-90deg) translateZ(10rem);
    }
    &.face--right{
        background-color: #fff;
        transform: rotateY(90deg) translateZ(10rem);
    }
    &.face--top{
        background-color: #fff;
        transform: rotateX(90deg) translateZ(10rem);
    }
    &.face--bottom{
        background-color: #fff;
        transform: rotateX(-90deg) translateZ(10rem);
    }
`

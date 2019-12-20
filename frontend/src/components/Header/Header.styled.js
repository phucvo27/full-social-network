import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: 7rem;
    width: 100%;
    background-color: #3f4257
    padding: 0 10rem 0 10rem;;
    display: flex;
    justify-content: flex-start;
    align-items: center
    z-index: 50;
    @media screen and ( max-width: 600px ){
        padding: 0 4rem;
    }
`
export const HeaderTitle = styled.h1`
    font-size: 1.6rem;
    font-weight: normal
    color: #fff;
    text-transform: uppercase
    margin-right: 2rem;
    cursor: pointer;
`

export const HeaderForm = styled.div`
    margin-right: auto
    div {
        margin-bottom: 0
    }
`
export const HeaderHambuger = styled.div`
    height: .2rem;
    width: 2.5rem;
    background-color: #fff;
    position: relative;
    ::after, ::before {
        position: absolute;
        display: block
        content: '';
        top: .7rem;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    ::before {
        top: -.7rem;
    }
`
export const HeaderInteract = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 30rem;
    @media screen and ( max-width: 600px ){
        left: 0;
        position: fixed;
        bottom: 0;
        width: 100%;
        display: flex;
        background-color: #fff;
        justify-content: space-around;
        align-items: center;
        height: 7rem;
        background-color: #3f4257;
    }
`
export const HeaderItem = styled.div`
    position: relative;
    cursor: pointer;
    > .icon {
        height: 2rem;
        width: 2rem;
        fill: 'yellow'
    }
    > .notification{
        background-color: red;
        color: #fff;
        height: 1.5rem;
        width: 1.5rem;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -1rem;
        right: -.5rem;
    }
    &.User {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    &.User > img {
        display: inline-block;
        height: 3.2rem;
        width: 3.2rem;
        border-radius: 50%;
        margin-right: 1rem;
        margin-left: 1rem;
    }
    &.User > p {
        font-size: 1.4rem;
        color: #fff;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    width: 38rem;
    height: 0rem;
    padding: 1.2rem;
    transform: translateX(-50%);
    background-color: #fff;
    border-radius: .5rem;
    
    opacity: 0;
    visibility: hidden;
    transition: all .2s;
    z-index: 10;
    ${HeaderItem}:hover & {
        opacity: 1;
        visibility: visible;
        height: 20rem;
    }
    @media screen and ( max-width: 600px ){
        position: fixed;
        top: 0rem;
        left: 0rem;
        width: 100%;
        height: calc(100% - 7rem );
        transform: translateX(0);
        border-radius: 0rem;
        opacity: 0;
        visibility: hidden;
        transition: all .2s;
        z-index: 10;
        ${HeaderItem}:hover & {
            opacity: 1;
            visibility: visible;
            height: calc(100% - 7rem );
        }
    }
`

export const DropdownTitle = styled.div`
    
    padding: 1.5rem .5rem;
    border-bottom: .1rem solid #edf2f6;
    display: flex;
    justify-content: space-between;
    align-item: center;
    h4, p {
        font-size: 1.5rem;
        color: #333;
    }
    p {
        display: none;
    }
    @media screen and ( max-width: 600px ){
        p {
            display: block;
            cursor: pointer;
        }
    }
`
export const DropdownContent = styled.div`
    width: 100%;
`
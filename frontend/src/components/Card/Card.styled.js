import styled from 'styled-components';


export const CardWrapper = styled.article`

    padding: 2.5rem;
    background-color: #fff;
    border-radius: .5rem;
    margin-bottom: 2rem;
    border: .1rem solid #e6ecf5

`
export const CardTitle = styled.div`

    display: flex;
    justitfy-content: flex-start;
    align-items: center;
    
`
export const CardAvatar = styled.img`

    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-right: 1.2rem;

`
export const CardAuthor = styled.div`

    
    display: inline-block;
    margin-right: auto;
    > h1 {
        font-weight: 700;
        color: #515365;
        font-size: 1.4rem;
    }
    > p {
        color: #888da8;
        font-size: 1rem;
    }
`
export const CardBody = styled.div`

    margin: 2rem 0rem;
    > p {
        font-size: 1.4rem;
        color: #888da8 
    }
    > img {
        width: 100%;
        margin: 1.4rem 0rem;
        border-radius: .5rem;
    }
`

export const CardFooter = styled.div`

    padding: 2.5rem;
    border-top: .1rem solid #e6ecf5

    display: flex;
    justify-content: flex-start;
    align-items: center;
    > svg {
        width: 1.8rem;
        height: 1.8rem;
        fill: #655858;
    }
    &:hover > svg {
        fill: orange;
    }

    > p {
        color: #655858;
        font-size: 1.2rem
        margin: 0 1rem;
    }
`
export const FriendListLiked = styled.ul`

    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
`

export const FriendLiked = styled.li`

    &:not(:first-child){
        margin-left: -1rem;
    }

`
export const FriendAvatar = styled.img`

    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    display: inline-block;
    border: .1rem solid #fff;

`
export const FormComment = styled.div`

    margin: 0rem 0rem 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    > *:first-child {
        flex: 1;
        margin-right: 1rem;
    }
    input {
        background-color: #fff;
        border: .1rem solid #dedede;
        color: #333;
    }

    input::placeholder{
        color : #333;
    }
    button {
        align-self: stretch;
    }

`
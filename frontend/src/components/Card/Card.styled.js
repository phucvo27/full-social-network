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

    svg {
        height: 1.6rem;
        width: 1.6rem;
        fill: grey;
        cursor: pointer;
        margin-right: 2rem;
    }
    
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
        cursor: pointer;
    }
    > svg:hover  {
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

export const ListComments = styled.div`

    width: 100%;

`

export const FormComment = styled.div`

    margin: 0rem 0rem 2.5rem;

`
export const FormInput = styled.form`

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;


    input {
        flex: 1;
        padding: 1rem 2rem;
        outline: none;
        border: none;
        border-bottom: .1rem solid transparent;
        font-size: 1.2rem;
        background-color: #fff;
        ::placeholder{
            color : #9a9fbf;
        }
        :focus{
            outline: none;
            border-bottom: .1rem solid orange;
        }
    }

    button {
        border: none;
        background-color: #ff5e3a;
        margin-left: 2rem;
        /* height: 100%; */
        display: inline-block;
        align-self: stretch;
        padding: 0 2rem;
        border-radius: .4rem;
        color: #fff;
        cursor: pointer;
        font-size: 1.2rem;
        transition: all .2s;
        &.edit {
            background-color: orange;
            transition: all .2s;
        }
    }

`
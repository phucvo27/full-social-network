import styled from 'styled-components';

export const Wrapper = styled.div`

    width: 100%;
    position: relative;

`
export const CommentBox = styled.div`

    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1rem;

`
export const CommentAuthor = styled.div`

    margin-bottom: 1rem;
    a.title {
        font-size: 1.3rem;
        font-weight: bold;
        color: #333;
        text-decoration: none;
        display: inline-block;
        margin-right: 1rem;
        transition: color .2s;
    }
    a.title:hover {
        color: #ff5e3a;
    }

    .time {
        font-size: .9rem;
    }

`
export const EditButton = styled.div`

    position: absolute;
    top: 1rem;
    right: 4rem;
    cursor: pointer;

    svg {
        height: 1.6rem;
        width: 1.6rem;
        fill: grey;
        cursor: pointer;
        margin-right: 2rem;
    }

`
export const DeleteButton = styled.div`

    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    svg {
        height: 1.6rem;
        width: 1.6rem;
        fill: grey;
        cursor: pointer;
    }

`
export const CommentAvatar = styled.div`
    align-self: flex-start;
    padding: 0 1rem;
    img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        }
    }
`

export const CommentContent = styled.div`

    margin-left: 1rem;
    font-size: 1.2rem;

`

export const EditCommentWrapper = styled.div`
    width: 100%;
    visibility: hidden;
    opacity: 0;
    transform: scale(0);
    transition: all .5s;
    form {
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
        input {
            flex: 1;
            border: none;
            border-bottom: .1rem solid orange;
            outline: none;
        }
        button, span {
            padding: 1rem 2rem;
            background-color: orange;
            border: none;
            border-radius: .5rem;
            color: #fff;
            margin-left: 2rem;
            cursor: pointer;
        }
    }

    &.active {
        visibility: visible;
        opacity: 1;
        transform: scale(1);
        transition: all .5s;
    }
    }
`
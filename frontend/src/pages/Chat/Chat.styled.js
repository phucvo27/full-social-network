import styled from 'styled-components';

export const ChatWrapper = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f6f6;
    padding: 9rem 0rem 5rem;
`
export const Wrapper = styled.section`
    width: 90%;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-shadow: 0 0 34px 0 rgba(63,66,87,0.1);
`
export const Title = styled.h2`
    font-size: 2.2rem;
    font-weight: normal;
    height: 5rem;
    padding: 0 2rem;
    border-bottom: .1rem solid #edf2f6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const ChatFriends = styled.div`
    width: 30%;
    height: 100%;
    border-right: .1rem solid #edf2f6;
    overflow: hidden;
`
export const ListFriends = styled.ul`
    list-style: none;
    width: 100%;
    overflow: auto;
    padding: 5rem 0rem 10rem;
    height: 100%;
`;
export const Friend = styled.li`
    width: 100%;
    display: flex;
    justity-content: flex-start;
    align-items: center;
    background-color: #fff;
    padding: 2rem;
    cursor: pointer;
    transition: all .2s;
    &:not(:first-child) {
        border-top: .1rem solid  #edf2f6;
    }
    :hover,  &.active { 
        background-color: #d2d5d6;
    }
`;
export const FriendAvatar = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-right: 2rem;
`
export const FriendName = styled.h2`
    font-size: 2rem;
    font-weight: normal;
    margin-right: auto;
`
export const Status = styled.div`
    height: 1rem;
    width: 1rem;
    background-color: ${props => props.online ? '#11d211' : 'grey' };
    border-radius: 50%
`

export const ChatBox = styled.div`
    width: 70%;
    height: 100%;
    border-right: .1rem solid #edf2f6;
`

export const ChatBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    height: calc(100% - 12rem);
    overflow: hidden;
    padding: 5rem 0;
    background-color: #edf2f6;
`
export const MessageBox = styled.div`
    align-self: ${props => props.owner ? 'flex-end' : 'flex-start'};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`
export const MessageAvatar = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    margin: 0 2rem;
    order: ${props => props.owner ? 3 : 1}
`
export const MessageContent = styled.div`
    order: 2;
    background-color: ${props => props.owner ? '#cbf1ff' : '#fff'};
    padding: 1.5rem;
    border-radius: ${props => props.owner ? '.5rem 0 .5rem .5rem' : '0 .5rem .5rem .5rem'};
    
    p { 
        font-size: 1.4rem;
        color: #333;
        text-align: left;
    }
`

export const ChatForm = styled.div`
    height: 7rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    font-size: 1.4rem;
    input { 
        height: 100%;
        padding: 0rem 2rem;
        border: none;
        flex: 1;
        outline: none;
    }
`
export const ButtonSend = styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 8rem;
    transition: background .2s;
    border-left: .1rem solid #03a9e6;
    svg { 
        width: 2rem;
        height: 2rem;
        fill: #03a9e6
        transition: fill .2s;
    }
    :hover {
        background-color: #03a9e6;
    }
    :hover svg {
        fill: #fff;
    }
`
import styled from 'styled-components';


export const ListFriendWrapper = styled.div`

    position: fixed;
    top: 7rem;
    right: 0;
    height: 100vh;
    width: 7rem;
    background-color: #fff;
    z-index: 49;

    @media screen and ( max-width: 600px ){
        display: none;
    }
`
export const List = styled.ul`

    padding: 1rem;
    list-style: none;
`
export const Friend = styled.li`

    position: relative;
    width: 100%;
    margin: 1rem 0rem;

    & > .avatar {
        width: 3.4rem;
        height: 3.4rem;
        border-radius: 50%;
    }
`
export const FriendState = styled.div`

    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background-color: ${props => props.online ? '#32e4cd' : '#ffd52f'}

    position: absolute; 
    top: 0rem;
    left: 0rem;

`
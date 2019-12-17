import styled from 'styled-components';

export const Wrapper = styled.section`

    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    grid-gap: 3rem;

`

export const CardFriend = styled.div`

    background-color: #fff;
    border-radius: .5rem;
    width: 30rem;

`
export const CardFriendThumb = styled.div`

    height: 10rem;
    width: 100%;
    background-image: linear-gradient(to right bottom, rgba(0,0,0,.4), rgba(0,0,0,.7)), url(${props => props.thumb});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: .5rem .5rem 0 0;
    position: relative;
    img {
      height: 6.2rem;
      width: 6.2rem;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      bottom: -2rem;
      left: 50%;
      transform: translateX(-50%);
    }
`

export const CardFriendProfile = styled.div`

    background-color: #fff;
    padding: 4rem 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > * {
        padding: 2rem 0;
        font-size: 1.4rem;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    & > *:not(:first-child) {
        border-top: .1rem solid #edf2f6;
    }
    button {
        border: none;
        padding: 1rem 2rem;
        border-radius: .5rem;
        color: #fff;
    }
    .message {
        background-color: #38a9ff;
    }
    .profile{
        background-color: #ff5e3a;
    }

`
import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    transition: all .2s;

    :hover {
        box-shadow: 0.1rem 0.5rem 4rem rgba(0,0,0,.04);
        transform: translateY(-.1rem);
        border-radius: .5rem;
        transition: all .2s;
    }
`

export const AvatarNotification = styled.img`
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
`
export const ContentNotification = styled.div`
    flex: 1;
    padding-left: 1rem;
    h5 {
        font-size: 1.4rem;
        margin-bottom: .5rem;
        color: #333;
    }
    p {
        font-size: 1.2rem;
        color: #383838;
    }
`
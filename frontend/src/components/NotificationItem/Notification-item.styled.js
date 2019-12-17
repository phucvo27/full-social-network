import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    padding: 1rem;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
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
import styled from 'styled-components';


export const UserWrapper = styled.main`
    width: 130rem;
    margin: 10rem auto;
    @media screen and ( min-width: 1200px ){
        width: 130rem;
    }
    @media screen and ( max-width: 1200px ){
        width: 100rem;
        margin: 10rem auto 10rem 7rem;
    }
    @media screen and ( max-width: 900px ){
        width: 60rem;
        margin: 10rem auto;
        margin-left: 14rem;
    }
    @media screen and ( max-width: 600px ){
        width: 50rem;
        margin: 10rem auto;
    }
`
export const UserHeader = styled.section`
    width: 100%;
    margin-bottom: 2rem;
`
export const HeaderThumb = styled.div`
    width: 100%;
    
    position: relative
    
    img {
        width: 100%;
        border-radius: .5rem .5rem 0rem 0rem;
    }
`
export const AddFriendButton = styled.button`

    position: absolute;
    right: 2rem;
    bottom: 1rem;
    display: inline-block;
    padding: 1rem 3rem;
    border: none;
    border-radius: .5rem;
    font-size: 1.4rem;
    background-color: #fff;
    color: #333;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform .2s;
    :hover {
        transform: translateY(-1rem);
        box-shadow: 0 1rem 4rem rgba(0,0,0,.1);
    }

`

export const Author = styled.div`
    position: absolute;
    left: 0;
    bottom: -2rem;
    
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and ( max-width: 900px){
        bottom: -1rem;
    }
` 
export const AuthorAvatar = styled.div`
    
    margin-right: 2rem;
    margin-left: 2rem;
    img {
        height: 13rem
        width: 13rem;
        border-radius: 50%;
        border: .6rem solid #fff;
    }
    @media screen and ( max-width: 900px){
        img {
            height: 7rem;
            width: 7rem;
            border: .2rem solid #fff;
        }
    }
`

export const AuthorName = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h1 {
        font-size: 2.2rem;
        font-weight: normal;
        color: #fff;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1.6rem;
        color: #fff;
    }
    @media screen and ( max-width: 900px){
        h1 {
            font-size: 2rem;
            margin-bottom: .5rem;
        }
        p {
            font-size: 1.2rem;
        }
    }
`
export const UserProfileSection = styled.section`
    width: 100%;
    display : flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #fff;
    padding: 3.5rem 0;
    font-size: 1.6rem;

    p {
        transition: color .5s;
        cursor: pointer;
    }
    p:hover {
        color: #ff5e3a;
        transition: color .5s;
    }
    p.active {
        color: #ff5e3a;
    }
`
export const Content = styled.section`
    padding: .5rem 2rem;
    border: 1px solid #e6ecf5;
    margin-bottom: 1.5rem;
    background-color: #fff;
    border-radius: .5rem;
`
export const Title = styled.h1`
    font-size: 2rem;
    padding: 2rem 2.3rem;
    border-bottom: .1rem solid #edf2f6;
`

export const LastestPhoto = styled.section`
    display: grid;
    margin-top: 2rem;
    padding: 2.4rem 2.3rem 2.3rem;
    grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
    grid-gap: .5rem;
    img {
        width: 100%;
        border-radius: .5rem;
    }
`

export const Profile = styled.section`
    padding: 2.4rem 2.3rem 2.3rem;
`

export const Row = styled.div`
    display: flex;
    padding: 2rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center:
    :not(:first-child){
        border-top: .1rem solid #edf2f6;
    }
    .title {
        font-weight: bold;
        font-size: 1.4rem;
        margin-right: 2rem;
    }
    .desc {
        font-size: 1.2rem;
        font-weight: normal;
    }
`

export const Empty = styled.div`
    height: 10rem;
    background-color: #fff;
    border-radius: .5rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
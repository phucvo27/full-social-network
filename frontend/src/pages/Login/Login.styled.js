import styled from 'styled-components';

const colorGrey = '#EDEFF1';
const colorWhite = '#fff';
//https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg
export const Wrapper = styled.section`

    height: 100vh;
    width: 100%;
    background-color: ${colorGrey};

    display: flex;
    justify-content: center;
    align-items: center;

`

export const FormWrapper = styled.div`

    width: 40rem;
    background-color: ${colorWhite};
    padding: 4rem 0rem;
    display: flex;
    justfiy-content: center;
    align-items: center;
    flex-direction: column;
`

export const Form = styled.form`

    width: 34rem;
    marign: 0 auto;

    button {
        width: 100%;
        background: linear-gradient(215deg, #546e7a, #37474f);
        display: block;
        color: ${colorWhite};
        font-size: 1.4rem;
        padding: 1.2rem 0;
        cursor: pointer;
    }
`
export const FormAvatar = styled.img`

    height: 7.7rem;
    margin-bottom: 35px;    

`
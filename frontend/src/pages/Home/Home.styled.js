import styled from 'styled-components';


export const HomepageWrapper = styled.main`
    display: grid;
    grid-templates-rows: 1;
    grid-template-columns: 1fr 2fr 1fr
    grid-column-gap: 2rem;
    width: 130rem;
    margin: 10rem auto;
    @media screen and  (max-width: 1200px){
        width: 110rem;
    }
    @media screen and  (max-width: 600px){
        margin: 10rem auto;
        width: 80%;
        grid-template-columns: 1fr;
    }
`

export const LeftContent = styled.section`
    background-color: #fff;
    width: 100%;
    height: 50rem;
    @media screen and  (max-width: 600px){
        display:none
    }
`
export const CenterContent = styled.section`
    width: 100%;
    
`
export const RightContent = styled.section`
    background-color: #fff;
    width: 100%;
    height: 50rem;
    @media screen and  (max-width: 600px){
        display:none
    }
`
import styled from 'styled-components';


export const Grid = styled.section`

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr 1fr
    grid-column-gap: 2rem;
    width: 130rem;
    margin: 5rem auto;

    &.home-page{
        margin: 10rem auto;
    }

    @media screen and ( min-width: 1200px ){
        width: 130rem;
    }
    @media screen and ( max-width: 1200px ){
        width: 100rem;

        &.home-page {
            margin: 10rem auto 10rem 7rem;
        }
    }
    @media screen and ( max-width: 900px ){
        width: 60rem;
        grid-template-columns: 1fr;
        &.home-page {
            margin: 10rem auto;
        }
    }
    @media screen and ( max-width: 600px ){
        width: 50rem;
        grid-template-columns: 1fr;
        &.home-page {
            margin: 10rem auto;
        }
    }
    
`

export const LeftContent = styled.section`
    border-radius: .5rem;
    width: 100%;
    @media screen and  (max-width: 900px){
        display:none
    }
`
export const CenterContent = styled.section`

    width: 100%;

`
export const RightContent = styled.section`

    
    width: 100%;
    border-radius: .5rem;

    @media screen and  (max-width: 900px){
        display:none
    }

`
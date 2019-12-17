import styled from 'styled-components'

export const Masonry = styled.section`

    width: 100%;
    margin: 5rem auto;
    columns: 4;
    column-gap: 1rem;
    transition: all .3s;

    @media screen and (max-width: 1200px) {
            width: 90rem;
            columns: 3;
        
    }
    
    @media screen and (max-width: 900px) {
            width: 60rem;
            columns: 2;
        
    }
    
    @media screen and (max-width: 600px) {
            width: 40rem;
            columns: 1;
        
    }

`
export const MansoryItem = styled.div`

    display: inline-block;
    width: 100%;
    margin-bottom: 1rem;
    filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));

    img {
        width: 100%;
        border-radius: .5rem;
    }
`
import styled from 'styled-components';

const grey = '#ddd';
const orange = '#FE5E3A';
const white = '#fff';
export const StatusFormWrapper = styled.section`

    width: 100%
    margin-bottom: 2rem;

`
export const StatusFormHeader = styled.div`

    background-color: ${grey};
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    border-bottom: .1rem solid ${grey};
`
export const HeaderItem = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 7rem;
    width: 14rem;
    font-size: 1.4rem;
    padding: 0 2rem;
    cursor: pointer;
    background-color: #fff;

`
export const StatusFormBody = styled.div`
    width: 100%;
    textarea {
        width: 100%;
        padding: 1rem;
        border: none;
        resize: none;
        outline: none;
    }
    .box__multi{
        position: relative;
        input[type=file]{
            display: none;
        }
    }
    
`
export const StatusFormFooter = styled.div`

    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    background-color: #fff;
    position: relative;

    input[type=file]{
        display: none;
    }
    label {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 1.2rem;
        display: inline-block;
        padding: 1rem 2rem;
        border-bottom: .1rem solid $color-orange;
        transition: all .2s;
        cursor: pointer;
        &:hover{
            color: $color-white;
            background-color: $color-orange
        }
    }
    svg {
        width: 2.2rem;
        height: 2.2rem;
    }
    button {
        background-color: ${white};
        transition: background-color .6s;
        color: #333;
        border: .1rem solid ${grey}
    }
    button:hover {
        transform: translateY(0);
        background-color: ${orange}
        color: ${white}
    }

`
//box-shadow: 1rem 2rem 4rem rgba(0,0,0,0.3);
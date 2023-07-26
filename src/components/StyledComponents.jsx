import styled from 'styled-components'

export const Quote = styled.h2`
    border-radius: 2px
    font-size: 1.5rem;
    padding: 1rem 2rem;
    margin: 1rem;
    border-left: 4px solid #FFD580;
`

export const Author = styled.div`
    padding: 1rem;
    margin: 1rem;
    color: #000000;
    border-radius: 2px;
    width: 400px;
    margin-left: 3rem;
    transition: background-color .3s ease;
    &:hover{
        background-color: #333333;
        color: #FFFFFF;
    }
`

export const Button = styled.button`
    font-size: 1rem;
    align-items: center;
    transition: background-color .3s ease;
    padding: .5rem;
    border-radius: 3px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: .5rem;
    background: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        background-color: #333333;
        color: #FFFFFF;
    }
`
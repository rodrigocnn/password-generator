import styled from 'styled-components'

export const Container = styled.div`
    width: 540px;
    max-width: 540px;
    min-height:55px ;
    background-color: #24232b ;
    color: #55545c ;
    padding: 1rem ;

`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end ;
`

export const ContainerButton = styled.div`
    display: flex;
    justify-content:space-between ;
`

export const Button = styled.button`
    background-color: transparent;
    border: 0;
    margin-top: 0.2rem;
    svg{
        color: #a4ffaf ;
        font-size: 1rem ;
    }
`

export const Snackbar = styled.span`
    color: #999 ;
    font-size: 0.7rem;
    margin-right:0.5rem ;
    top: -2px;
    position: relative;
`

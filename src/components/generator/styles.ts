import styled from 'styled-components'



export const Container = styled.div`
    width: 540px;
    max-width: 540px;
    background-color: #24232b ;
    color: #55545c ;
    padding: 1rem ;

`
export const Form = styled.form`
    margin-top: 1rem ;
    margin-left: -0.3rem;
`
export const FormGroup = styled.div`
  label{
    margin-left: 0.5rem;
    color: white ;
    font-size: 0.8rem ;
  }
`

export const Button = styled.button`
    width: 100%;
    background-color: #a4ffaf ;
    outline: none;
    border: none;
    text-align: center ;
    color: black ;
    padding: 0.8rem ;
    margin-top: 1rem ;

    &:hover {
      filter: brightness(0.9);
    }
`
export const CaracterLenght = styled.div`
  display: flex ;
  justify-content: space-between ;
  margin-bottom: 0.5rem;
  margin-left: -0.3rem;

`
export const CaracterText = styled.h3`
  color: #fff;
  font-size: 0.8rem;

`
export const CaracterNumber = styled.p`
    color: #a4ffaf ;

`

export const Strength = styled.div`
  display: flex ;
  justify-content: space-between ;
  align-items: center;
  width: 100%;
  min-height: 2rem ;
  margin-top: 1rem;
  padding: 1rem ;
  background-color: black ;
  text-transform: uppercase ;
  font-size: 0.7rem;
  font-weight: bold ;
  color: #999 ;
`
export const StrengthIcons = styled.div`
  display: flex ;

  svg{
    color: '#fff';
    font-size: 1rem ;
  }

`

export const Validation = styled.div`
    display: flex ;
    justify-content: space-between;
    align-items: center ;
    min-width: 540px;
    background-color: #a33a3a;
    color: #fff ;
    padding: 0.5rem ;
    font-size: 0.8rem;

    button{
      border: 0;
      background-color: transparent;
      color: #fff;
      font-size: 1.3rem ;
      position: relative;
      top:3px;
    }
`

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiSad } from 'react-icons/bi'
import { useSelector } from 'react-redux'


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  width: var(--width);
  max-width: var(--maxWidth);
  margin: 0 auto;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};

  > svg {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 750px) {
    margin-left: 0;

    > svg {
      margin-top: 1em;
      width: 150px;
      height: 150px;
    }
  }
`

const Title = styled.h1`
  font-size: 8rem;
  font-weight: 800;
  color: var(--primaryColor);

  @media (max-width: 750px) {
    font-size: 4rem;
  }
`

const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};

  @media (max-width: 750px) {
    font-size: 1.25rem;
  }
`

const Return = styled.h3`
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'rgba(30,30,30,0.9)'};
  margin-top: 1em;
  font-weight: 300;
  
  @media (max-width: 750px) {
    width: 15em;
  }
`

const HomePage = styled(Link)`
  color: inherit;
  font-weight: 400;
`

export default function NotFound() {

  const darkMode = useSelector((state) => state.theme.value)

  return (
    <Container>
      <Left>
        <Title>404</Title>
        <SubTitle darkMode={darkMode}>Oops! This page doesn't exist.</SubTitle>
        <Return darkMode={darkMode}>How did you even get here??? Return to <HomePage to="/">Home Page</HomePage></Return>
      </Left>
      <Right darkMode={darkMode}>
        <BiSad />
      </Right>
    </Container>
  )
}

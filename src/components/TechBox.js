import React from 'react'
import styled from 'styled-components'

const breakPoint = '(max-width: 500px)'

const Container = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  background-color: ${props => props.darkMode ? 'rgb(59, 75, 97)' : 'rgb(223,223,223)'};
  height: 40px;
  margin: 5px;

  @media ${breakPoint}{
    width: 130px;
  }
`

const Image = styled.img`
  max-height: 100%;
  max-width: 40px;
  padding: 5px;
  display: block;

  @media ${breakPoint}{
    max-width: 30px;
    max-height: 35px;
    padding: 2px;
    margin-left: 3px;
  }
`

const Name = styled.span`
  margin: 0 auto;
  font-weight: 500;
  letter-spacing: .05em;
  text-align: center;
  line-height: 1em;

  @media ${breakPoint}{
    font-size: .9em;
  }
`

export default function TechBox({src, name, darkMode}) {
  return (
    <Container darkMode={darkMode}>
      <Image  src={src} alt={name}></Image>
      <Name>{name}</Name>
    </Container>
  )
}

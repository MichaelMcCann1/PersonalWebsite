import React from 'react'
import styled from 'styled-components'
import { AiFillGithub, AiFillPhone } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import Toggle from './Toggle'
import { useSelector } from 'react-redux'

const breakPoint = '(max-width: 600px)'

const Container = styled.header`
  display: flex;
  align-items: center;
  width: var(--width);
  max-width: var(--maxWidth);
  margin: 0 auto;
  margin-top: 2em;

  @media ${breakPoint}{
    margin-top: 1em;
  }
`

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media ${breakPoint}{
    width: 165px;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Resume = styled.a`
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};
  font-size: 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  transition: all .3s ease;
  margin-left: 1em;

  :hover {
    color: var(--primaryColor);
  }

  @media ${breakPoint}{
    font-size: 1.5rem;
    margin-left: 0;
    margin-top: 4px;
  }
`

const SocialIcon = styled.a`
  border: ${props => props.darkMode ? '2px solid var(--darkModeText)' : '2px solid black'};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 10px;
  text-decoration: none;
  color: black;
  transition: all .3s ease;

  > svg {
    width: 25px;
    height: 25px;
    transition: inherit;
    color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};
  }

  :hover > svg {
    color: var(--primaryColor);
  }
  
  :hover {
    border-color: var(--primaryColor);
  }

  @media ${breakPoint}{
    width: 40px;
    height: 40px;
    margin: 7px;

    > svg {
      width: 25px;
      height: 25px;
    }
  }
`

export default function Header() {

  const darkMode = useSelector((state) => state.theme.value)

  return (
    <Container>
      <Toggle></Toggle>
      <SocialWrapper>
        <SocialIcon href="https://github.com/MichaelMcCann1" target='_blank' aria-label="GitHub link" rel="noreferrer" darkMode={darkMode}>
          <AiFillGithub />
        </SocialIcon>
        <SocialIcon href="mailto:mmccann0903@gmail.com" aria-label="Send Email" darkMode={darkMode}>
          <FiMail />
        </SocialIcon>
        <SocialIcon href="tel:5136388362" aria-label="Call phone number" darkMode={darkMode}>
          <AiFillPhone style={{transform: 'scaleX(-1)'}}/>
        </SocialIcon>
        <Resume href="McCann_Resume.pdf" target='_blank' rel="noreferrer" darkMode={darkMode}>Resume</Resume>
      </SocialWrapper>
    </Container>
    
  )
}

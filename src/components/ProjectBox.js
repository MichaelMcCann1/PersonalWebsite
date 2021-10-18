import React from 'react'
import styled from 'styled-components'
import { BiLinkExternal } from "react-icons/bi"
import  { AiFillGithub } from "react-icons/ai"
import { useSelector } from 'react-redux'

const breakPoint = '(max-width: 875px)'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s ease;
  filter: ${props => props.darkMode ? 'brightness(.9)' : ''};
`

const BoxTitle = styled.h3`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.75rem;
  font-weight: 500;
  transition: all .3s ease-out;
  opacity: 0;

  @media ${breakPoint} {
    font-size: 1.5rem;
  }
`

const BoxDesc = styled.p`
  position: absolute;
  width: 85%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .4s ease;
  font-size: 1.1rem;
  font-weight: 300;

  @media ${breakPoint} {
    font-size: .9rem;
  }
`

const BoxButtons = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 85%;
  justify-content: space-between;
  left: 50%;
  transform: translateX(-50%);
  transition: all .3s ease-out;
  opacity: 0;
`

const BoxLinks = styled.a`
  display: flex;
  align-items: center;
  padding: .3em .7em;
  border: 3px solid var(--primaryColor);
  transition: all .3s ease-out;
  text-decoration: none;
  color: inherit;
  font-size: 1.1rem;
  font-weight: 400;

  > svg {
    width: 1.5em;
    height: 1.5em;
    margin-left: 0.5em;
  }

  :hover {
    background: var(--primaryColor);
    color: white;
  }

  @media ${breakPoint} {
    font-size: .9rem;
  }
`

const Container = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  user-select: none;
  border-radius: 10px;
  overflow: hidden;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};

  :hover ${Image} {
    opacity: .07;
  }

  :hover ${BoxTitle} {
    top: 50px;
    opacity: 1;
  }

  :hover ${BoxDesc} {
    opacity: 1;
  }

  :hover ${BoxButtons} {
    opacity: 1;
    bottom: 40px;
  }

  @media ${breakPoint} {
    width: 300px;
    height: 225px;

    :hover ${BoxTitle} {
      top: 27px;
    }

    :hover ${BoxButtons} {
      bottom: 20px;
    }
  }

  @media (max-width: 420px) {
    min-width: 300px;
    min-height: 225px;
    width: 100%;
    height: calc(.75 * 100%);
  }
`

export default function ProjectBox({ImgSrc, title, desc, liveLink, github}) {

  let screenWidth = window.innerWidth;
  const darkMode = useSelector((state) => state.theme.value)
  
  return (
    <Container darkMode={darkMode}>
      <Image src={ImgSrc} alt={`screenshot of ${title} project`} darkMode={darkMode}></Image>
      <BoxTitle>{title}</BoxTitle>
      <BoxDesc>{desc}</BoxDesc>
      <BoxButtons>
        <BoxLinks href={liveLink} target={screenWidth < 800 ? "" : "_blank"} rel="noreferrer">Live Link<BiLinkExternal alt="External Link icon"/></BoxLinks>
        <BoxLinks href={github} target={screenWidth < 800 ? "" : "_blank"} rel="noreferrer">GitHub Repo<AiFillGithub alt="GitHub logo"/></BoxLinks>
      </BoxButtons>
    </Container>
  )
}
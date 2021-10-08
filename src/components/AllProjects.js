import React from 'react'
import styled from 'styled-components'
import ProjectBox from './ProjectBox'
import { ProjectGrid } from './Projects'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { projects } from '../data'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  position: relative;
  margin-top: 4rem;
  margin-bottom: 1rem;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};

  ::after {
    width: 80%;
    height: 4px;
    content: '';
    background-color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }
`

const ReturnHomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ReturnHome = styled.div`
  display: flex;
  align-items: center;
  padding: .5em 1em;
  border: 3px solid var(--primaryColor);
  transition: all .3s ease-out;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'inherit'};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 4em 0;

  > svg {
    width: 1.25em;
    height: 1.25em;
    margin-right: 0.5em;
  }

  :hover {
    color: white;
    background: var(--primaryColor);
  }
`

export default function AllProjects({darkMode}) {
  return (
    <Container>
      <Title darkMode={darkMode}>ALL PROJECTS</Title>
      <ProjectGrid>
        {projects.map((data, index) => (
          <ProjectBox 
            ImgSrc={data.ImgSrc} 
            title={data.title} 
            desc={data.desc} 
            liveLink={data.liveLink} 
            github={data.github} 
            darkMode={darkMode}
            key={index}
          />
        ))}
      </ProjectGrid>
      <ReturnHomeLink to="/">
        <ReturnHome darkMode={darkMode}><FaArrowCircleLeft/>Home Page</ReturnHome>
      </ReturnHomeLink>
    </Container>
  )
}

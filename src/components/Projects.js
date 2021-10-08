import React from 'react'
import styled from 'styled-components'
import ProjectBox from './ProjectBox'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from 'react-icons/fa'
import { projects } from '../data'

const breakPoint = '(max-width: 750px)'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProjectGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 6rem 1em 0 1em;
  gap: 25px;
  max-width: 1300px;

  @media ${breakPoint}{
    margin: 3rem 1em 0 1em;
  }
`

const AllProjectsLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const AllProjects = styled.div`
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
    margin-left: 0.5em;
  }

  :hover {
    color: white;
    background: var(--primaryColor);
  }
`

export default function Projects({darkMode}) {

  let featuredProjects = projects.slice(0,6)

  return (
    <Container>
      <ProjectGrid>
        {featuredProjects.map((data, index) => (
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
      <AllProjectsLink to="/AllProjects">
        <AllProjects darkMode={darkMode}>See All Projects <FaArrowCircleRight/></AllProjects>
      </AllProjectsLink>
    </Container>
  )
}
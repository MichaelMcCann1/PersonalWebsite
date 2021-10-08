import React from 'react'
import styled from 'styled-components'
import TechBox from './TechBox'
import { proficient, competent } from '../data'

const breakPoint = '(max-width: 800px)'

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: var(--width);
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 4em;
  padding-bottom: 6em;
  border-bottom: ${props => props.darkMode ? '1px solid rgba(184,189,195,.5)' : '1px solid rgba(0,0,0,0.2)'};
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};

  @media ${breakPoint}{
    flex-direction: column;
    margin-top: 1em;
    padding-bottom: 2em;
  }
`

const TechContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 1em;

  @media ${breakPoint}{
    margin: 0 0 1.5em 0;
  }
`

const TechTitle = styled.h2`
  margin-bottom: .3em;
  font-weight: 500;
  font-size: 1.4rem;
`

const TechWrapper = styled.div`
  max-width: 480px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export default function Skills({darkMode}) {
  return (
    <Container darkMode={darkMode}>
      <TechContainerBox>
        <TechTitle>Proficient with</TechTitle>
        <TechWrapper>
          {proficient.map((data, index) => (
            <TechBox src={data.src} name={data.name} key={index} darkMode={darkMode} />
          ))}
        </TechWrapper>
      </TechContainerBox>
      <TechContainerBox>
        <TechTitle>Competent with</TechTitle>
        <TechWrapper>
          {competent.map((data, index) => (
            <TechBox src={data.src} name={data.name} key={index} darkMode={darkMode}/>
          ))}
        </TechWrapper>
      </TechContainerBox>
    </Container>
  )
}

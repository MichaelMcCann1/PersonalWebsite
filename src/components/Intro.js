import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const breakPoint = '(max-width: 750px)'

const Container = styled.section`
  width: var(--width);
  max-width: var(--maxWidth);
  margin: 0 auto;
  
`
const IntroContent = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 3em;
  color: ${props => props.darkMode ? 'var(--darkModeText)' : 'black'};
  transition: all .3s ease;

  @media ${breakPoint}{
    flex-direction: column;
  }
`

const Left = styled.div`
  flex: 1;

  @media ${breakPoint}{
    order: 2;
  }
`

const HelloWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakPoint}{
    text-align: center;
  }
`

const Hello = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
  font-weight: 300;
  line-height: .9em;
  margin-top: 1em;

  @media ${breakPoint}{
    font-size: 1.3rem;
  }
`

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: .5em;

  @media ${breakPoint}{
    font-size: 2.25rem;
  }
`

const Portrait = styled.img`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  filter: ${props => props.darkMode ? 'brightness(.9)' : ''};

  @media (max-width: 875px){
    width: 225px;
    height: 225px;
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoint}{
    order: 1;
  }
`

const IntroParagraph = styled.p`
  margin-bottom: 1em;
  font-weight: 300;
  line-height: 1.5em;
  max-width: 40em;
  width: 90%;

  @media ${breakPoint}{
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1em;
  }
`

const Expero = styled.a`
  color: black;
`

export default function Intro() {

  const darkMode = useSelector((state) => state.theme.value)

  return (
    <Container>
      <IntroContent darkMode={darkMode}>
        <Left>
          <HelloWrapper>
            <Hello>Hi, I'm</Hello>
            <Name>Michael McCann</Name>
          </HelloWrapper>
          <IntroParagraph>
            And I am a developer at <Expero href="https://www.experoinc.com/" target="_blank">Expero</Expero> where I help build complex web applications for domain-expert users. I love making content for the web and learning new technology to do it. 
          </IntroParagraph>
          <IntroParagraph>
            I specialize in front-end development where I use the latest CSS features to create responsive page layouts and new JavaScript libraries to create efficient user interfaces. Check out my projects below to see what I have been up to lately.
          </IntroParagraph>
        </Left>
        <Right>
          <Portrait src="Images/MichaelMcCann.jpg" alt="Portrait of me" darkMode={darkMode}/>
        </Right>
      </IntroContent>
    </Container>
  )
}
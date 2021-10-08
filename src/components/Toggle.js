import React from 'react'
import styled from 'styled-components'
import { HiSun, HiMoon } from "react-icons/hi"

const Container = styled.div`
  margin-right: auto;
  margin-left: 10px;
`

const Bar = styled.div`
  width: 40px;
  height: 25px;
  background-color: var(--primaryColor);
  border-radius: 10000px;
  position: relative;
  display: flex;
  align-items: center;
`

const Slider = styled.div`
  height: 30px;
  width: 30px;
  background-color: ${props => props.darkMode ? 'var(--darkModeText)' : 'white'};
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;
  transform: ${props => props.darkMode ? 'translateX(20px)' : 'translateX(-10px)'};
  transition: all .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: 1.3em;
    height: 1.3em;
  }
`

export default function Toggle({darkMode, setDarkMode}) {

  return (
    <Container>
      <Bar>
        <Slider darkMode={darkMode} onClick={()=>setDarkMode(!darkMode)}>{darkMode ? <HiSun /> : <HiMoon/>}</Slider>
      </Bar>
    </Container>
  )
}

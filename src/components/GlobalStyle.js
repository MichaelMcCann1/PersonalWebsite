import React from 'react'
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux'


const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    transition: all .3 ease;
  }

  body {
    background-color: ${props => props.darkMode ? 'rgb(8,20,42)' : 'rgb(252, 252, 252)'};
  }

  :root {
    --primaryColor: rgb(100, 166, 200);
    --width: 90%;
    --maxWidth: 1200px;
    --darkModeText: rgb(210,213,217);
  }
`

export default function GlobalStyle() {

  const darkMode = useSelector((state) => state.theme.value)

  return (
    <Global darkMode={darkMode} />
  )
}

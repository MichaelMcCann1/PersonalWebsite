import { createGlobalStyle } from 'styled-components';
import React, { useState } from 'react'
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound';
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import AllProjects from './components/AllProjects';
import ScrollToTop from './components/ScrollToTop'

const GlobalStyle = createGlobalStyle`
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

function App() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <GlobalStyle darkMode={darkMode}/>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Switch>
        <Route exact path="/">
          <Intro darkMode={darkMode}/>
          <Skills darkMode={darkMode}/>
          <Projects darkMode={darkMode}/>
        </Route>
        <Route exact path="/AllProjects">
          <AllProjects darkMode={darkMode}/>
        </Route>
        <Route>
          <NotFound darkMode={darkMode} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
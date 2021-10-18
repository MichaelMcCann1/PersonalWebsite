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
import GlobalStyle from './components/GlobalStyle';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import themeReducer from './features/themeSlice'

const store = configureStore({
  reducer: {
    theme: themeReducer
  }
})

function App() {
  return (
    <Router>
      <Provider store={store}>
        <ScrollToTop />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/">
            <Intro />
            <Skills />
            <Projects />
          </Route>
          <Route exact path="/AllProjects">
            <AllProjects />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
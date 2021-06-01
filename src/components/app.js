import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import Navbar from "./components/navbar"
import Homepage from "./pages/homepage"
import About from "./pages/about"
import Projects from "./pages/projects"
import Contact from "./pages/contact"
import Resume from "./pages/resume"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    );
  }
}

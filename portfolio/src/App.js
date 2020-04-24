import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import MaintenancePage from "./components/MaintenancePage";

function App() {
  return (
    <Router>
        <nav>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Me</Link></p>
          <p><Link to="/resume">Resume</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </nav>
      <div>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutMe />
        </Route>
        <Route exact path="/resume">
          <MaintenancePage />
        </Route>
        <Route exact path="/Contact">
          <MaintenancePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume"
import MaintenancePage from "./components/MaintenancePage";

import NasaAPOD from "./components/Projects/NasaAPOD";
import SaltyHackerNews from "./components/Projects/SaltyHackerNews"

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
          <Resume />
        </Route>
        <Route exact path="/contact">
          <MaintenancePage />
        </Route>
        <Route exact path="/nasa-apod">
          <NasaAPOD />
        </Route>
        <Route exact path="/saltiest-hacker-news-troll">
          <SaltyHackerNews />
        </Route>
      </div>
    </Router>
  );
}

export default App;

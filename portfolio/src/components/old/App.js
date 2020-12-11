import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomePage from "../HomePage";
import AboutMe from "../AboutMe";
import Nav from "../Nav"
import Projects from "../Projects"
import Contact from "../Contact"
//import anime from 'animejs'
import "./Styles/index.css"
import "./Styles/App.css"


const App = (props) => {
  const locationKey = props.location.pathname

  const PageFade = (props) => (

    <CSSTransition
      {...props}
      classNames="fadeTranslate"
      timeout={1000}
      mountOnEnter={true}
      unmountOnExit={true}
    />
  
  )
  
  const Layout = ({ children }) => (
  
    <section>
      <Nav />
      {children}
    </section>
  
  )
  return (

    <Layout>
      <TransitionGroup>
        <PageFade key={locationKey}>
          <section className="fix-container">
            <Switch location={props.location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </section>
        </PageFade>
      </TransitionGroup>
    </Layout>

  )
}

export default App
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Nav from "./components/Nav"
import Contact from "./components/Contact"
import Downloadables from "./components/Downloadables"
import "./Styles/index.css"
import "./Styles/App.css"

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

const App = (props) => {
  const locationKey = props.location.pathname

  return (

    <Layout>
      <TransitionGroup>
        <PageFade key={locationKey}>
          <section className="fix-container">
            <Switch location={props.location}>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/downloadables" component={Downloadables} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </section>
        </PageFade>
      </TransitionGroup>
    </Layout>

  )
}

const BasicExample = () => (

  <BrowserRouter>
    <Route path="/" component={App} />
  </BrowserRouter>
  
);

render(<BasicExample />, document.getElementById('root'));

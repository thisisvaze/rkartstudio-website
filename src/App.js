import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'
import ArtListPage from './pages/ArtListPage';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashRouter, Route, Link } from "react-router-dom";
import  { UserProvider }  from './components/DeviceContext'


var artMedium = "coffee";

class App extends React.Component {

  render() {

    return (
      <UserProvider value ={(([
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)|| (navigator.userAgent.includes("Mac") && "ontouchend" in document))|| /^((?!chrome|android).)*safari/i.test(navigator.userAgent))? ".jpg" :".webp" } >
      <div>
        <HashRouter>
          <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" >
              <Navbar.Brand href="/">  <img
                src="/rkartlogo.svg"
                width="54"
                height="54"
                className="d-inline-block align-top header-logo"
                alt="React Bootstrap logo"
              /></Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <NavDropdown title="Personalized Arts" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/arts/coffee" href="/arts/coffee">  Coffee  </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/arts/colorPencils" href="/arts/colorPencils">Coloured Pencils</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/arts/charcoal" href="/arts/charcoal"> Charcoal </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/about" href="/about">  About </Nav.Link>
                  <Nav.Link as={Link} to="/contact" href="/contact">  Contact </Nav.Link>
              
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </div>
          <Container fluid={true} className="p-0">
            <div className="main-content-container">

              <ScrollToTop />
              <Route path="/" exact render={() => <HomePage />} />
              <Route path="/about" exact render={() => <AboutPage />} />
              <Route path="/contact" exact render={() => <ContactPage />} />
              <Route path="/arts/coffee" exact render={() => <ArtListPage medium='coffee' />} />
              <Route path="/arts/colorPencils" exact render={() => <ArtListPage medium='colorPencils' />} />
              <Route path="/arts/charcoal" exact render={() => <ArtListPage medium='charcoal' />} />



            </div>
          </Container>
        </HashRouter>

        <Footer />
        
      </div>
      </UserProvider>
    );
  };

}

export default App;

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styles.scss";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="false"
      className="hummer-header"
      fixed="top"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="hummer-header__burger-nav" style={{'backgroundColor': 'white'}}/>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ">
          <div className="hummer-header__menu-items ">
            <Nav.Link style={{'color': 'white'}} className="hummer-header__menu-items" href="/">Company</Nav.Link>
          </div>
          <div >
            <Nav.Link className="hummer-header__menu-items" style={{'color': 'white'}} href="/">Drivers</Nav.Link>
          </div>
          <div className="hummer-header__menu-items">
            <Nav.Link style={{'color': 'white'}} href="/about">About</Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand href="#home">
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;

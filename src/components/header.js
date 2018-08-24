import React from 'react'
import Link from 'gatsby-link'
import { withPrefix } from "gatsby-link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import logo from '../img/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
        <NavbarBrand href="http://nolaipm.gov">
          <img src={logo} /> Stop & Frisk Report
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href={withPrefix("/")}>Introduction</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={withPrefix("/analysis/")}>Analysis</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header

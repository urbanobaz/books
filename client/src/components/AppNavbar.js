import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  Collapse,
  NavbarToggler,
  NavItem,
  Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal';
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }
  
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Books&More</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink>Search</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/api/books">My Books</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>History</NavLink>
                </NavItem>
                <NavItem>
                  <RegisterModal />
                </NavItem>
                <NavItem>
                  <Logout />
                </NavItem>
                <NavItem>
                  <LoginModal />
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default AppNavbar;

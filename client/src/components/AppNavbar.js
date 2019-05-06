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
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}



export default AppNavbar;

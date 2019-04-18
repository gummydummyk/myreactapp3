import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Container } from 'reactstrap';

class Header extends Component {
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
        return(
            <div>
                {/* <Navbar light expand="md">
                    <Container>
                    <NavbarBrand href="/">Home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/about">About</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                            Options
                            </DropdownToggle>
                            <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>
                            <DropdownItem>
                                Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                    </Container>
                </Navbar> */}
                <nav className="navbar">
                    <div className="container">
                        <ul>
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
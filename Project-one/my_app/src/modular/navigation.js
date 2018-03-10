import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/navigation.css'

import Logo from '../photo/logo.png'

export default class HomePage extends React.Component {
    state = {

    };

    render() {
        return (
            <Navbar id="nav_box" collapseOnSelect>
                <Navbar.Header className="nav_content">
                    <Link to="/homepage">
                        <img id='logo' src={Logo} alt="upword_logo" />
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse className="nav_content">
                    <Navbar.Form pullLeft>
                        <FormGroup>
                            <FormControl type="text" placeholder="Find Jobs" />
                        </FormGroup>
                        {' '}
                        <Button type="submit">Find</Button>
                    </Navbar.Form>
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <Link to="/howitworks">
                                HOW IT WORKS
                            </Link>
                        </NavItem>
                        <NavItem eventKey={2}>
                            <Link to="/pricing">
                                PRICING
                            </Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to="/login">
                                LOGIN
                            </Link>
                        </NavItem>
                        <NavItem eventKey={4}>
                            <Link to="/signup">
                                SIGN UP
                            </Link>
                        </NavItem>
                        <NavItem id="post_job" eventKey={5} href="#">Post a Job</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
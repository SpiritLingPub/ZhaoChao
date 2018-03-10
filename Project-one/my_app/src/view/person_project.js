import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ajax from '../base/ajax'
import { } from 'antd';
import '../css/person_project.css';

import PersonFoot from '../modular/sign_up/sign_up_foot'

import Logo from '../photo/logo.png'

export default class Hiring extends React.Component {
    state = {

    };

    componentDidMount() {
        console.log(localStorage.getItem('token'))
        ajax.post(ajax.url(ajax.ports.person_project),
            {
                'access_token': JSON.stringify(localStorage.getItem('token'))
            }
        ).then((xhr) => {
            console.log(xhr.response)
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <div>
                <Navbar id="nav_box" collapseOnSelect>
                    <Navbar.Header className="nav_content">
                        <Link to="/homepage">
                            <img id='logo' src={Logo} alt="upword_logo" />
                        </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title='taolili' id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <div>
                    
                    </div>
                <PersonFoot />
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { } from 'antd';
import Logo from '../../photo/logo.png'


import ProjectSecond from './project_second'
import ProjectThird from './project_third'
import ProjectFouth from './project_fouth'
import ProjectFifth from './project_fifth'

export default class SignUpProject extends React.Component {
    state = {

    };

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
                    <Navbar.Collapse className="nav_content">
                        <Nav pullRight>
                            <span className='sign_up_right'>Already have an account?</span>
                            <Link to="/login">
                                <span className='sign_up_right sign_up_log_in'>Log In</span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Route path="/sign_up_project/project_second" component={ProjectSecond} />
                <Route path="/sign_up_project/project_third" component={ProjectThird} />
                <Route path="/sign_up_project/project_fouth" component={ProjectFouth} />
                <Route path="/sign_up_project/project_fifth" component={ProjectFifth} />

            </div>
        )
    }
}
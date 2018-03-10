import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
import { } from 'antd';
import Logo from '../../photo/logo.png'
// import '../css/how_it_works.css';

import SignUpSecond from './sign_second'
import SignUpThird from './sign_third'
import SignUpFouth from './sign_fouth'
import SignUpFifth from './sign_fifth'
import SignUpSixth from './sign_sixth'
import SignUpSeventh from './sign_seventh'

export default class Hiring extends React.Component {
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
                <Route path="/sign_up/sign_up_second" component={SignUpSecond} />
                <Route path="/sign_up/sign_up_third" component={SignUpThird} />
                <Route path="/sign_up/sign_up_fouth" component={SignUpFouth} />
                <Route path="/sign_up/sign_up_fifth" component={SignUpFifth} />
                <Route path="/sign_up/sign_up_sixth" component={SignUpSixth} />
                <Route path="/sign_up/sign_up_seventh" component={SignUpSeventh} />
            </div>
        )
    }
}
import React, { Component } from 'react';
import {  } from 'react-bootstrap';
import {  } from 'antd';
// import '../css/how_it_works.css';

export default class Hiring extends React.Component {
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
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
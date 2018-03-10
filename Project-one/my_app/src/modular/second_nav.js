import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/second_nav.css'

export default class SecondNav extends React.Component {
    state = {

    };

    handleSelect = (selectedKey) => {
        alert('选择条目' + selectedKey)
    }
    render() {
        return (
            <Nav bsStyle="pills" id="sec_nav_box"  onSelect={this.handleSelect}>
                <NavItem className="sec_nav_font first_nav_font" eventKey={1} title="Item">Web Dev</NavItem>
                <NavItem className="sec_nav_font" eventKey={2} title="Item">Mobile Dev</NavItem>
                <NavItem className="sec_nav_font" eventKey={3} title="Item">Design</NavItem>
                <NavItem className="sec_nav_font" eventKey={4} title="Item">Writing</NavItem>
                <NavItem className="sec_nav_font" eventKey={5} title="Item">Admin Support</NavItem>
                <NavItem className="sec_nav_font" eventKey={6} title="Item">Customer Service</NavItem>
                <NavItem className="sec_nav_font" eventKey={7} title="Item">Marketing</NavItem>
                <NavItem className="sec_nav_font" eventKey={8} title="Item">Accounting</NavItem>
                <NavItem className="sec_nav_font" eventKey={9} title="Item">View All Categories</NavItem>
            </Nav>
        )
    }
}
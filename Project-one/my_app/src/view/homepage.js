import React, { Component } from 'react';
import { Jumbotron, Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import '../css/homepage.css';

import Navigation from '../modular/navigation'
import SecondNav from '../modular/second_nav'
import TypeList from '../modular/type_list'
import HowWork from '../modular/how_it_work'
import ServiceLevel from '../modular/service_level'
import Carousel from '../modular/carousel'
import Trusted from '../modular/trusted'

export default class HomePage extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
                <Navigation />
                <SecondNav />
                <Jumbotron id='homepage_jumbotron'>
                    <div id="jum_con_box">
                        <h1>
                            Get it done with a freelancer
                        </h1>
                        <br />
                        <p>
                            Grow you business with the top freelancer website .
                        </p>
                        <Navbar.Collapse id='jum_inp_box'>
                            <Navbar.Form pullLeft>
                                <FormGroup>
                                    <FormControl id='jum_con_input' type="text" placeholder="Search" />
                                </FormGroup>
                                <div id='jum_con_submit'>
                                    Get Started
                                    </div>
                            </Navbar.Form>
                        </Navbar.Collapse>
                    </div>
                </Jumbotron>
                <Trusted/>
                <TypeList />
                <HowWork />
                <ServiceLevel />
                <Carousel />

            </div>
        )
    }
}
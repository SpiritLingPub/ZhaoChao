import React, { Component, Children } from 'react';
import {  Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import { } from 'antd';
import '../css/how_it_works.css';

import Navigation from '../modular/navigation'
import SecondNav from '../modular/second_nav'
import ServiceLevel from '../modular/service_level'

import Hiring from './how_it_works/hiring'

export default class HowItWorks extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
                <Navigation />
                <SecondNav />
                <Jumbotron id='how_it_works_jumbotron'>
                    <h1 id='pricing_jumbotron_title'>
                        Upwork Pricing
                </h1>
                    <p id='pricing_jumbotron_con'>
                        As a client, there’s no charge to sign up on Upwork or to get quotes from freelancers. Pay only an
                    <br />
                        additional 2.75% for payment processing.
                </p>
                </Jumbotron>
                    <Route path="/howitworks/about" exact render={() => (<h1>弗雷尔卓德必将再次统一！</h1>)} />
                <ServiceLevel />
            </div>
        )
    }
}
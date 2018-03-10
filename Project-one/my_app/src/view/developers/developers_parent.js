import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { } from 'antd';
import { Link, Route } from 'react-router-dom';
import Logo from '../../photo/logo.png'
// import '../css/how_it_works.css';

import Navigation from '../../modular/navigation';
import NavSecond from '../../modular/second_nav';
import Foot from '../../modular/sign_up/sign_up_foot';

import WebDev from './web_dev'
import MobileDev from './mobile_dev'
import Design from './design'
import Writing from './writing'
import AdminSupport from './admin_support'

export default class Hiring extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
                <Navigation/>
                <NavSecond/>

                <Route path="/developers/web_dev" component={WebDev} />
                <Route path="/developers/mobile_dev" component={MobileDev} />
                <Route path="/developers/design" component={Design} />
                <Route path="/developers/writing" component={Writing} />
                <Route path="/developers/admin_support" component={AdminSupport} />

                <Foot/>
            </div>
        )
    }
}
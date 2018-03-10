import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import ajax from '../base/ajax'
import '../css/log_in.css';

import SignFoot from '../modular/sign_foot'

import Logo from '../photo/logo.png'



class LogIn extends React.Component {
    state = {

    };

    componentDidMount() {
    }

    handler_log_in = (e) => {
        localStorage.setItem('log_in', e.target.value)
    }

    handler_log_in_ajax = () => {
        ajax.post(ajax.url(ajax.ports.log_in),
            {
                'username': JSON.stringify(localStorage.getItem('log_in'))
            }
        ).then((xhr) => {
            localStorage.setItem('token',xhr.response.token);
            console.log(localStorage.getItem('token'))
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
                </Navbar>

                <div id='log_in_box'>
                    <h2 id='log_in_title'>Log in and get to work</h2>
                    <Input className='log_in_pass' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />} style={{ margin: '0 auto', display: 'block' }} type="text" onChange={this.handler_log_in} placeholder="Username or Email" />
                    <div id='log_in_submit' onClick={this.handler_log_in_ajax} >
                        Get Strated
                    </div>
                    <div id='log_in_sign_box'>
                        <div className='log_in_line log_in_line_left'></div>
                        <span id='lon_in_sign_con'>New to Upwork?</span>
                        <div className='log_in_line log_in_line_right'></div>
                        <Link to="/signup">
                            <div id='log_in_sign_button'>Sign Up</div>
                        </Link>
                    </div>
                </div>
                <SignFoot />
            </div>
        )
    }
}

export default Form.create({})(LogIn);


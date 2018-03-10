import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Input, Icon, Checkbox } from 'antd';
import '../../css/sign_second.css';

import Country from '../../modular/all_country'
import SignFoot from '../../modular/sign_foot'

export default class SignSecond extends React.Component {
    state = {
        sec_title: undefined,
        username:''
    };

    emitEmpty = () => {
        this.userNameInput.focus();
    }
    handlerproject = () => {
        localStorage.setItem('judge', 'project')
        document.getElementById('sign_second_choose_project').style.backgroundColor = 'rgb(0, 131, 41)'
        document.getElementById('sign_second_choose_project').style.color = 'white'
        document.getElementById('sign_second_choose_freelancer').style.backgroundColor = 'white'
        document.getElementById('sign_second_choose_freelancer').style.color = 'black'
        document.getElementById('sign_second_choose_freelancer_box').style.display='none'

    }
    handlerfreelancer = () => {
        localStorage.setItem('judge', 'freelancer')
        document.getElementById('sign_second_choose_freelancer').style.backgroundColor = 'rgb(0, 131, 41)'
        document.getElementById('sign_second_choose_freelancer').style.color = 'white'
        document.getElementById('sign_second_choose_project').style.backgroundColor = 'white'
        document.getElementById('sign_second_choose_project').style.color = 'black'
        document.getElementById('sign_second_choose_freelancer_box').style.display='block'

    }

    handler_send_me = (e) => {
        console.log(e)
    }

    handlernext = () => {
        // localStorage.setItem('')
        console.log(document.getElementsByTagName('input'))
        const input = document.getElementsByTagName('input');
        if (input[2].checked) {
            localStorage.setItem('send_me', 'true')
        } else {
            localStorage.setItem('send_me', 'false')
        }
        if (input[3].checked) {
            localStorage.setItem('agree_service', 'true')
        } else {
            localStorage.setItem('agree_service', 'false')
        }
    }

    onChangeUserName=(e)=>{
        this.setState({
            username:e.target.value
        })
        localStorage.setItem('username',e.target.value)
    }
    handler_country=(e)=>{
        localStorage.setItem('country',e)
    }
    render() {

        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <div id='sign_second_box'>
                    <h2 id='sign_second_title'>
                        Complete your account
                    </h2>
                    <h3>
                        {this.state.sec_title}
                    </h3>
                    <Country 
                    handler_country={this.handler_country.bind(this)}
                    />
                    <Input
                        disabled={true}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={localStorage.getItem('firstname')}
                        ref={node => this.userNameInput = node}
                        style={
                            { width: '80%', margin: '0 auto', display: 'block', marginTop: '30px' }
                        }
                    />
                    <div id='sign_second_choose_box'>
                        <p id='sign_second_choose_title'>
                            I want to:
                        </p>
                        <div id='sign_second_choose_project_box'>
                            <div id="sign_second_choose_project" onClick={this.handlerproject}>
                                <span id="sign_second_choose_project_con">
                                    Hire for a Project
                            </span>
                            </div>
                            <div id="sign_second_choose_freelancer" onClick={this.handlerfreelancer}>
                                <span id="sign_second_choose_freelancer_con">
                                    Work as a Freelancer
                            </span>
                            </div>
                        </div>
                        <div id='sign_second_choose_freelancer_box'>
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                suffix={suffix}
                                value={this.state.username}
                                placeholder="Username"
                                ref={node => this.userNameInput = node}
                                style={
                                    { width: '80%', margin: '0 auto', display: 'block', marginTop: '30px' }
                                }
                                onChange={this.onChangeUserName}
                            />
                        </div>
                    </div>
                    <Checkbox id='sign_second_send_me' className='sign_second_radio'>Yes!Send me geuninely useful emails every now and then to help me get the most out of Upwork</Checkbox>
                    <Checkbox id='sign_second_agree_service' className='sign_second_radio'>Yes,I understand and agree to the Upwork Terms of Service,including the User Agreement and Privacy Policy</Checkbox>

                        <Link to="/sign_up/sign_up_third">
                    <div id='sign_second_next_box' onClick={this.handlernext}>
                        <p id='sign_second_next_con'>
                            Next
                            </p>
                    </div>
                        </Link>
                    <br />
                    <br />
                </div>
                
                <SignFoot />
            </div>
        )
    }
}
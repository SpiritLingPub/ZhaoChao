import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Input, Col } from 'antd';
import '../../css/project_second.css';

import SignFoot from '../../modular/sign_foot'

const RadioGroup = Radio.Group;
const InputGroup = Input.Group;


export default class ProjectSecond extends React.Component {
    state = {
        value: 1,
        department:'none',
        phone:'none',
        role:'none'
    };

    handler_company_employee = (e) => {
        this.setState({
            value: e.target.value,
        });
        localStorage.setItem('company_employees', e.target.value)
        if(e.target.value!='0'){
            this.setState({
                department:'block',
            })
            if(e.target.value!='5'){
                this.setState({
                    phone:'block'
                })
            }else{
                this.setState({
                    phone:'none'
                })
            }
        }else{
            this.setState({
                department:'none',
                phone:'none',
                role:'none'
            })
        }

    }
    handler_department = (e) => {
        this.setState({
            value: e.target.value,
            role:'block'
        });
        localStorage.setItem('department', e.target.value);
        
    }
    handler_role = (e) => {
        localStorage.setItem('role', e.target.value)
    }

    handler_phone_change = (e) => {
        localStorage.setItem('phone_num', e.target.value)
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
            <br/>
                <br/>
                <br/>
            <div id='project_second' >
                <div id='project_second_box' >
                    <h2>
                        Improve your Upwork experience
                    </h2>
                    <p id='project_second_small_title' >
                        This information helps us provide better matches for your needs but isn't shared with freelancers.
                    </p>
                    <div>
                        <p className='project_secong_radio_title' >
                            How many employees does your company have?
                        </p>
                        <RadioGroup onChange={this.handler_company_employee}>
                            <Radio style={radioStyle} value={0}>It's just me</Radio>
                            <Radio style={radioStyle} value={5}>2 - 9 employees</Radio>
                            <Radio style={radioStyle} value={50}>10 - 99 employees</Radio>
                            <Radio style={radioStyle} value={250}>100 - 499 employees</Radio>
                            <Radio style={radioStyle} value={750}>500 - 1000 employees</Radio>
                            <Radio style={radioStyle} value={1500}>More than 1000 employees</Radio>
                        </RadioGroup>
                        <br/>
                        <br/>
                    </div>
                    <div id='project_second_department' style={{display:this.state.department}} >
                        <p className='project_secong_radio_title' >
                            Witch department do you work in?
                        </p>
                        <RadioGroup onChange={this.handler_department}>
                            <Radio style={radioStyle} value={'service'}>Customer Service or Operations</Radio>
                            <Radio style={radioStyle} value={'legal'}>Finance or Legal</Radio>
                            <Radio style={radioStyle} value={'enginnering'}>Enginnering or Product Management</Radio>
                            <Radio style={radioStyle} value={'marketing'}>Marketing or Sales</Radio>
                            <Radio style={radioStyle} value={'human_resources'}>Human Resources</Radio>
                            <Radio style={radioStyle} value={'other'}>Other</Radio>
                        </RadioGroup>
                        <br/>
                        <br/>
                    </div>
                    <div id='project_second_phone'  style={{display:this.state.phone}}  >
                        <p className='project_secong_radio_title' >
                            What's your business phone number?
                        </p>
                        <InputGroup>
                            <Col span={4}>
                                <Input defaultValue="+86" disabled={true} />
                            </Col>
                            <Col span={8}>
                                <Input onChange={this.handler_phone_change} />
                            </Col>
                        </InputGroup>
                        <br/>
                    </div>
                    <div id='project_second_role'  style={{display:this.state.role}}   >
                        <p className='project_secong_radio_title' >
                            What vest describes your role at your company
                        </p>
                        <RadioGroup onChange={this.handler_role}>
                            <Radio style={radioStyle} value={'Vice-President'}>Vice-President or above</Radio>
                            <Radio style={radioStyle} value={'Manager'}>Manager or Director</Radio>
                            <Radio style={radioStyle} value={'Sole'}>Sole Proprietor</Radio>
                            <Radio style={radioStyle} value={'Developer'}>Individual Contributor or Developer</Radio>
                            <Radio style={radioStyle} value={'Student'}>Student or Inter</Radio>
                        </RadioGroup>
                        <br/>
                        <br/>
                    </div>
                    <Link to="/sign_up_project/project_third">
                    <div id='project_second_start_box' >
                        <p>
                            Start Hiring
                        </p>
                    </div>
                    </Link>
                        <br/>
                        <br/>
                </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <SignFoot />
            </div>
        )
    }
}
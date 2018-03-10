import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, Popover } from 'antd';
import '../../css/sign_fifth.css';

import SignFoot from '../../modular/sign_up/sign_up_foot'

const Option = Select.Option;
const text = 'main services'
const content = 'Select types of work in which you have expertise. This will help us better suggest projects that fit your interests.'
const content2 = 'Clients linke to see the top 3-10 relevant skills,so choose only the most relevant - you`ll be able to update this information in the future'
const skills_children = [];
for (let i = 10; i < 36; i++) {
    skills_children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}


export default class SignFifth extends React.Component {
    state = {
        main_services: ''
    };

    handler_main_services = (value) => {
        this.setState({
            main_services: value
        })
        localStorage.setItem('main_services', value)
    }
    handler_main_services_type=(value)=>{
        localStorage.setItem('main_services_type', value)
    }
    handler_experience_level1=()=>{
        localStorage.setItem('experience_level','Entry Level')
        document.getElementById('entry').style.color='rgb(0, 130, 39)';
        document.getElementById('intermediate').style.color='black';
        document.getElementById('expert').style.color='black';

    }
    handler_experience_level2=()=>{
        localStorage.setItem('experience_level','Intermediate')
        document.getElementById('entry').style.color='black';
        document.getElementById('intermediate').style.color='rgb(0, 130, 39)';
        document.getElementById('expert').style.color='black';
    }
    handler_experience_level3=()=>{
        localStorage.setItem('experience_level','Expert')
        document.getElementById('entry').style.color='black';
        document.getElementById('intermediate').style.color='black';
        document.getElementById('expert').style.color='rgb(0, 130, 39)';
    }
    handler_offer_clients=(value)=>{
        localStorage.setItem('offer_clients',value)
    }

    render() {
        return (
            <div>
                <div id='sign_fifth_box'>
                    <div id='sign_fifth_title_box'>
                        <h2>
                            Thank you for your interest in Upwork!
                    </h2>
                        <p className='sign_fifth_title_con'>
                            An application is required to join Upwork. Once submitted,we typically take 24 hours to review your application and we will notify you if your application is approved or declined
                    </p>
                        <p className='sign_fifth_title_con'>
                            Not all applications are approved.so take time to fill out the following info accurately.
                    </p>
                        <br />
                    </div>
                    <hr />
                    <div id='sign_fifth_complete_box'>
                        <h4>
                            To begin your application to jion,tell us about yourself and complete a profile for review
                    </h4>
                        <div id='sign_fifth_complete_con_box'>
                            <p className='sign_fifth_complete_con_title'>
                                What are the main services you offer to clients?
                        </p>
                            <Popover placement="right" title={text} content={content} overlayClassName='sign_fifth_popover'>
                                <Select
                                    showSearch
                                    style={{ width: 400 }}
                                    placeholder="Please select..."
                                    optionFilterProp="children"
                                    onChange={this.handler_main_services}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="Web,Mobile & Software Dev">Web,Mobile & Software Dev</Option>
                                    <Option value="IT & Networking">IT & Networking</Option>
                                    <Option value="Date Science & Architecture">Date Science & Architecture</Option>
                                    <Option value="Engineering & Analytics">Engineering & Analytics</Option>
                                    <Option value="Design & Creative">Design & Creative</Option>
                                    <Option value="Writing">Writing</Option>
                                    <Option value="Translation">Translation</Option>
                                    <Option value="Legal">Legal</Option>
                                    <Option value="Admin Support">Admin Support</Option>
                                </Select>
                            </Popover>
                        </div>
                        <div id='sign_fifth_web_con'>
                            <p className='sign_fifth_complete_con_title'>
                                What type of {localStorage.getItem('main_services')} do you do? Select up to 4 types of work.
                            </p>

                            <Select
                                    mode="tags"
                                    style={{ width: 800 }}
                                    placeholder="Please select..."
                                    onChange={this.handler_main_services_type}
                                >
                                    <Option value="Desktop Software Development">Desktop Software Development</Option>
                                    <Option value="Ecommerce Sevelopment">Ecommerce Sevelopment</Option>
                                    <Option value="Game Development">Game Development</Option>
                                    <Option value="Mobile Development">Mobile Development</Option>
                                    <Option value="Product Management">Product Management</Option>
                                    <Option value="QA & Testing">QA & Testing</Option>
                                    <Option value="Script  & Utilities">Script  & Utilities</Option>
                                    <Option value="Web Development">Web Development</Option>
                                    <Option value="Web & Mobile Design">Web & Mobile Design</Option>
                                    <Option value="Other - Software Development">Other - Software Development</Option>
                                </Select>
                            {/* <div>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp; Desktop Software Development &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Ecommerce Sevelopment &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp; Game Development &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Mobile Development &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Product Management &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;QA & Testing &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Script  & Utilities &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Web Development &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Web & Mobile Design &emsp;
                            </span>
                                <span className='sign_fifth_complete_main_service_con'>
                                    &emsp;Other - Software Development &emsp;
                            </span>
                            </div> */}
                        </div>
                        <div>
                            <p className='sign_fifth_complete_con_title'>
                                What skills do you offer clients?
                            </p>
                            <Popover placement="right" content={content2} overlayClassName='sign_fifth_popover'>
                                <Select
                                    mode="tags"
                                    style={{ width: '70%' }}
                                    placeholder="Tags Mode"
                                    onChange={this.handler_offer_clients}
                                >
                                    {skills_children}
                                </Select>
                            </Popover>
                        </div>
                        <div>
                            <p className='sign_fifth_complete_con_title'>
                                What is your experience level?
                        </p>
                            <div className='sign_fifth_experience_level_box' id='entry' onClick={this.handler_experience_level1}>
                                <span className='sign_fifth_experience_level_icon'>
                                    $
                            </span>
                                <span className='sign_fifth_experience_level_con'>
                                    Entry Level
                            </span>
                            </div>
                            <div className='sign_fifth_experience_level_box' id='intermediate' onClick={this.handler_experience_level2}>
                                <span className='sign_fifth_experience_level_icon'>
                                    $ $
                            </span>
                                <span className='sign_fifth_experience_level_con'>
                                    Intermediate
                            </span>
                            </div>
                            <div className='sign_fifth_experience_level_box' id='expert' onClick={this.handler_experience_level3}>
                                <span className='sign_fifth_experience_level_icon'>
                                    $ $ $
                            </span>
                                <span className='sign_fifth_experience_level_con'>
                                    Expert
                            </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <br />
                    <div id='sign_fifth_save_box_box'>
                        <Link to="/sign_up/sign_up_sixth">
                            <div id='sign_fifth_save_box'>
                                <p id='sign_fifth_save'>
                                    Save & Continue
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <SignFoot/>
            </div>
        )
    }
}
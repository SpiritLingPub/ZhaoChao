import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Select } from 'antd';
import '../../css/project_third.css';

import SignFoot from '../../modular/sign_foot'

const Option = Select.Option;


export default class ProjectThird extends React.Component {
    state = {
        next_bk_color: 'rgb(223,223,223)',
        next_color: 'rgb(164,164,164)',
    };

    handler_work_type_change = (value) => {
        this.setState({
            next_bk_color: 'rgb(54, 161, 1)',
            next_color: 'white'
        })
        localStorage.setItem('work_type', value)
    }

    handler_job_name_change = (e) => {
        localStorage.setItem('job_name', e.target.value)
    }

    render() {
        return (
            <div>
                <div id='project_third' >
                    <div id='project_third_title_box' >
                        <h2>
                            What do you need help with?
                        </h2>
                    </div>
                    <div className='project_third_line' ></div>
                    <div id='project_third_con_box' >
                        <p className='ptoject_third_con_title' >
                            Tell us what type of work you ant done
                        </p>
                        <Select defaultValue="Infographic design" style={{ width: 320 }} onChange={this.handler_work_type_change}>
                            <Option value="Web Development">Web Development</Option>
                            <Option value="Web Scrapong">Web Scrapong</Option>
                            <Option value="Datebase Administration">Datebase Administration</Option>
                            <Option value="User Intreface Design">User Intreface Design</Option>
                            <Option value="System Administration">System Administration</Option>
                            <Option value="User Experience Design">User Experience Design</Option>
                            <Option value="Cross Platform Mobile Development">Cross Platform Mobile Development</Option>
                            <Option value="WordPress">WordPress</Option>
                            <Option value="Graphic">Graphic</Option>
                            <Option value="Illustration">Illustration</Option>
                        </Select>
                        <p className='ptoject_third_con_title'>
                            What do you want to name your job post?
                        </p>
                        <Input placeholder="Make it descriptive and eye-catching" onChange={this.handler_job_name_change} />
                        <br />
                        <br />
                        <p className='ptoject_third_con_example'>
                            Great example:Looking for an experienced Android programmer to create a healthcare app
                        </p>
                    </div>
                    <div id='project_third_line2' ></div>
                    <div id='project_third_view_tips' >
                        <p>
                            View tips on how to create a job post that attracts ideal freelancers
                        </p>
                    </div>
                    <div className='project_third_line' ></div>
                    <div id='project_third_button_box' >
                        <Link to="/sign_up_project/project_fouth">
                            <div id='project_third_next' style={{ backgroundColor: this.state.next_bk_color, color: this.state.next_color }} >
                                <p>
                                    Next
                                </p>
                            </div>
                        </Link>
                        <Link to="/homepage">
                            <div id='project_third_cancel' >
                                <p>
                                    Cancel
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <SignFoot />
            </div>
        )
    }
}
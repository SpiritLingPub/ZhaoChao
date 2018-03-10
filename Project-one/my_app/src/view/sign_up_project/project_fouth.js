import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Select, Cascader } from 'antd';
import '../../css/project_fouth.css';
// import '../../css/project_third.css';

import SignFoot from '../../modular/sign_foot'

const options = [{
    value: 'Web,Mobile & Software Dev',
    label: 'Web,Mobile & Software Dev',
    children: [{
        value: 'Desktop Software Development',
        label: 'Desktop Software Development',
    },
    {
        value: 'Ecommerce Development',
        label: 'Ecommerce Development',
    },
    {
        value: 'Game Development',
        label: 'Game Development',
    },
    {
        value: 'Mobile Development',
        label: 'Mobile Development',
    },
    {
        value: 'Product Management',
        label: 'Product Management',
    },
    {
        value: 'QA & Testing',
        label: 'QA & Testing',
    },
    {
        value: 'Scripts & Utilities',
        label: 'Scripts & Utilities',
    },
    {
        value: 'Web Development',
        label: 'Web Development',
    },
    {
        value: 'Web & Mobile Design',
        label: 'Web & Mobile Design',
    },
    {
        value: 'Other',
        label: 'Other',
    },],
}, {
    value: 'IT & Networking',
    label: 'IT & Networking',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Data Science & Analytics',
    label: 'Data Science & Analytics',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Engineering & Architecture',
    label: 'Engineering & Architecture',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Design & Creative',
    label: 'Design & Creative',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Writing',
    label: 'Writing',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Translation',
    label: 'Translation',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Legal',
    label: 'Legal',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
}, {
    value: 'Admin Support',
    label: 'Admin Support',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
    }],
},];


export default class ProjectThird extends React.Component {
    state = {
        next_bk_color: 'rgb(223,223,223)',
        next_color: 'rgb(164,164,164)',
        line_height: '360px',
        cascader:'none',
    };

    handler_specifically_change = (e) => {
        console.log(e.target.innerHTML)
        localStorage.setItem('sepcifical',e.target.innerHTML)
    }

    handler_cascader_change=()=>{
        this.setState({
            line_height:'400px',
            cascader:'block'
        })
    }

    handler_cascader=(value)=>{
        localStorage.setItem('sepcifical',value)
    }

    render() {
        return (
            <div>
                <div id='project_third' >
                    <div id='project_third_title_box' >
                        <h2>
                            What specifically are you looking for?
                        </h2>
                    </div>
                    <div className='project_third_line' ></div>
                    <div id='project_third_con_box' >
                        <br />
                        <div className='project_fouth_table_box' >
                            <div className='project_fouth_con'>
                                <p onClick={this.handler_specifically_change} >
                                    Frontend Web Application Development
                                </p>
                            </div>
                            <div className='project_fouth_con' >
                                <p onClick={this.handler_specifically_change}>
                                    Full Stack Web Development
                                </p>
                            </div>
                        </div>
                        <div className='project_fouth_table_box' >
                            <div className='project_fouth_con' >
                                <p onClick={this.handler_specifically_change}>
                                    Static HTML & CSS
                                </p>
                            </div>
                            <div className='project_fouth_con' >
                                <p onClick={this.handler_specifically_change}>
                                    Backend Web Development
                                </p>
                            </div>
                        </div>
                        <div className='project_fouth_table_box' >
                            <div className='project_fouth_con' >
                                <p onClick={this.handler_specifically_change}>
                                    Web Game Development
                                </p>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div id='project_fouth_table_line' ></div>
                        <div id='project_fouth_specific_category' >
                            <p>
                                Not what you're looking for?
                                <span onClick={this.handler_cascader_change} >
                                    Tell us your specific category
                                </span>
                            </p>
                            <Cascader style={{display:this.state.cascader,width:500}} options={options} onChange={this.handler_cascader} placeholder="Please select" />
                        </div>

                    </div>
                    <div id='project_third_line2' style={{ height: this.state.line_height }} ></div>
                    <div id='project_third_view_tips' >
                        <p>
                            Select a focus area to attract freelancers with the right experience.
                        </p>
                    </div>
                    <div className='project_third_line'></div>
                    <div id='project_third_button_box' >
                        <Link to="/sign_up_project/project_fifth">
                            <div id='project_third_next' style={{ backgroundColor: this.state.next_bk_color, color: this.state.next_color }} >
                                <p>
                                    Next
                                </p>
                            </div>
                        </Link>
                        <Link to="/sign_up_project/project_third">
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
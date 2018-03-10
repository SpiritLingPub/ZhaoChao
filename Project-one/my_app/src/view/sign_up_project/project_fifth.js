import React, { Component } from 'react';
import { Input, Upload, Icon, message, Radio, Checkbox, Row, Col, Select, Popover, Button } from 'antd';
import '../../css/project_fifth.css'

import AddQuestion from './modal/add_question'
import SignFoot from '../../modular/sign_up/sign_up_foot'
import { unix } from '../../../node_modules/_moment@2.20.1@moment';


const { TextArea } = Input;
const Dragger = Upload.Dragger;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const content = (
    <div>
        <h4>
            Why choose hourly?
        </h4>
        <p>
            Pay hourly when you habe ongoing project for the freelancer.
        </p>
        <p>
            Enjoy easy automatic billing once a week verified by the screenshots of the freelancer's computer in the Work Diary.
        </p>
        <h4>
            Why choose fixed-price?
        </h4>
        <p>
            Pay fixed price when you hace projects whitd finite deliverables.
        </p>
        <p>
            Create milestones with payment secured in an escroe account and only released when you're happy with the work.
        </p>
    </div>
);

const children = [];
for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
    console.log(`selected ${value}`);
}

const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:3001/sign_up/upload_file',
    onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class ProjectFifth extends React.Component {
    state = {
        value: 1,
        show_question: false,
        list_: [],
        project_describes: 'none',
        work_type: 'none',
        operating_system: [],
        window_border: '0px',
        apple_border: '0px',
        linux_border: '0px',
        designs_border: '0px',
        specifications_border: '0px',
        n_border: '0px',
        idea_border: '0px',
        lifecycle: [],
        experiences_hiring: '',
        experinece_level_dis: 'none',
        entry_border: '0px',
        intermediate_border: '0px',
        expert_border: '0px',
        experience_level: '',
        more_border: '0px',
        middle_border: '0px',
        less_border: '0px',
        job_long: '',
        pay_budget_dis: 'block',
        add_qualifications: 'Add Qualifications',
        freelancer_type: 'none',
        freelancer_need_dis:'none'
    };


    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }

    handler_work_type = (value) => {
        console.log(value)
    }

    handler_would_pay = (value) => {
        if (value != 'Pay a fixed price') {
            this.setState({
                experinece_level_dis: 'block',
                pay_budget_dis: 'none',
            })
        } else {
            this.setState({
                experinece_level_dis: 'none',
                pay_budget_dis: 'block',
            })
        }
        localStorage.setItem('pay_way', value)
    }

    handler_who_can_find = (value) => {
        localStorage.setItem('who_can_find', value)
    }

    handler_question = (value) => {
        if (value) {
            this.setState({
                show_question: true
            })
        }
    }
    handler_add_question = (e) => {
        let list = [];
        localStorage.setItem('question', e)
        if (e) {
            for (let i of e) {
                let el = (
                    <div className='project_fifth_add_question_box' >
                        <p>
                            {i}
                        </p>
                    </div>
                )
                list.push(el)
            }
        }
        this.setState({
            list_: list
        })
    }
    handler_add_question_close = () => {
        this.setState({
            show_question: false
        })
    }

    handler_cover_letter = (value) => {
        localStorage.setItem('cover_letter', value)
    }

    handler_react_more_freelancer = (value) => {
        localStorage.setItem('reach_more', value)
    }

    handler_project_type = (e) => {
        localStorage.setItem('project_type', e.target.value);
        switch (e.target.value) {
            case 'One-time project':
                this.setState({
                    project_describes: 'block',
                    work_type: 'none'
                })
                break;
            case 'Ongoing project':
                this.setState({
                    project_describes: 'none',
                    work_type: 'block'
                })
                break;
            case 'I am not sure':
                this.setState({
                    project_describes: 'none',
                    work_type: 'none'
                })
                break;
        }
    }

    handler_checkbox_operate = (state, item) => {
        let list = state;
        let index = list.indexOf(item);
        if (index == -1) {
            list.push(item)
            return list
        } else {
            list.splice(index, 1);
            return list
        }
    }
    handler_checkbox_border = (state, item) => {
        let list = state
        let index = list.indexOf(item);
        if (index != -1) {
            return ' 4px solid rgb(55,161,0)'
        } else {
            return '0px'
        }
    }


    handler_operating_system = (e) => {
        switch (e.currentTarget.id) {
            case 'window':
                this.setState({
                    operating_system: this.handler_checkbox_operate(this.state.operating_system, 'window'),
                    window_border: this.handler_checkbox_border(this.state.operating_system, 'window')
                })
                console.log(this.state.operating_system)
                break;
            case 'apple':
                this.setState({
                    operating_system: this.handler_checkbox_operate(this.state.operating_system, 'apple'),
                    apple_border: this.handler_checkbox_border(this.state.operating_system, 'apple')
                })
                console.log(this.state.operating_system)
                break;
            case 'linux/unix':
                this.setState({
                    operating_system: this.handler_checkbox_operate(this.state.operating_system, 'linux/unix'),
                    linux_border: this.handler_checkbox_border(this.state.operating_system, 'linux/unix')
                })
                console.log(this.state.operating_system)
                break;
        }
    }

    handler_lifecycle = (e) => {
        switch (e.currentTarget.id) {
            case 'designs':
                this.setState({
                    lifecycle: this.handler_checkbox_operate(this.state.lifecycle, 'designs'),
                    designs_border: this.handler_checkbox_border(this.state.lifecycle, 'designs')
                })
                console.log(this.state.lifecycle)
                break;
            case 'specifications':
                this.setState({
                    lifecycle: this.handler_checkbox_operate(this.state.lifecycle, 'specifications'),
                    specifications_border: this.handler_checkbox_border(this.state.lifecycle, 'specifications')
                })
                console.log(this.state.lifecycle)
                break;
            case 'n/a':
                this.setState({
                    lifecycle: this.handler_checkbox_operate(this.state.lifecycle, 'n/a'),
                    n_border: this.handler_checkbox_border(this.state.lifecycle, 'n/a')
                })
                console.log(this.state.lifecycle)
                break;
            case 'idea':
                this.setState({
                    lifecycle: this.handler_checkbox_operate(this.state.lifecycle, 'idea'),
                    idea_border: this.handler_checkbox_border(this.state.lifecycle, 'idea')
                })
                console.log(this.state.lifecycle)
                break;
        }
    }

    handler_experiences_hiring = (e) => {
        switch (e.currentTarget.id) {
            case 'hired':
                this.setState({
                    experiences_hiring: 'hired',
                    hired_border: ' 4px solid rgb(55,161,0)',
                    new_hire_border: '0px'
                })
                console.log(this.state.experiences_hiring)
                break;
            case 'new_hire':
                this.setState({
                    experiences_hiring: 'new_hire',
                    new_hire_border: ' 4px solid rgb(55,161,0)',
                    hired_border: '0px'
                })
                console.log(this.state.experiences_hiring)
                break;
        }
    }

    handler_experience_level = (e) => {
        switch (e.currentTarget.id) {
            case 'entry':
                this.setState({
                    experiences_level: 'entry',
                    entry_border: ' 4px solid rgb(55,161,0)',
                    intermediate_border: '0px',
                    expert_border: '0px'
                })
                console.log(this.state.experiences_level)
                break;
            case 'intermediate':
                this.setState({
                    experiences_level: 'intermediate',
                    intermediate_border: ' 4px solid rgb(55,161,0)',
                    entry_border: '0px',
                    expert_border: '0px'
                })
                console.log(this.state.experiences_level)
                break;
            case 'expert':
                this.setState({
                    experiences_level: 'expert',
                    expert_border: ' 4px solid rgb(55,161,0)',
                    intermediate_border: '0px',
                    entry_border: '0px'
                })
                console.log(this.state.experiences_level)
                break;
        }
    }

    handler_job_long = (e) => {
        switch (e.currentTarget.id) {
            case '6+':
                this.setState({
                    job_long: '6+',
                    more_border: ' 4px solid rgb(55,161,0)',
                    middle_border: '0px',
                    less_border: '0px'
                })
                console.log(this.state.job_long)
                break;
            case '3-6':
                this.setState({
                    job_long: '3-6',
                    middle_border: ' 4px solid rgb(55,161,0)',
                    more_border: '0px',
                    less_border: '0px'
                })
                console.log(this.state.job_long)
                break;
            case '1-3':
                this.setState({
                    job_long: '1-3',
                    less_border: ' 4px solid rgb(55,161,0)',
                    more_border: '0px',
                    middle_border: '0px'
                })
                console.log(this.state.job_long)
                break;
        }
    }

    handler_add_qualifications = () => {
        if (this.state.add_qualifications == 'Add Qualifications') {
            this.setState({
                add_qualifications: 'Hide Qualifications',
                freelancer_type: 'block',
            })
        } else {
            this.setState({
                add_qualifications: 'Add Qualifications',
                freelancer_type: 'none',
            })
        }
    }

    handler_freelancer_need=(e)=>{
        if(e.target.value!='one'){
            this.setState({
                freelancer_need_dis:'block'
            });
            localStorage.setItem('freelancer_need',e.target.value)
        }else{
            this.setState({
                freelancer_need_dis:'none'
            })
        }
    }
    handler_freelancer_need_input=(value)=>{
        localStorage.setItem('freelancer_need',value)
    }

    render() {

        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <div>
                <div id='project_fifth_box' >
                    <h1 id='project_fifth_title' >
                        Post a Job
                    </h1>
                    <div className='project_fifth_con_box_box' >
                        <p id='project_fifth_prev_con' >
                            <Icon type="check-circle" style={{ color: 'rgb(55,161,0)', fontSize: '1.1em' }} />&emsp;You selected
                        </p>
                    </div>
                    <div className='project_fifth_con_box_box'>
                        <h2 className='project_fifth_con_title' >
                            Describe the Job
                            </h2>
                        <hr />
                        <div className='project_fifth_con_box' >
                            <div>
                                <div>
                                    <p className='project_fifth_con_small_title' >
                                        Name your job posting
                                    </p>
                                    <Input className='project_fifth_input_width' />
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Describe the work to be done
                                    </p>
                                    <TextArea rows={4} className='project_fifth_input_width' />
                                    <br />
                                    <br />
                                </div>
                                <div style={{ width: '60%' }} >
                                    <p className='project_fifth_con_small_title'>
                                        Attachments
                                    </p>
                                    <Dragger {...props}>
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                                    </Dragger>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        What type of project do you have?
                                    </p>
                                    <RadioGroup onChange={this.handler_project_type}>
                                        <Radio style={radioStyle} value={'One-time project'}>One-time project</Radio>
                                        <Radio style={radioStyle} value={'Ongoing project'}>Ongoing project</Radio>
                                        <Radio style={radioStyle} value={'I am not sure'}>I am not sure</Radio>
                                    </RadioGroup>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ display: this.state.project_describes }} >
                                    <p className='project_fifth_con_small_title'>
                                        Which of the following best describes your project?
                                    </p>
                                    <RadioGroup onChange={this.onChange}>
                                        <Radio style={radioStyle} value={'Decelop Excel program'}>Decelop Excel program</Radio>
                                        <Radio style={radioStyle} value={'Install/intrgrate software'}>Install/intrgrate software</Radio>
                                        <Radio style={radioStyle} value={'Create Browser Extendion'}>Create Browser Extendion</Radio>
                                        <Radio style={radioStyle} value={'Other'}>Other</Radio>
                                    </RadioGroup>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ display: this.state.work_type }} >
                                    <p className='project_fifth_con_small_title'>
                                        What type of work will the freelancer be doing?
                                    </p>
                                    <Checkbox.Group style={{ width: '100%' }} onChange={this.handler_work_type}>
                                        <Row>
                                            <Col span={16}><Checkbox value="Designer">Designer</Checkbox></Col>
                                            <Col span={16}><Checkbox value="Developer">Developer</Checkbox></Col>
                                            <Col span={16}><Checkbox value="Project Manager">Project Manager</Checkbox></Col>
                                            <Col span={16}><Checkbox value="Business Analyst">Business Analyst</Checkbox></Col>
                                            <Col span={16}><Checkbox value="QA">QA</Checkbox></Col>
                                            <Col span={16}><Checkbox value="Excel expert">Excel expert</Checkbox></Col>
                                            <Col span={16}><Checkbox value="Other">Other</Checkbox></Col>
                                        </Row>
                                    </Checkbox.Group>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Which operating system(s) does this application work on?
                                    </p>
                                    <div className='project_fifth_chechbox_box' id='window' style={{ borderBottom: this.state.window_border }} onClick={this.handler_operating_system} >
                                        <Icon type="windows" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Windows</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='apple' style={{ borderBottom: this.state.apple_border }} onClick={this.handler_operating_system} >
                                        <Icon type="apple" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Mac</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='linux/unix' style={{ borderBottom: this.state.linux_border }} onClick={this.handler_operating_system} >
                                        <Icon type="qq" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Linux/Unix</span>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        How many freelancers do you need to hire for this job?
                                        </p>
                                    <RadioGroup onChange={this.handler_freelancer_need}>
                                        <Radio style={radioStyle} value={'one'}>I want to hire one freelancer</Radio>
                                        <Radio style={radioStyle} value={'other'}>I need to hire more than one freelancer</Radio>
                                    </RadioGroup>
                                    <br />
                                    <div style={{display:this.state.freelancer_need_dis}} >
                                        <Input style={{width:100}} onChange={this.handler_freelancer_need_input} />
                                        <span id='project_fifth_freelancer_need' >
                                            freelancers
                                        </span>
                                    </div>
                                    <br/>
                                    <br/>
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Where are you in the lifecycle of this project?
                                    </p>
                                    <div className='project_fifth_chechbox_box' id='designs' style={{ borderBottom: this.state.designs_border }} onClick={this.handler_lifecycle} >
                                        <Icon type="file-text" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >I have designs</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='specifications' style={{ borderBottom: this.state.specifications_border }} onClick={this.handler_lifecycle} >
                                        <Icon type="copy" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >I have specifications</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='n/a' style={{ borderBottom: this.state.n_border }} onClick={this.handler_lifecycle} >
                                        <Icon type="red-envelope" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >N/A</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='idea' style={{ borderBottom: this.state.idea_border }} onClick={this.handler_lifecycle} >
                                        <Icon type="coffee" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >I have an idea</span>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Are you experienced hiring for this type of work?
                                    </p>
                                    <div className='project_fifth_chechbox_box' id='hired' style={{ borderBottom: this.state.hired_border }} onClick={this.handler_experiences_hiring} >
                                        <Icon type="check" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >I have hired for this type of work</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='new_hire' style={{ borderBottom: this.state.new_hire_border }} onClick={this.handler_experiences_hiring} >
                                        <Icon type="close" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >I am new to hiring for this type of work</span>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Which are the two most important programming languages the freelancer should know?<span>(optional)</span>
                                    </p>
                                    <Input placeholder="Basic usage" className='project_fifth_input_width' />
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Which software frameworks do you prefer to use?<span>(optional)</span>
                                    </p>
                                    <Input placeholder="Basic usage" className='project_fifth_input_width' />
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Enter skills needed
                                    </p>
                                    <Select
                                        mode="multiple"
                                        style={{ width: '60%' }}
                                        placeholder="Type to add a new skill"
                                        onChange={handleChange}
                                    >
                                        {children}
                                    </Select>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='project_fifth_con_box_box'>
                        <div>
                            <h2 className='project_fifth_con_title'>
                                Rate and Availability
                                    </h2>
                        </div>
                        <hr />
                        <div className='project_fifth_con_box' >
                            <div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        How would you like to pay?
                                    </p>
                                    <Popover placement="right" content={content} trigger="focus">
                                        <Select defaultValue="Pay by the hour" style={{ width: 120 }} onChange={this.handler_would_pay}>
                                            <Option value="Pay by the hour">Pay by the hour</Option>
                                            <Option value="Pay a fixed price">Pay a fixed price</Option>
                                        </Select>
                                    </Popover>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ display: this.state.pay_budget_dis }} >
                                    <p className='project_fifth_con_small_title'>
                                        Budget
                                    </p>
                                    <span id='budget_span' >$</span>
                                    <Input style={{ width: '200px', display: 'inline-block' }} />
                                    <br />
                                    <br />
                                </div>
                                <div >
                                    <p className='project_fifth_con_small_title'>
                                        Desired Experience Level
                                    </p>
                                    <div className='project_fifth_chechbox_box' id='entry' style={{ borderBottom: this.state.entry_border }} onClick={this.handler_experience_level} >
                                        <Icon type="check" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Entry Level</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='intermediate' style={{ borderBottom: this.state.intermediate_border }} onClick={this.handler_experience_level} >
                                        <Icon type="close" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Intermediate</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='expert' style={{ borderBottom: this.state.expert_border }} onClick={this.handler_experience_level} >
                                        <Icon type="check" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >Expert</span>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ display: this.state.experinece_level_dis }} >
                                    <p className='project_fifth_con_small_title'>
                                        How long do you expect this job to last?
                                        </p>
                                    <div className='project_fifth_chechbox_box' id='6+' style={{ borderBottom: this.state.more_border }} onClick={this.handler_job_long} >
                                        <Icon type="calendar" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >More than 6 months</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='3-6' style={{ borderBottom: this.state.middle_border }} onClick={this.handler_job_long} >
                                        <Icon type="calendar" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >3 to 6 months</span>
                                    </div>
                                    <div className='project_fifth_chechbox_box' id='1-3' style={{ borderBottom: this.state.less_border }} onClick={this.handler_job_long} >
                                        <Icon type="calendar" className='project_fifth_checkbox_icon' />
                                        <div className='project_fifth_box_line' ></div>
                                        <span className='project_fifth_checkbox_con' >1 to 3 months</span>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                    <div className='project_fifth_con_box_box'>
                        <div>
                            <h2 className='project_fifth_con_title'>
                                Freelancer Preferences
                            </h2>
                        </div>
                        <hr />
                        <div className='project_fifth_con_box' >
                            <div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Do you want freelancers to find and apply to your job?
                                        </p>
                                    <RadioGroup onChange={this.handler_who_can_find} value={this.state.value}>
                                        <Radio style={radioStyle} value={1}>Freelancers using Upwork.com and public search engines can find this job.</Radio>
                                        <Radio style={radioStyle} value={2}>Only Upwork users can find this job.</Radio>
                                        <Radio style={radioStyle} value={3}>Only freelancers I have incited can find this job.</Radio>
                                    </RadioGroup>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Preferred Qualifications
                                    </p>
                                    <p>
                                        Specify the qualifications you're looking for in a successful application.Freelancers may still apply if thry do not meet your preferences,<br />but thry will be clearly notified that thry are at a disadvantage.
                                    </p>
                                    <div id='project_fifth_add_qualifications_box' onClick={this.handler_add_qualifications} >
                                        <p>
                                            {this.state.add_qualifications}
                                        </p>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div style={{ display: this.state.freelancer_type }} >
                                    <div className='project_fifth_table' >
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Freelancer Type
                                            </p>
                                            <Select defaultValue="No preference" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="No preference">No preference</Option>
                                                <Option value="Independent">Independent</Option>
                                                <Option value="Agency">Agency</Option>
                                            </Select>
                                        </div>
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Job Success Score
                                            </p>
                                            <Select defaultValue="Any Job Success" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="Any Job Success">Any Job Success</Option>
                                                <Option value="90">90% Job Success & up</Option>
                                                <Option value="80">80% Job Success & up</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='project_fifth_table' >
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Rising Talent
                                            </p>
                                            <Select defaultValue="Include Rising Talent" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="Include Rising Talent">Include Rising Talent</Option>
                                                <Option value="Don't include Rising Talent">Don't include Rising Talent</Option>
                                            </Select>
                                        </div>
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Hours Billed on Upwork
                                            </p>
                                            <Select defaultValue="Any amount" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="Any amount">Any amount</Option>
                                                <Option value="1">At least 1 hour</Option>
                                                <Option value="100">At least 100 hour</Option>
                                                <Option value="500">At least 500 hour</Option>
                                                <Option value="1000">At least 1,000 hour</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='project_fifth_table' >
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Location
                                            </p>
                                            <Select defaultValue="Any location" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="Any location">Any location</Option>
                                                <Option value="Africa">Africa</Option>
                                                <Option value="Americas">Americas</Option>
                                                <Option value="Antarctica">Antarctica</Option>
                                                <Option value="Asia">Asia</Option>
                                                <Option value="Europe">Europe</Option>
                                                <Option value="Oceania">Oceania</Option>
                                            </Select>
                                        </div>
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                English Level (self-addigned)
                                            </p>
                                            <Select defaultValue="Any level" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="Any level">Any level</Option>
                                                <Option value="Basic">Basic</Option>
                                                <Option value="Conversational">Conversational</Option>
                                                <Option value="Fluent">Fluent</Option>
                                                <Option value="Native or Bilingual">Native or Bilingual</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className='project_fifth_table' >
                                        <div className='project_fifth_table_cell' >
                                            <p className='project_fifth_con_small_title'>
                                                Group
                                            </p>
                                            <Select defaultValue="No preference" style={{ width: '90%' }} onChange={this.handler_would_pay}>
                                                <Option value="No preference">No preference</Option>
                                                <Option value="US Militart Veterans">US Militart Veterans</Option>
                                                <Option value="Aweber Email Marketing">Aweber Email Marketing</Option>
                                                <Option value="Pligg">Pligg</Option>
                                                <Option value="Social Impact Agency">Social Impact Agency</Option>
                                            </Select>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Screeing Questions
                                    </p>
                                    <p>
                                        Add a few questions you'd like your candidates to answer when applying to your job.
                                    </p>
                                    {
                                        this.state.list_
                                    }
                                    <br/>
                                    <Select defaultValue="Pay by the hour" style={{ width: 120 }} onChange={this.handler_question}>
                                        <Option value={1}>Select from suggested or recent</Option>
                                        <Option value={0} >Createmywen question</Option>
                                    </Select>
                                    <br />
                                    <br />
                                </div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Cover Letter
                                    </p>
                                    <p>
                                        Ask applicants to writer a cover letter ineroducing themselves.
                                    </p>
                                    <Checkbox.Group style={{ width: '100%' }} onChange={this.handler_cover_letter}>
                                        <Row>
                                            <Col span={16}><Checkbox value="cover_letter">Yes,require a cover letter</Checkbox></Col>
                                        </Row>
                                    </Checkbox.Group>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <div>
                                    <p className='project_fifth_con_small_title'>
                                        Boost your job's visibility
                                        </p>
                                    <Checkbox.Group style={{ width: '100%' }} onChange={this.handler_react_more_freelancer}>
                                        <Row>
                                            <Col span={16}><Checkbox value="Designer">Tell me how I can reach more freelancers and hire in less time.</Checkbox></Col>
                                        </Row>
                                    </Checkbox.Group>
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <hr />
                            <div>
                                <p className='project_fifth_con_small_title'>
                                    Invite a coworker to help you hire
                                </p>
                                <p>
                                    Once on your team,they can easily help you find,interview,and evaluate freelancers
                                </p>
                                <Input placeholder="Type email address and press enter" style={{width:500}} />
                                <br/>
                                <br/>
                                <Checkbox.Group style={{ width: '100%' }} onChange={this.handler_react_more_freelancer}>
                                    <Row>
                                        <Col span={16}><Checkbox value="Designer">Also allow these coworkers to hire and pay with this account.</Checkbox></Col>
                                    </Row>
                                </Checkbox.Group>
                                <br />
                                <br />
                            </div>
                            <hr />
                            <div>
                                <p className='project_fifth_con_small_title'>
                                    Note:<span style={{fontWeight:500}} >Your job description will be saved for now and posted only after you verify your email address.</span>
                                </p>
                                <div id='project_fifth_post_job_box' >
                                    <p>
                                        Post Job
                                    </p>
                                </div>
                                <div id='project_fifth_preview_box' >
                                    <p>
                                        Preview
                                    </p>
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                        </div>
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
                {/* 添加系统问题模块 */}
                {
                    this.state.show_question && <AddQuestion
                        show={this.state.show_question}
                        question_num={this.state.question_num}
                        handler_add_question={this.handler_add_question.bind(this)}
                        handler_add_question_close={this.handler_add_question_close.bind(this)}

                    />
                }
            </div>
        )
    }
}
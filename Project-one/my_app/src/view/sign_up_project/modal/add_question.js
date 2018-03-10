import React, { Component } from 'react';
import { Modal, Button, Checkbox, Row, Col } from 'antd';
import '../../../css/add_question.css'

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
}


export default class AddEducation extends React.Component {
    state = {
        list:[],
        question_num:0,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handler_add=()=>{
        this.props.handler_add_question(this.state.list)
        this.props.handler_add_question_close()
    }
    
    handler_add_question_secelt=(value)=>{
        this.setState({
            list:value,
            question_num:value.length,
            backgroundColor:'rgb(54, 161, 1)',
            color:'white'
        })
        if(value.length>5){
            this.setState({
                backgroundColor:'rgb(224,224,224)',
                color:'rgb(173,173,173)'
            })
        }
    }

    render() {

        return (
            <div>
                <Modal
                    title="Suggested Questions"
                    visible={this.props.show}
                    onCancel={this.props.handler_add_question_close}
                    footer={null}
                    width={900}
                    wrapClassName='add_question_modal_box'
                    footer={[
                        <div id='add_question_foot_box' >
                            <div id='add_question_foot_add' style={{backgroundColor:this.state.backgroundColor,color:this.state.color}} onClick={this.handler_add} >
                                <p>
                                    Add These Questions
                                </p>
                            </div>
                            <div id='add_question_foot_cancel' onClick={this.props.handler_add_question_close} >
                                <p>
                                    Cancel
                                </p>
                            </div>
                            <span>
                                You have added {this.state.question_num} out of 5 questions.
                            </span>
                        </div>

                    ]}
                >
                    <Checkbox.Group style={{ width: '100%' }} onChange={this.handler_add_question_secelt}>
                        <Row>
                            <Col span={20}><Checkbox value="Do you have any questions about rhe job descriprion?">Do you have any questions about rhe job descriprion?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="Do you have suggestions to make this project run successfully?">Do you have suggestions to make this project run successfully?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="Have you taken any Uproek tests and done well on them that you think are relevant to this job?">Have you taken any Uproek tests and done well on them that you think are relevant to this job?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="What challenging part of this job are you most experiences in?">What challenging part of this job are you most experiences in?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="What part of this project most appeals to you?">What part of this project most appeals to you?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="What past project or job have you had that is most like this one and why?">What past project or job have you had that is most like this one and why?</Checkbox></Col>
                            <br/>
                            <br/>
                            <Col span={20}><Checkbox value="Which part of this project do you think will take the most">Which part of this project do you think will take the most</Checkbox></Col>
                        </Row>
                    </Checkbox.Group>
                </Modal>
            </div >
        )
    }
}
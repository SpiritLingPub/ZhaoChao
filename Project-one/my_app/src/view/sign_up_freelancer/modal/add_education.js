import React, { Component } from 'react';
import { Modal, Button, Input, Select } from 'antd';
import '../../../css/add_education.css';

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class AddEducation extends React.Component {
    state = {
        visible: false
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }

    handler_save=()=>{
        this.props.handler_add_education_close()
    }
    render() {

        return (
            <div>
                <Modal
                    title="Add Education"
                    visible={this.props.show}
                    onOk={this.handleOk}
                    onCancel={this.props.handler_add_education_close}
                    footer={null}
                    width={900}
                    wrapClassName='add_education_modal_box'
                >
                    <div id='add_education_box'>
                        <p className='add_education_con_title'>
                            School
                        </p>
                        <Input/>
                        <p className='add_education_con_title'>
                            Dates Attended
                        </p>
                        <Select
                            showSearch
                            style={{ width: 360 }}
                            placeholder="From"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_from_years'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select>
                        <Select
                            showSearch
                            style={{ width: 360,float:'right' }}
                            placeholder="To (or expected graduation year)"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_to_years'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select>
                        <p className='add_education_con_title'>
                            Degree
                        </p>
                        <Input/>
                        <p className='add_education_con_title'>
                            Area of Study (optional)
                        </p>
                        <Input />
                        <p className='add_education_con_title'>
                            Description (optional)
                        </p>
                        <Input id='add_education_description_box'/>
                        <div id='add_education_save' className='add_education_button' onClick={this.handler_save}>
                            <p>
                                Save
                            </p>
                        </div>
                        <div id='add_education_more' className='add_education_button'>
                            <p>
                                Save and Add More
                            </p>
                        </div>
                        <div id='add_education_cancel' className='add_education_button'>
                            <p>
                                Cancel
                            </p>
                        </div>
                    </div>
                </Modal>
            </div >
        )
    }
}
import React, { Component } from 'react';
import { Modal, Select, Checkbox, Input } from 'antd';
import '../../../css/add_employment.css';

import Country from '../../../modular/all_country'

const Option = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

export default class Hiring extends React.Component {
    state = {

    };

    handler_save = () => {
        this.props.handler_add_employment_close()
    }

    render() {
        return (
            <div>
                <Modal
                    title="Add employment"
                    visible={this.props.show}
                    onCancel={this.props.handler_add_employment_close}
                    footer={null}
                    width={900}
                    wrapClassName='add_employment_modal_box'
                >
                    <div id='add_employment_box'>
                        <p className='add_employment_con_title'>
                            Company
                        </p>
                        <Input />
                        <p className='add_employment_con_title'>
                            Location
                        </p>
                        <Input 
                        style={{width:360}}
                        />
                        &emsp;&emsp;&emsp;
                        <Country />
                        <p className='add_employment_con_title'>
                            Title
                        </p>
                        <Input />
                        <p className='add_employment_con_title'>
                            Role
                        </p>
                        <Select
                            showSearch
                            style={{ width: 300 }}
                            placeholder="Please Select..."
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_from_years'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select>
                        <p className='add_employment_con_title'>
                            Period
                        </p>
                        <Select
                            showSearch
                            style={{ width: 360 }}
                            placeholder="Month"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_from_month'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select><Select
                            showSearch
                            style={{ width: 360,float:'right' }}
                            placeholder="Year"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_from_years'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select>
                        <p style={{
                            color:'rgb(149147152)',
                            textAlign:'center',
                            fontWeight:600
                        }}>
                            through
                            </p>
                        <Select
                            showSearch
                            style={{ width: 360 }}
                            placeholder="Month"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_to_Month'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select><Select
                            showSearch
                            style={{ width: 360 ,float:'right'}}
                            placeholder="Year"
                            optionFilterProp="children"
                            onChange={handleChange}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='add_education_to_years'
                        >

                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="tom">Tom</Option>

                        </Select>
                        <Checkbox id='sign_second_send_me' className='add_employment_checkbox'>I currently work here</Checkbox>
                        <p className='add_employment_con_title'>
                            Description(optioanal)
                        </p>
                        <Input id='add_employment_description' />
                        <div id='add_employment_save' className='add_employment_button' onClick={this.handler_save}>
                            <p>
                                Save
                            </p>
                        </div>
                        <div id='add_employment_more' className='add_employment_button'>
                            <p>
                                Save and Add More
                            </p>
                        </div>
                        <div id='add_employment_cancel' className='add_employment_button'>
                            <p>
                                Cancel
                            </p>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
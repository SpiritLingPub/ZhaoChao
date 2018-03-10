import React, { Component } from 'react';
import { Modal, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import ajax from '../../base/ajax'


const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;


class FreeAdd extends React.Component {
    state = {
        loading: false,
        confirmDirty: false,
        autoCompleteResult: [],
        send: undefined,
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    send: values
                })
            }
        });
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleWebsiteChange = (value) => {
        let autoCompleteResult;
        if (!value) {
            autoCompleteResult = [];
        } else {
            autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.setState({ autoCompleteResult });
    }

    // componentDidMount() {
    //     if (localStorage.getItem('ad_token')) {
    //         ajax.get(ajax.url(ajax.ports.freelancer),
    //             {
    //                 'access_token': JSON.stringify(localStorage.getItem('ad_token'))
    //             }
    //         ).then((xhr) => {
    //             console.log(xhr.response)
    //             this.setState({
    //                 list: xhr.response
    //             })
    //         }).catch((err) => {
    //             console.log(err)
    //         }).complete(() => {
    //             this.setState({
    //                 loading: false
    //             })
    //         })
    //     }
    // }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
            );

        const websiteOptions = autoCompleteResult.map(website => (
            <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
        ));
        const { loading } = this.state;
        return (
            <div>
                <Modal
                    visible={this.props.show}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.props.handler_add_close}
                    footer={null}
                >
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                            {...formItemLayout}
                            label="E-mail"
                        >
                            {getFieldDecorator('email', {
                                rules: [{
                                    type: 'email', message: 'The input is not valid E-mail!',
                                }, {
                                    required: true, message: 'Please input your E-mail!',
                                }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Password"
                        >
                            {getFieldDecorator('password', {
                                rules: [{
                                    required: true, message: 'Please input your password!',
                                }, {
                                    validator: this.checkConfirm,
                                }],
                            })(
                                <Input type="password" />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Confirm Password"
                        >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                    required: true, message: 'Please confirm your password!',
                                }, {
                                    validator: this.checkPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Username&nbsp;
                          <Tooltip title="What do you want others to call you?">
                                        <Icon type="question-circle-o" />
                                    </Tooltip>
                                </span>
                            )}
                        >
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Firstname&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('firstname', {
                                rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem><FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Lastname&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('lastname', {
                                rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem><FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Country&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('country', {
                                rules: [{ required: true, message: 'Please input your country!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem><FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    Hourly-Rate&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('hourly_rate', {
                                rules: [{ required: true, message: 'Please input your Hourly-Rate!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem><FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                    JobSuccess&nbsp;
                                </span>
                            )}
                        >
                            {getFieldDecorator('job_success', {
                                rules: [{ required: true, message: 'Please input your JobSuccess!', whitespace: true }],
                            })(
                                <Input />
                                )}
                        </FormItem>
                        <hr/>
                        <FormItem
                            wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default Form.create({})(FreeAdd);

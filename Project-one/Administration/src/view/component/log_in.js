import React, { Component } from 'react';
import { Modal, Form, Icon, Input, Button, Checkbox } from 'antd';
import ajax from '../../base/ajax'

const FormItem = Form.Item;

class LogInModal extends React.Component {
    state = {
        loading: false,
        username: undefined,
        password: undefined
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                this.setState({
                    username: values.userName,
                    password: values.password
                })
            }
        });
    }
    handler_login = () => {
        console.log(this.state.username)
        console.log(this.state.password)
        this.setState({
            loading:true
        })
        if (this.state.username && this.state.password) {
            console.log('234')
            ajax.post(ajax.url(ajax.ports.log_in),
                {
                    'cin': JSON.stringify({
                        username: this.state.username,
                        password: this.state.password
                    })
                }
            ).then((xhr) => {
                localStorage.setItem('ad_token',xhr.response.token)
                this.props.handler_login_close
            }).catch((err) => {
                console.log(err)
            }).complete(() => {
                this.setState({
                    loading: false
                })
            })
        }
    }
    render() {
        const { visible, loading } = this.state;
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Modal
                    visible={this.props.show}
                    title="登录框"
                    onOk={this.handleOk}
                    onCancel={this.props.handler_login_close}
                    footer={[
                        <Button key="back" onClick={this.props.handler_login_close}>取消</Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handler_login} >
                            登录
                        </Button>,
                    ]}
                >
                    <Form onChange={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default Form.create({})(LogInModal);

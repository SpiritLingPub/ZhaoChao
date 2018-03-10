import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/sign_up.css';

import SignFoot from '../modular/sign_foot'

import Logo from '../photo/logo.png'

const FormItem = Form.Item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class Signup extends React.Component {
    state = {

    };

    componentDidMount() {
        this.props.form.validateFields();
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values.firstname)
                localStorage.setItem('firstname', values.firstname)
                localStorage.setItem('lastname', values.lastname)
                localStorage.setItem('email', values.email)
                // window.location.href='http://localhost:3000/abc/sign_up/sign_up_second'
            }
        });
    }


    render() {

        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
            <div>
                <Navbar id="nav_box" collapseOnSelect>
                    <Navbar.Header className="nav_content">
                        <Link to="/homepage">
                            <img id='logo' src={Logo} alt="upword_logo" />
                        </Link>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse className="nav_content">
                        <Nav pullRight>
                            <span className='sign_up_right'>Already have an account?</span>
                            <Link to="/login">
                                <span className='sign_up_right sign_up_log_in'>Log In</span>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <div id='sign_up_box'>
                    <h2 id='sign_up_title'>Sign Up</h2>
                    <Form layout="inline" onSubmit={this.handleSubmit} id='sign_up_form' >
                        <FormItem
                            validateStatus={userNameError ? 'error' : ''}
                            help={userNameError || ''}
                        >
                            {getFieldDecorator('firstname', {
                                rules: [{ required: true, message: 'First name' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />} placeholder="First name" />
                                )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                        >
                            {getFieldDecorator('lastname', {
                                rules: [{ required: true, message: 'Last name' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />} type="text" placeholder="Last name" />
                                )}
                        </FormItem>
                        <FormItem
                            validateStatus={passwordError ? 'error' : ''}
                            help={passwordError || ''}
                            className='sign_up_email'
                        >
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Work email address' }],
                            })(
                                <Input className='sign_up_email_input' prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />} type="text" placeholder="Work email address" />
                                )}
                            {/* <Link to="/sign_up/sign_up_second"> */}
                                <Button id='sign_up_submit' htmlType="submit">
                                    Get Strated
                            </Button >
                            {/* </Link> */}
                        </FormItem>
                        <br />
                    </Form>
                </div>
                <SignFoot />
            </div>
        )
    }
}

export default Form.create({})(Signup);


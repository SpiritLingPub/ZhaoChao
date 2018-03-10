import React, { Component } from 'react';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/sign_fouth.css';
import SuccessImg from '../../photo/sign_up/sign_up.png'
import SignFoot from '../../modular/sign_foot'

export default class SignFouth extends React.Component {
    state = {
        address: '534180367@qq.com'
    };

    render() {
        return (
            <div>
                <img id='SuccessImg' src={SuccessImg} alt="SuccessImg" />
                <h2 id='sign_fouth_title'>
                    Verify your email address to access all of Upwork
                </h2>
                <p id='sign_fouth_con'>
                    We`ve just sent an email to your address:{this.state.address}
                    <br />
                    Please check your email and click on the link provided to verify your address.
                </p>
                <div id='sign_fouth_choose_box'>
                    <Link to="/signup">
                        <p>
                            <Icon type="up" />
                            <span>
                                Change email
                        </span>
                        </p>
                    </Link>
                    <Link to="/signup">
                        <p>
                            <Icon type="up" />
                            <span>
                                I need help verifying my email
                        </span>
                        </p>
                    </Link>
                    <Link to="/signup">
                        <p>
                            <Icon type="up" />
                            <span>
                                Please re-send that verification email
                        </span>
                        </p>
                    </Link>
                </div>
                <Link to="/sign_up/sign_up_fifth">
                    <div id='sign_fouth_next_box' onClick={this.handlernext}>
                        <p id='sign_fouth_next_con'>
                            Next
                        </p>
                    </div>
                </Link>
                
                <SignFoot />
            </div>
        )
    }
}
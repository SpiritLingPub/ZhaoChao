import React, { Component } from 'react';
import { } from 'react-bootstrap';
import { message } from 'antd';
import SignFoot from '../../modular/sign_foot'
// import '../css/how_it_works.css';

export default class Hiring extends React.Component {
    state = {

    };
    componentWillMount() {
        message.success('Your account has been successfully created.Redirecting you ...', 5);

        setTimeout(function () {
            window.location.href = "http://localhost:3000/abc/sign_up/sign_up_fouth"
        }, 5000)
    }

    render() {
        return (
            <div>
                
                <SignFoot />

            </div>
        )
    }
}
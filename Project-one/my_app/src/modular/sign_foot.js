import React, { Component } from 'react';
import '../css/sign_foot.css';


export default class SignFoot extends React.Component {
    state = {

    };


    render() {
        return (
            <div id='sign_foot_box'>
                <p id='sign_foot_con1'>
                    © 2015 - 2018 Upwork Global Inc.
                </p>
                <p id='sign_foot_con2'>
                    Terms of Service
                <br />
                    Cookie Policy
                </p>
            </div>
        )
    }
}


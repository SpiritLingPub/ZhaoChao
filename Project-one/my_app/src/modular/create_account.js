import React, { Component } from 'react';
import { Input } from 'antd';
import '../css/create_account.css';

export default class Hiring extends React.Component {
    state = {

    };

    render() {
        return (
            <div id='create_account_box'>
            
            <br/>
                <br/>
                <br/>
                <h1>
                    Create a free account
                </h1>
                <div>
                    <label htmlFor='create_account_firstname' className='create_account_label'>
                        First Name
                    </label>
                    <Input id='create_account_firstname' />
                </div>
                <div>
                    <label htmlFor='create_account_lastname' className='create_account_label'>
                        Last Name
                    </label>
                    <Input id='create_account_lastname' />
                </div>
                <div>
                    <label htmlFor='create_account_email' className='create_account_label'>
                        Email
                    </label>
                    <Input id='create_account_email' />
                </div>
                <br/>
                <br/>
                <div id='create_account_next_box'>
                    <p>
                        &emsp;&emsp;Sign Up Now&emsp;&emsp;
                    </p>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { } from 'antd';
import '../../css/sign_up_foot.css';

import G from '../../photo/sign_up/sign_up_g.png'
import N from '../../photo/sign_up/sign_up_n.png'
import F from '../../photo/sign_up/sign_up_f.png'
import I from '../../photo/sign_up/sign_up_in.png'

export default class SignUpFoot extends React.Component {
    state = {

    };

    render() {
        return (
            <div id='sign_up_foot_box'>
                <div id='sign_up_foot_list_box'>
                    <ul className='sign_up_foot_ul'>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Feedback</li>
                    </ul>
                    <ul className='sign_up_foot_ul'>
                        <li>Community</li>
                        <li>Trust & Safety</li>
                        <li>Help & Support</li>
                    </ul>
                    <ul className='sign_up_foot_ul'>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Desktop App</li>
                    </ul>
                    <ul className='sign_up_foot_ul'>
                        <li>Cookie Policy</li>
                        <li>Enterprise Solutions</li>
                        <li>Hiring Headquarters</li>
                        <li>Mobile</li>
                    </ul>
                </div>
                <div id='sign_up_foot_img_box'>
                    <div>
                        <img id='g' src={G} alt="G" className='sign_up_foot_img' />
                    </div>
                    <div>
                        <img id='n' src={N} alt="N" className='sign_up_foot_img' />
                    </div>
                    <div>
                        <img id='f' src={F} alt="f" className='sign_up_foot_img' />
                    </div>
                    <div>
                        <img id='in' src={I} alt="in" className='sign_up_foot_img' />
                    </div>
                </div>
                <div id='sign_up_foot_foot'>
                    <p>
                        © 2015 - 2018 Upwork Global Inc.
                    </p>
                </div>
            </div>
        )
    }
}
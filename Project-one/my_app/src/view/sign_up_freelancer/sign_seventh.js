import React, { Component } from 'react';
import { Avatar, Icon } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/sign_seventh.css';
import ajax from '../../base/ajax'
import {list} from '../../base/list'

import SignFoot from '../../modular/sign_up/sign_up_foot'
import sign_up from '../sign_up';


export default class SignSeventh extends React.Component {
    state = {

    };

    handler_post = () => {
        ajax.post(ajax.url(ajax.ports.sign_up),
            {
                'cin':JSON.stringify(list())
            }
        ).then((xhr) => {
            console.log(xhr)
        }).catch((err)=>{
            console.log(err)
        }).complete(()=>{

        })
    }

    get_hourly_rate = () => {
        switch (localStorage.getItem('hours_week')) {
            case '30+':
                return 'More than 30 hrs/week'
                break;
            case '30-':
                return 'Less than 30 hrs/week'
                break;
            case 'other':
                return 'As Needed'
                break;
        }
    }

    get_skills = () => {
        let list = []
        let item = localStorage.getItem('offer_clients').split(',')
        for (let i of item) {
            let el = (
                <p className='sign_seventh_skills_con'>
                    &emsp;{i}&emsp;
                </p>
            )
            list.push(el)
        }
        return list
    }

    render() {
        const img=localStorage.getItem('imgurl')
        return (
            <div>
                <div id='sign_seventh_box'>
                    <div className='sign_seventh_submit_box'>
                        <div className='sign_seventh_submit'>
                            <h3 id='sign_seventh_submit_title'>
                                Your application to join is almost complete!
                            </h3>
                            <p id='sign_seventh_submit_con'>
                                Double check that everything is error_free.After submitting,we`ll get back to you in 24 hours.If approved,you`ll be able to start submitting job proposals right away.
                        </p>
                        </div>
                        <hr />
                        <div className='sign_seventh_submit'>
                            <div className='sign_seventh_submit_next_box' onClick={this.handler_post}>
                                <p>
                                    &emsp;&emsp;Submit My Application to Join&emsp;&emsp;
                                </p>
                            </div>
                            <Link to="/sign_up/sign_up_second">
                                <div className='sign_seventh_submit_back_box'>
                                    <p>
                                        &emsp;&emsp;Edit Application&emsp;&emsp;
                                </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div id='sign_seventh_professional_box'>
                        <div className='sign_seventh_submit'>
                            <div id='sign_seventh_professional_name_box'>
                                <Avatar src={require('../../img/'+img)} id='sign_seventh_professional_head'/>
                                <h2 className='sign_seventh_professional_name'>
                                    {
                                        localStorage.getItem('firstname')
                                    }
                                    {
                                        localStorage.getItem('lastname')
                                    }
                                </h2>
                                <div id='sign_seventh_professional_city'>
                                    <span style={{
                                        fontWeight: 600
                                    }}>
                                        <Icon type="environment" />
                                        {
                                            localStorage.getItem('city')
                                        },{
                                            localStorage.getItem('country')
                                        }&nbsp;-&nbsp;
                                    </span>
                                    <span style={{ color: 'rgb(129,124,124)', fontWeight: 600 }}>
                                        {
                                            new Date().toLocaleTimeString()
                                        }&nbsp;
                                        local&nbsp; time
                                </span>
                                </div>
                            </div>
                            <p id='sign_seventh_professional_title'>
                                {
                                    localStorage.getItem('professional_title')
                                }
                            </p>
                            <p id='sign_seventh_professional_con'>
                                {
                                    localStorage.getItem('professional')
                                }
                            </p>
                            <p id='sign_seventh_professional_hourly_rate'>
                                $
                                {
                                    localStorage.getItem('hourly_rate')
                                }
                            </p>
                            <p style={{ color: 'rgb(129,124,124)', fontWeight: 600 }}>
                                Hourly Rate
                            </p>
                            <br />
                        </div>
                    </div>
                    <div id='sign_seventh_avaliablity_box'>
                        <h4 className='sign_seventh_avaliablity_title'>
                            Availabilty
                        </h4>
                        <br />
                        <p className='sign_seventh_avaliablity_con'>
                            Avaliable <br />
                            {
                                this.get_hourly_rate()
                            }
                        </p>
                        <hr />
                        <h4 className='sign_seventh_avaliablity_title'>
                            Languages
                    </h4>
                        <br />
                        <p className='sign_seventh_avaliablity_con'>
                            English:
                        <span>
                                {
                                    localStorage.getItem('english_proficiency')
                                }
                            </span>
                        </p>
                    </div>
                    <div className='sign_seventh_submit_box'>
                        <div className='sign_seventh_submit'>
                            <h3 id='sign_seventh_siklls_title'>
                                Skills
                            </h3>
                        </div>
                        <hr />
                        <div className='sign_seventh_submit'>
                            {
                                this.get_skills()
                            }
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
                <SignFoot />
            </div>
        )
    }
}
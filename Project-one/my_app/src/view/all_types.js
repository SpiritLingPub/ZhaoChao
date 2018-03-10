import React, { Component } from 'react';
import { Pagination, Select, Card, Avatar, Progress, Icon } from 'antd';
import ajax from '../base/ajax'
import '../css/all_type.css';


import Navigation from '../modular/navigation';
import NavSecond from '../modular/second_nav';
import Foot from '../modular/sign_up/sign_up_foot';

const Option = Select.Option;


export default class AllTypes extends React.Component {
    state = {
        current: 1,
        list: [],
        loading: true,
        page_count: 0,
    };

    componentDidMount() {
        this.setState({
            loading: true
        })
        localStorage.setItem('all_type_job_success', 'Any job success');
        localStorage.setItem('all_type_hourly_rate', 'Any hourly rate');
        ajax.get(ajax.url(ajax.ports.all_type),
            {
                'cin': JSON.stringify({
                    main_services: localStorage.getItem('all_type_category').replace(/\&/g, "%26"),
                    job_success: parseInt(localStorage.getItem('all_type_job_success')) ? parseInt(localStorage.getItem('all_type_job_success')) : localStorage.getItem('all_type_job_success'),
                    hourly_rate: parseInt(localStorage.getItem('all_type_hourly_rate')) ? parseInt(localStorage.getItem('all_type_hourly_rate')) : localStorage.getItem('all_type_hourly_rate'),
                    pagenum: this.state.current,
                })
            }
        ).then((xhr) => {
            this.setState({
                list: xhr.response
            })

        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
        ajax.get(ajax.url(ajax.ports.all_type),
            {
                'cin': JSON.stringify({
                    page_count: true,
                    main_services: localStorage.getItem('all_type_category').replace(/\&/g, "%26"),
                    job_success: parseInt(localStorage.getItem('all_type_job_success')) ? parseInt(localStorage.getItem('all_type_job_success')) : localStorage.getItem('all_type_job_success'),
                    hourly_rate: parseInt(localStorage.getItem('all_type_hourly_rate')) ? parseInt(localStorage.getItem('all_type_hourly_rate')) : localStorage.getItem('all_type_hourly_rate'),
                })
            }
        ).then((xhr) => {
            this.setState({
                page_count: xhr.response[0]['count(*)']
            })
            console.log(this.state.page_count)
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
    }

    handler_page_change = (page) => {
        this.setState({
            current: page,
            loading: true,
        });
        ajax.get(ajax.url(ajax.ports.all_type),
            {
                'cin': JSON.stringify({
                    main_services: localStorage.getItem('all_type_category').replace(/\&/g, "%26"),
                    job_success: parseInt(localStorage.getItem('all_type_job_success')) ? parseInt(localStorage.getItem('all_type_job_success')) : localStorage.getItem('all_type_job_success'),
                    hourly_rate: parseInt(localStorage.getItem('all_type_hourly_rate')) ? parseInt(localStorage.getItem('all_type_hourly_rate')) : localStorage.getItem('all_type_hourly_rate'),
                    pagenum: page,
                })
            }
        ).then((xhr) => {
            this.setState({
                list: xhr.response
            })
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
    }

    handler_all_type_list = () => {
        let list = []
        let item = this.state.list;
        for (let i of item) {
            let el = (
                <Card loading={this.state.loading} style={{ width: '100%', cursor: 'pointer' }}>
                    <div className='all_type_head_box' >
                        <Avatar src={require('../img/' + i.imgurl)} className='all_type_card_head' />
                    </div>
                    <div className='all_type_card_con' >
                        <p className='all_type_card_name'>
                            {i.firstname}&nbsp;{i.lastname}
                        </p>
                        <p className='all_type_card_main_services_type' >
                            {i.main_services_type.replace(/,/g, ' | ')}
                        </p>
                        <div className='all_type_con_box' >
                            <p className='all_type_hourly_rate' >
                                <span className='all_type_con_big' >
                                    ${i.hourly_rate}
                                </span>
                                <span>
                                    &nbsp;/ &nbsp;hr
                                </span>
                            </p>
                            <p className='all_type_earned' >
                                <span className='all_type_con_big' >
                                    ${i.earn}
                                </span>
                                <span>
                                    &nbsp; &nbsp;rearned
                                </span>
                            </p>
                            <p className='all_type_job_success all_type_con_big' >
                                <span>
                                    {i.job_success}&nbsp;%&nbsp; &nbsp;Job success
                                    </span>
                                <Progress percent={i.job_success} size="small" showInfo={false} />
                            </p>
                            <p className='all_type_country all_type_con_big' >
                                <Icon type="environment" /> &nbsp; {i.country}
                            </p>
                        </div>
                        <p className='all_type_professional' >
                            {i.professional.substring(0, 200)}&nbsp;...
                        </p>
                        <div className='all_type_offer_client_box' >
                            {
                                this.handler_offer_clients(i.offer_clients)
                            }
                        </div>
                    </div>
                </Card>
            )
            list.push(el)
        }
        return list
    }

    handler_offer_clients = (e) => {
        let item = e.split(',')
        let list = [];
        for (let i of item) {
            let el = (
                <div className='all_type_offer_clients_con' >
                    &emsp;{i}&emsp;
                </div>
            )
            list.push(el)
        }
        return list
    }

    handler_ajax = () => {
        this.setState({
            loading: true,
        });
        ajax.get(ajax.url(ajax.ports.all_type),
            {
                'cin': JSON.stringify({
                    main_services: localStorage.getItem('all_type_category').replace(/\&/g, "%26"),
                    job_success: parseInt(localStorage.getItem('all_type_job_success')) ? parseInt(localStorage.getItem('all_type_job_success')) : localStorage.getItem('all_type_job_success'),
                    hourly_rate: parseInt(localStorage.getItem('all_type_hourly_rate')) ? parseInt(localStorage.getItem('all_type_hourly_rate')) : localStorage.getItem('all_type_hourly_rate'),
                    pagenum: this.state.current,
                })
            }
        ).then((xhr) => {
            this.setState({
                list: xhr.response
            })
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
    }

    handler_select_change=()=>{
        this.setState({
            loading: true,
        });
        ajax.get(ajax.url(ajax.ports.all_type),
            {
                'cin': JSON.stringify({
                    main_services: localStorage.getItem('all_type_category').replace(/\&/g, "%26"),
                    job_success: parseInt(localStorage.getItem('all_type_job_success')) ? parseInt(localStorage.getItem('all_type_job_success')) : localStorage.getItem('all_type_job_success'),
                    hourly_rate: parseInt(localStorage.getItem('all_type_hourly_rate')) ? parseInt(localStorage.getItem('all_type_hourly_rate')) : localStorage.getItem('all_type_hourly_rate'),
                    page_count: true,
                })
            }
        ).then((xhr) => {
            this.setState({
                page_count: xhr.response[0]['count(*)']
            })
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading: false
            })
        })
    }

    handler_actegory_change = (value) => {
        localStorage.setItem('all_type_category', value)
        this.handler_ajax()
        this.handler_select_change()
    }

    handler_job_success_change = (value) => {
        localStorage.setItem('all_type_job_success', value)
        this.handler_ajax()
        this.handler_select_change()
    }

    handler_hourly_rate_change = (value) => {
        localStorage.setItem('all_type_hourly_rate', value)
        this.handler_ajax()
        this.handler_select_change()
    }

    render() {
        return (
            <div>
                <Navigation />
                <NavSecond />
                <div id='all_type_box' >
                    <div id='all_type_title_box'>
                        <p id='all_type_title' >
                            Web,Mobile,Software Developers
                        </p>
                        <div id='all_type_title_con' >
                            <p>
                                Post a job.it's free!
                            </p>
                        </div>
                    </div>
                    <br />
                    <div id='all_type_list_box' >
                        <div>
                        </div>
                        <hr />
                        <div id='all_type_list_select_box' >
                            <Select className='all_type_list_select' defaultValue="Any actegory" onChange={this.handler_actegory_change}>
                                <Option value="Any category">Any category</Option>
                                <Option value="Web,Mobile & Software Dev">Web,Mobile & Software</Option>
                                <Option value="IT & Networking">IT & Networking</Option>
                                <Option value="Data Science">Data Science</Option>
                                <Option value="Engineering">Engineering</Option>
                                <Option value="Design & Creative">Design & Creative</Option>
                                <Option value="Writing">Writing</Option>
                                <Option value="Translation">Translation</Option>
                                <Option value="Legal">Legal</Option>
                                <Option value="Admin Support">Admin Support</Option>
                                <Option value="Customer Service">Customer Service</Option>
                                <Option value="Sales & Marketing">Sales & Marketing</Option>
                                <Option value="Accounting & Consulting">Accounting & Consulting</Option>
                            </Select>
                            <Select className='all_type_list_select' defaultValue="Any job success" onChange={this.handler_job_success_change}>
                                <Option value="Any job success">Any job success</Option>
                                <Option value="80">80% job success</Option>
                                <Option value="90">90% job success</Option>
                            </Select>
                            <Select className='all_type_list_select' defaultValue="Any hourly rate"  onChange={this.handler_hourly_rate_change}>
                                <Option value="Any hourly rate">Any hourly rate</Option>
                                <Option value="0">$10/hr and below</Option>
                                <Option value="20">$10/hr - $30/hr</Option>
                                <Option value="40">$30/hr - $50/hr</Option>
                                <Option value="60">$50/hr - $70/hr</Option>
                            </Select>
                        </div>
                        <div>
                            {
                                this.handler_all_type_list()
                            }
                        </div>
                        <div id='all_type_pagination_box'>
                            <Pagination id='all_type_pagination' current={this.state.current} onChange={this.handler_page_change} total={this.state.page_count} />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Foot />
            </div>
        )
    }
}
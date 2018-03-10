import React, { Component } from 'react';
import { Card, Icon, Col, Row, Avatar } from 'antd';
import '../css/get_list.css';
import ajax from '../base/ajax'


export default class GetList extends React.Component {
    state = {
        loading: false,
        imgurl: '',
        list: [],
        page: 1,
        page1: '0',
        page2: '100%',
        page3: '100%',
    };



    componentDidMount() {
        this.setState({
            loading:true
        })
        ajax.get(ajax.url(ajax.ports.get_list),
            {
                'cin': this.props.developers.replace(/\&/g, "%26")
            }
        ).then((xhr) => {
            this.setState({
                list: xhr.response
            })
        }).catch((err) => {
            console.log(err)
        }).complete(() => {
            this.setState({
                loading:false
            })
        })
    }
    handler_next_page = () => {
        if (this.state.page == 3) {
            this.setState({
                page3: '100%',
                page2: '0',
                page: 2
            })
        }
        if (this.state.page == 2) {
            this.setState({
                page2: '100%',
                page1: '0',
                page: 1
            })
        }
    }

    handler_prev_page = () => {
        if (this.state.page == 1) {
            this.setState({
                page2: '0',
                page1: '-100%',
                page: 2
            })
        }
        if (this.state.page == 2) {
            this.setState({
                page2: '-100%',
                page3: '0',
                page: 3
            })
        }
    }

    handler_change_list = (e, j) => {
        let list = [];
        let num = 0;
        for (let i of e) {
            let el = (
                <Col span={6}>
                    <Card className={'get_list_con_' + j} loading={this.state.loading}>
                        <div>
                            <Avatar src={require('../img/' + i.imgurl)} className='get_list_head' />
                            <h4 className='get_list_name'>
                                {i.firstname}&emsp;
                                {i.lastname}
                            </h4>
                            <span className='get_list_main_services_type'>
                                {i.main_services_type}
                            </span>
                            <div className="get_list_hr"></div>
                            <div>
                                <span className='get_list_small_title'>
                                    Hourly Rate
                                </span>
                                <span className='get_list_hourly_box'>
                                    <span className='get_list_hourly_rate'>
                                        ${i.hourly_rate}
                                    </span>
                                    <span className='get_list_hourly_rate_hr'>
                                        /hr
                                </span>
                                </span>
                            </div>
                            <div className="get_list_hr"></div>
                            <div>
                                <span className='get_list_small_title'>
                                    Location
                                </span>
                                <span className='get_list_con_box'>
                                    {i.country}
                                </span>
                            </div>
                            <div className="get_list_hr"></div>
                            <div>
                                <span className='get_list_small_title'>
                                    Job success
                                </span>
                            </div>
                            <div className="get_list_hr"></div>
                            <div className='get_list_offer_clients_con_box'>
                                {
                                    this.handler_offer_clients_list(i.offer_clients)
                                }
                            </div>
                            <div className='get_list_view_profile_box'>
                                <p className='get_list_view_profile'>
                                    View Profile
                                </p>
                            </div>
                        </div>
                    </Card>
                </Col>
            )
            if (num < j * 4 && num >= (j - 1) * 4) {
                list.push(el)
            }
            num++
        }
        return list
    }

    handler_offer_clients_list = (e) => {
        let item = e.split(',')
        let list = [];
        for (let i of item) {
            let el = (
                <p className='get_list_offer_clients_con'>
                    &emsp;{i}&emsp;
                </p>
            )
            list.push(el)
        }
        return list
    }

    render() {
        const developers = this.props.developers
        const list = this.state.list
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <h1 id='get_list_big_title'>
                    Browse our highest-rated {this.props.developers}
                    </h1>
                <br/>
                <br/>
                <br/>
                <br/>
            <div id='get_list_box'>
                <div className='get_list_row_list_box' style={{
                    left: this.state.page1,
                    transition: 'all 1s'
                }}>
                    <Row gutter={25} id='get_list_row_list_1'>
                        {this.handler_change_list(list, 1)}
                    </Row>
                </div>
                <div className='get_list_row_list_box' style={{
                    left: this.state.page2,
                    transition: 'all 1s'
                }}>
                    <Row gutter={25} id='get_list_row_list_2'>
                        {this.handler_change_list(list, 2)}
                    </Row>
                </div>
                <div className='get_list_row_list_box' style={{
                    left: this.state.page3,
                    transition: 'all 1s'
                }}>
                    <Row gutter={25} id='get_list_row_list_3'>
                        {this.handler_change_list(list, 3)}
                    </Row>
                </div>
                <div onClick={this.handler_prev_page} id='get_list_next_button'>
                    <Icon type="right" style={{fontSize:'2em'}} />
                </div>
                <div onClick={this.handler_next_page} id='get_list_prev_button'>
                    <Icon type="left" style={{fontSize:'2em'}} />
                </div>

            </div>
            </div>
        )
    }
}
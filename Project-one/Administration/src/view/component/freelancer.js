import React, { Component } from 'react';
import { Spin, Table, Icon, Divider, Button } from 'antd';
import ajax from '../../base/ajax'

import Update from '../modal/update'
import Add from '../modal/add'

const { Column, ColumnGroup } = Table;
const ButtonGroup = Button.Group;

const data = [{
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}];

export default class Freelancer extends React.Component {
    state = {
        loading: false,
        list: [],
        update_show: false,
        ID:undefined,
        information:undefined,
        add_show:false
    }

    componentDidMount() {
        this.setState({
            loading:true
        })
        if (localStorage.getItem('ad_token')) {
            ajax.get(ajax.url(ajax.ports.freelancer),
                {
                    'access_token': JSON.stringify(localStorage.getItem('ad_token'))
                }
            ).then((xhr) => {
                console.log(xhr.response)
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
    }
    handler_update_close=()=>{
        this.setState({
            update_show:false
        })
    }
    handler_update=(value)=>{
        this.setState({
            update_show:true,
            information:value,
        })
    }
    handler_add_close=()=>{
        this.setState({
            add_show:false
        })
    }
    handler_add_open=()=>{
        this.setState({
            add_show:true
        })
    }
    render() {
        return (
            <div>
                <Spin spinning={this.state.loading}>
                <Button type="primary" onClick={this.handler_add_open} >添加</Button>
                    <Table dataSource={this.state.list}>
                        <ColumnGroup title="Name">
                            <Column
                                title="First Name"
                                dataIndex="firstname"
                                key="firstname"
                            />
                            <Column
                                title="Last Name"
                                dataIndex="lastname"
                                key="lastname"
                            />
                        </ColumnGroup>
                        <Column
                            title="main_services"
                            dataIndex="main_services"
                            key="main_services"
                        />
                        <Column
                            title="username"
                            dataIndex="username"
                            key="username"
                        />
                        <Column
                            title="country"
                            dataIndex="country"
                            key="country"
                        />
                        <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <ButtonGroup>
                                    <Button type="primary" onClick={this.handler_update.bind(this,record)} >Edit</Button>
                                    <Button type="danger">Delete</Button>
                                </ButtonGroup>
                            )}
                        />
                    </Table>
                </Spin>
                {this.state.update_show && <Update
                    show={this.state.update_show}
                    handler_update_close={this.handler_update_close}
                    information={this.state.information}
                />}
                {this.state.add_show && <Add
                    show={this.state.add_show}
                    handler_add_close={this.handler_add_close}
                />}
            </div>
        )
    }
}

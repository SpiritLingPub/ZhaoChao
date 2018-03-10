import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Route, Link } from 'react-router-dom';
// import '../css/how_it_works.css';

import Login from './component/log_in'

import Echart from './component/echarts'
import Freelancer from './component/freelancer'


const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Homepage extends React.Component {
    state = {
        collapsed: false,
        show_login: true
    };
    componentDidMount() {
        if (localStorage.getItem('ad_token')) {
            this.setState({
                show_login: false
            })
        }
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    handler_login_close = () => {
        this.setState({
            show_login: false
        })
    }
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/homepage/echart">
                                <Icon type="pie-chart" />
                                <span>echarts</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/homepage/freelancer">
                                    <Icon type="desktop" />
                                    <span>freelancer</span>
                                </Link>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                                <Breadcrumb.Item>Bill</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                <Route path="/homepage/echart" component={Echart} />
                                <Route path="/homepage/freelancer" component={Freelancer} />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2016 Created by Ant UED
                   </Footer>
                    </Layout>
                </Layout>
                {this.state.show_login && <Login
                    show={this.state.show_login}
                    handler_login_close={this.handler_login_close}
                />}
            </div>
        )
    }
}
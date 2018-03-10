import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { } from 'antd';
import '../../css/web_dev.css';

import HowItWork from '../../modular/how_it_work'
import Trusted from '../../modular/trusted'
import CreateAccount from '../../modular/create_account'
import GetList from '../../modular/get_list'

import WebDevelopers from '../../photo/developers/web_dev.png'
import MobDev from '../../photo/developers/mob_dev.png'
import Desktop from '../../photo/developers/desktop_app.png'
import Software from '../../photo/developers/software_engine.png'
import Product from '../../photo/developers/product.png'
import Qa from '../../photo/developers/qa.png'

export default class WebDev extends React.Component {
    state = {
        developers:'Web,Mobile & Software Dev',
    };
    componentDidMount() {
        localStorage.setItem('all_type_category',this.state.developers)
    }


    render() {
        return (
            <div>
                <Jumbotron id='web_dev_jumbotron'>
                    <h1 id='web_dev_jumbotron_title'>Web dev ninjas</h1>
                    <p id='web_dev_jumbotron_con'>Choose from a world of top decelopers</p>
                    <div id='web_dev_jumbotron_button'>
                        <p>
                            &emsp;&emsp;Get Strated&emsp;&emsp;
                        </p>
                    </div>
                </Jumbotron>
                <GetList
                developers={this.state.developers}
                />
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <h1 id='web_dev_in_demand_title'>
                        Some of our most in-demand pros.
                    </h1>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Link to="/all_types">
                    <div id='web_dev_in_demand_box'>
                        <div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={WebDevelopers} alt="web_dev" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>WEB DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={MobDev} alt="MobDev" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>MOBILE DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Desktop} alt="Desktop" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>DESKTOP APP DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Software} alt="Software" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>SOFTWARE ENGINEERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Product} alt="Product" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>PRODUCT MANAGERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Qa} alt="Qa" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>WEB DEVELOPERS</span>
                        </div>
                    </div>
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <HowItWork/>
                <Trusted/>
                <CreateAccount/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { } from 'antd';
import '../../css/web_dev.css';
import '../../css/mobile_dev.css'

import HowItWork from '../../modular/how_it_work'
import Trusted from '../../modular/trusted'
import CreateAccount from '../../modular/create_account'
import GetList from '../../modular/get_list'

import UxUi from '../../photo/developers/ux_ui.png'
import Ios from '../../photo/developers/ios.png'
import Android from '../../photo/developers/android.png'
import Backend from '../../photo/developers/back_end.png'
import Game from '../../photo/developers/game.png'
import Agencies from '../../photo/developers/agenciens.png'

export default class MobileDev extends React.Component {
    state = {
        developers:'Web,Mobile & Software Dev',
    };


    render() {
        const Jumbotron_box={
            backgroundImage:'url(//www.upwork.com/static/marketing/adquiro-webpack/images/hero-administrative-support@1x.bc82251f7834.png)',
            height:'400px',
            backgroundRepeat:'no-repeat',
            backgroundSize:'150%',
            backgroundPositionX:'center',
            marginTop:'45px',
        }
        return (
            <div>
                <Jumbotron style={Jumbotron_box} >
                    <div id='mobile_dev_jumbotron_box'>
                        <br/>
                        <h1>
                            Mobile dev masters
                        </h1>
                        <br/>
                        <p>
                            Choose among top mobile ingineers & designers
                        </p>
                        <br/>
                        <div id='mobile_dev_jumbotron_start_box'>
                            <p>
                                Get Started
                            </p>
                        </div>
                    </div>
                </Jumbotron>

                <GetList
                developers={this.state.developers}
                />

                <div>
                    <br />
                    <br />
                    <br />
                    <h1 id='web_dev_in_demand_title'>
                        Some of our most in-demand pros.
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div id='web_dev_in_demand_box'>
                        <div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={UxUi} alt="UxUi" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>MOBILE UX/UI DESIGNERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Ios} alt="Ios" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>IOS DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Android} alt="Android" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>ANDROID DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Backend} alt="Backend" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>BACKEND MOBILE DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Game} alt="Game" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>GAME DEVELOPERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Agencies} alt="Agencies" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>MOBILE DEVELOPMENT AGENCIES</span>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
                <HowItWork />
                <Trusted />
                <CreateAccount />
            </div>
        )
    }
}
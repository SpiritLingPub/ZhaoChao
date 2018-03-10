import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { } from 'antd';
import '../../css/web_dev.css';

import HowItWork from '../../modular/how_it_work'
import Trusted from '../../modular/trusted'
import CreateAccount from '../../modular/create_account'
import GetList from '../../modular/get_list'

import Graphic from '../../photo/developers/graphic.png'
import UxUiDesigner from '../../photo/developers/ux_ui_designer.png'
import WebDesigner from '../../photo/developers/web_designer.png'
import D3 from '../../photo/developers/3d.png'
import Illustrators from '../../photo/developers/illustrators.png'
import Video from '../../photo/developers/video.png'

export default class Design extends React.Component {
    state = {
        developers:'Web,Mobile & Software Dev',
    };

    render() {
        const Jumbotron_box={
            backgroundImage:'url(//www.upwork.com/static/marketing/adquiro-webpack/images/design-abstract-desktop.5e15e5e112f0.jpg )',
            height:'500px',
            backgroundRepeat:'no-repeat',
            backgroundSize:'150%',
            backgroundPositionX:'center',
            marginTop:'45px',
        }
        return (
            <div>
                <Jumbotron style={Jumbotron_box}>
                    <h1 id='web_dev_jumbotron_title'>Design rockstars</h1>
                    <p id='web_dev_jumbotron_con'>Find top designers and creatives</p>
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
                    <div id='web_dev_in_demand_box'>
                        <div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Graphic} alt="Graphic" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>GRAPHIC DESIGNERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={UxUiDesigner} alt="UxUiDesigner" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>UX/UI DESIGNERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={WebDesigner} alt="WebDesigner" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>WEB DESIGNERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={D3} alt="D3" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>3D MODELERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Illustrators} alt="Illustrators" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>ILLUSTRATORS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Video} alt="Video" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>VIDEO PRODUCERS</span>
                        </div>
                    </div>
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
import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { } from 'antd';
import '../../css/web_dev.css';

import HowItWork from '../../modular/how_it_work'
import Trusted from '../../modular/trusted'
import CreateAccount from '../../modular/create_account'
import GetList from '../../modular/get_list'

import Blog from '../../photo/developers/blog.png'
import ContentWriter from '../../photo/developers/content_writer.png'
import Technical from '../../photo/developers/technical.png'
import Creative from '../../photo/developers/creative.png'
import CopyWriter from '../../photo/developers/copywriter.png'
import Editors from '../../photo/developers/editors.png'

export default class Design extends React.Component {
    state = {
        developers:'Web,Mobile & Software Dev',
    };

    render() {
        const Jumbotron_box={
            backgroundImage:'url(//www.upwork.com/static/marketing/adquiro-webpack/images/writing-abstract-desktop.74110f09acfa.jpg )',
            height:'500px',
            backgroundRepeat:'no-repeat',
            backgroundSize:'150%',
            backgroundPositionX:'center',
            marginTop:'45px',
        }
        return (
            <div>
                <Jumbotron style={Jumbotron_box}>
                    <h1 id='web_dev_jumbotron_title'>Writing wizards</h1>
                    <p id='web_dev_jumbotron_con'>Find talented writers and editors</p>
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
                            <img className="web_dev_img" src={Blog} alt="Blog" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>BLOG & ARTICLE WEITERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={ContentWriter} alt="ContentWriter" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>WEB CONTENT WRITERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Technical} alt="Technical" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>TECHNICAL WEITERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Creative} alt="Creative" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>CREATIVE WRITERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={CopyWriter} alt="CopyWriter" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>COPYWRITERS</span>
                        </div><div className='web_dev_in_demand_con_box'>
                            <img className="web_dev_img" src={Editors} alt="Editors" />
                            <div className='web_dev_line'></div>
                            <span className='web_dev_con'>EDITORS</span>
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
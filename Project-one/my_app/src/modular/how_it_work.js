import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/how_it_work.css'

import Find from '../photo/how_it_work/find.png';
import Pay from '../photo/how_it_work/pay.png';
import Hire from '../photo/how_it_work/hire.png';
import Work from '../photo/how_it_work/work.png';

export default class HowWork extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
            <br />
            <br />
            <br />
            <br />
            <h1 id='how_work_h1'>
            How it works
                </h1>
            <br />
            <br />
            <br />
            <br />
            <Grid fluid={true}>
                <Row>
                    <Col xs={6} md={3}>
                        <div className='how_work_box'>
                            <img id='find' className="how_work_img" src={Find} alt="type_web" />
                            <div className='how_work_line'></div>
                            <span className='how_work_h'>FIND</span>
                            <span className='how_work_con'>Post a job to tell us about your project. We'll quickly match you with the right freelancers.</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                    <div className='how_work_box'>
                            <img id='hire' className="how_work_img" src={Hire} alt="type_web" />
                            <div className='how_work_line'></div>
                            <span className='how_work_h'>HIRE</span>
                            <span className='how_work_con'>Browse profiles, reviews, and proposals then interview top candidates. Hire a favorite and begin your project.</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                    <div className='how_work_box'>
                            <img id='work' className="how_work_img" src={Work} alt="type_web" />
                            <div className='how_work_line'></div>
                            <span className='how_work_h'>WORK</span>
                            <span className='how_work_con'>Use the Upwork platform to chat, share files, and collaborate from your desktop or on the go.</span>
                        </div>
                    </Col>
                    <Col xs={6} md={3}>
                    <div className='how_work_box'>
                            <img id='pay' className="how_work_img" src={Pay} alt="type_web" />
                            <div className='how_work_line'></div>
                            <span className='how_work_h'>PAY</span>
                            <span className='how_work_con'>Invoicing and payments happen through Upwork. With Upwork Protection, only pay for work you authorize.</span>
                        </div>
                    </Col>
                </Row>
            </Grid>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}
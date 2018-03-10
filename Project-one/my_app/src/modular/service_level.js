import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/service_level.css';

import Yes from '../photo/service_level/yes.png'



export default class ServiceLevel extends React.Component {
    state = {

    };

    componentWillMount() {
        window.onscroll = () => {
            var topScroll = window.pageYOffset;
            var service_level_fixed = document.getElementById("service_level_fixed");
            if (topScroll >= 2450 && topScroll <= 3380) {
                service_level_fixed.style.display = 'block';
                service_level_fixed.style.position = 'fixed';
                service_level_fixed.style.top = '0';
            } else {
                service_level_fixed.style.display = 'none';
            }
        }
    }

    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1 id='type_list_h1'>
                    Find the level of service that works for you
                </h1>
                <br />
                <br />
                <br />
                <br />
                <Table striped bordered condensed id='service_level_table'>
                    <thead>
                        <tr>
                            <th className='service_level_box' id='service_level_box_0'>
                                <p className='service_level_title' id="service_level_title1">
                                    Each option includes access to Upwork's large pool of top-quality freelancers.
                        </p>
                                <p className='service_level_title' id="service_level_title2">
                                    Choose the level of service you need.
                        </p>
                            </th>
                            <th className='service_level_box' id='service_level_box_1'>
                                <h2 className='service_level_big'>
                                    Upwork
                            </h2>
                                <p className='service_levrl_small'>
                                    Professional freelancers and the essentials to find them.
                            </p>
                                <div className='service_level_con_box'>
                                    <p className='service_level_con'>
                                        2.75% fee on the transaction amount
                                </p>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                                    </p>
                                    </div>
                                </div>
                            </th>
                            <th className='service_level_box' id='service_level_box_2'>
                                <h2 className='service_level_big'>
                                    Upwork Pro
                    </h2>
                                <p className='service_levrl_small'>
                                    Dedicated support and handpicked talent for your job.
                    </p>
                                <div className='service_level_con_box'>
                                    <p className='service_level_con'>
                                        $500 fee for each search + 12.75% fee on project amount
                        </p>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                            </p>
                                    </div>
                                </div>
                            </th>
                            <th className='service_level_box' id='service_level_box_3'>
                                <h2 className='service_level_big'>
                                    Upwork Enterprise
                    </h2>
                                <p className='service_levrl_small'>
                                    Technology and services customized to fit a company's needs.
                    </p>
                                <div className='service_level_con_box'>
                                    <p className='service_level_con'>
                                        Price varies - contact us for a demo
                        </p>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                            </p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                        <tr id='service_level_fixed'>
                            <th className='service_level_box service_level_fixed_box'>
                            </th>
                            <th className='service_level_box service_level_fixed_box'>
                                <div className='service_level_con_box'>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                                    </p>
                                    </div>
                                </div>
                            </th>
                            <th className='service_level_box service_level_fixed_box'>
                                <div className='service_level_con_box'>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                            </p>
                                    </div>
                                </div>
                            </th>
                            <th className='service_level_box service_level_fixed_box'>
                                <div className='service_level_con_box'>
                                    <div className="service_level_button_box">
                                        <p className='service_level_button'>
                                            Sign Up for Free
                            </p>
                                    </div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Verified freelancer work history, feedback, and more
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Instant match with the right freelancers
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Built-in collaboration features and easy payment
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Upwork Payment Protection Plan
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Premium freelancers curated by Upwork
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Job post and talent search assistance
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Ability to pre-fund account
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Consolidated invoicing and billing
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Custom portal and contract management
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Worker classification compliance services
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Custom reporting
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='service_level_lefttitle'>
                                    Dedicated account management
                            </p>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>
                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                </div>

                            </td>
                            <td>
                                <div className='server_level_yes_box'>
                                    <img id='yes' className="service_level_yes" src={Yes} alt="yes" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/type_list.css'

import TypeWeb from '../photo/typelist/web_dev.png';
import Accountants from '../photo/typelist/accountants.png';
import Customer from '../photo/typelist/customer.png';
import Designers from '../photo/typelist/designers.png';
import MobDex from '../photo/typelist/mob_dev.png';
import Sales from '../photo/typelist/sales.png';
import Vietual from '../photo/typelist/vietual.png';
import Writers from '../photo/typelist/writers.png';

export default class TypeList extends React.Component {
    state = {

    };
    render() {
        return (
            <div>
                <br />
                <br />
                <br />
                <br />
                <h1 id='type_list_h1'>
                Work with someone perfect for your team
                    </h1>
                <br />
                <br />
                <br />
                <br />
                <Table bordered className='type_list_table'>
                    <tbody>
                        <tr>
                            <td className='type_list_td' id='type_list_td_1'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_1' className="type_list_before">
                                        <img id='type_web' className="type_list_img" src={TypeWeb} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>WEB DEVELOPERS</span>
                                    </div>
                                    <div id='type_list_after_1' className="type_list_after">
                                        <span className="type_list_after_con">
                                            FRONT-END DEVELOPERS
                                    <br />
                                            BACK-END DEVELOPERS
                                    <br />
                                            SOFTWARE PROGRAMMERS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_2'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_2' className="type_list_before">
                                        <img id='mob_dev' className="type_list_img" src={MobDex} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Mobile developers</span>
                                    </div>
                                    <div id='type_list_after_2' className="type_list_after">
                                        <span className="type_list_after_con">
                                        OS APP DEVELOPERS
                                    <br />
                                    ANDROID DEVELOPERS
                                    <br />
                                    UI/UX DESIGNERS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_3'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_3' className="type_list_before">
                                        <img id='designers' className="type_list_img" src={Designers} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Designers  Creatives</span>
                                    </div>
                                    <div id='type_list_after_3' className="type_list_after">
                                        <span className="type_list_after_con">
                                        GRAPHIC DESIGNERS
                                    <br />
                                    UI/UX DESIGNERS
                                    <br />
                                    MOTION GRAPHICS EXPERTS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_4'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_4' className="type_list_before">
                                        <img id='writers' className="type_list_img" src={Writers} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Writers</span>
                                    </div>
                                    <div id='type_list_after_4' className="type_list_after">
                                        <span className="type_list_after_con">
                                        BLOG WRITERS
                                    <br />
                                    CONTENT WRITERS
                                    <br />
                                    COPYWRITERS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                        <td className='type_list_td' id='type_list_td_5'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_5' className="type_list_before">
                                        <img id='virtual' className="type_list_img" src={Vietual} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Virtual assistants</span>
                                    </div>
                                    <div id='type_list_after_5' className="type_list_after">
                                        <span className="type_list_after_con">
                                        PERSONAL ASSISTANTS
                                    <br />
                                    TRANSCRIPTIONISTS
                                    <br />
                                    WEB RESEARCHERS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_6'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_6' className="type_list_before">
                                        <img id='customer' className="type_list_img" src={Customer} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Customer service agents</span>
                                    </div>
                                    <div id='type_list_after_6' className="type_list_after">
                                        <span className="type_list_after_con">
                                        PHONE SUPPORT SPECIALISTS
                                    <br />
                                    EMAIL SUPPORT EXPERTS
                                    <br />
                                    LIVE CHAT SUPPORT PROS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_7'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_7' className="type_list_before">
                                        <img id='sales' className="type_list_img" src={Sales} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Sales & marketing experts</span>
                                    </div>
                                    <div id='type_list_after_7' className="type_list_after">
                                        <span className="type_list_after_con">
                                        SEO SPECIALISTS
                                    <br />
                                    EMAIL AUTOMATORS
                                    <br />
                                    MARKETING EXPERTS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                            <td className='type_list_td' id='type_list_td_8'>
                                <div className='type_list_box'>
                                    <div id='type_list_before_8' className="type_list_before">
                                        <img id='accountants' className="type_list_img" src={Accountants} alt="type_web" />
                                        <div className='type_list_line'></div>
                                        <span className='type_list_con'>Accountants & consultants</span>
                                    </div>
                                    <div id='type_list_after_8' className="type_list_after">
                                        <span className="type_list_after_con">
                                        TAX ACCOUNTANTS
                                    <br />
                                    BOOKKEEPERS
                                    <br />
                                    FINANCIAL MODELERS
                                    <br />
                                            <br />
                                            <br />
                                            and more...
                            </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                <br />
                <br />
                <br />
                <br />
                <div id='type_list_all'>
                    See All Categories
                </div>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}
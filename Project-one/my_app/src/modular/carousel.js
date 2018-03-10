import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/carousel.css';

export default class Arousel extends React.Component {
    state = {

    };

    getInitialState = () => {
        return {
            index: 0,
            direction: null
        };
    };

    handleSelect = (selectedIndex, e) => {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    };

    render() {
        return (
            <div>
                <br />
                <br />
                <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                    <Carousel.Item>
                        <div className='carousel_box'>
                            <div className='carousel_con_box'>
                                <h1 className='carousel_title'>
                                    We accomplish more, for a lot less.
                            </h1>
                                <p className='carousel_con'>
                                    Patrick Cournoyer
                            <br />
                                    VP of People @ Flightcar
                            </p>
                                <div className='carousel_button'>
                                    See More Stories
                            </div>
                            </div>
                            <div id='carousel_img_1' className='carousel_img'></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel_box'>
                            <div className='carousel_con_box'>
                                <h1 className='carousel_title'>
                                    We accomplish more, for a lot less.
                                </h1>
                                <p className='carousel_con'>
                                    Patrick Cournoyer
                                    <br />
                                    VP of People @ Flightcar
                                </p>
                                <div className='carousel_button'>
                                    See More Stories
                        </div>
                            </div>
                            <div id='carousel_img_2' className='carousel_img'></div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='carousel_box'>
                            <div className='carousel_con_box'>
                                <h1 className='carousel_title'>
                                    We accomplish more, for a lot less.
                        </h1>
                                <p className='carousel_con'>
                                    Patrick Cournoyer
                        <br />
                                    VP of People @ Flightcar
                        </p>
                                <div className='carousel_button'>
                                    See More Stories
                        </div>
                            </div>
                            <div id='carousel_img_3' className='carousel_img'></div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}
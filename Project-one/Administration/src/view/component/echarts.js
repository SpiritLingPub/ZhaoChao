import React, { Component } from 'react';
import { } from 'antd';
import echarts from 'echarts'
import ajax from '../../base/ajax'

export default class LogInModal extends React.Component {
    state = {
        echarts_list: [],
    }
    componentDidMount() {
        console.log(localStorage.getItem('ad_token'))
        if (localStorage.getItem('ad_token')) {
            ajax.get(ajax.url(ajax.ports.get_echart),
                {
                    'access_token': JSON.stringify(localStorage.getItem('ad_token'))
                }
            ).then((xhr) => {
                console.log(xhr.response)
                this.setState({
                    echarts_list: xhr.response.result
                });
                this.handler_echarts()
            }).catch((err) => {
                console.log(err)
            }).complete(() => {
                this.setState({
                    loading: false
                })
            })
        }




    }
    handler_echarts = () => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main_echarts'));
        // 绘制图表
        myChart.setOption({
            backgroundColor: '#2c343c',

            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: this.state.echarts_list.sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        });
    }
    render() {
        return (
            <div id='main_echarts' style={{ width: 400, height: 400 }}>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { Select } from 'antd';
const Option = Select.Option;



export default class AllCountry extends React.Component {
    state = {
        
    };

    render() {
        return (
            <Select defaultValue="中国" style={{ width: 120 }} onChange={this.props.handler_country}>
                <Option value="中国">中国</Option>
                            
                <Option value="伊朗">伊朗</Option>
            
                <Option value="哥斯达黎加">哥斯达黎加</Option>
            
                <Option value="厄立特里亚">厄立特里亚</Option>
            
                <Option value="古巴">古巴</Option>
            
                <Option value="多米尼加共和国">多米尼加共和国</Option>
            
                <Option value="墨西哥">墨西哥</Option>
            
                <Option value="尼加拉瓜">尼加拉瓜</Option>
            
                <Option value="巴拿马">巴拿马</Option>
            
                <Option value="荷属安地列斯群岛">荷属安地列斯群岛</Option>
            
                <Option value="萨尔瓦多">萨尔瓦多</Option>
            
                <Option value="英属维尔京群岛">英属维尔京群岛</Option>
            
                <Option value="波多黎各">波多黎各</Option>
            
                <Option value="美属维尔京群岛">美属维尔京群岛</Option>
            
                <Option value="圣多美和普林西比">圣多美和普林西比</Option>
            
                <Option value="安圭拉(英)">安圭拉(英)</Option>
            
                <Option value="圣卢西亚">圣卢西亚</Option>
            
                <Option value="圣文森特和格纳丁斯">圣文森特和格纳丁斯</Option>
            
                <Option value="荷属安德列斯">荷属安德列斯</Option>
            
                <Option value="瓜德罗普">瓜德罗普</Option>
            
                <Option value="洪都拉斯">洪都拉斯</Option>
            
                <Option value="危地马拉">危地马拉</Option>
            
                <Option value="格鲁吉亚">格鲁吉亚</Option>
            
                <Option value="亚美尼亚">亚美尼亚</Option>
            
                <Option value="阿塞拜疆">阿塞拜疆</Option>
            
                <Option value="安哥拉">安哥拉</Option>
            
                <Option value="白俄罗斯">白俄罗斯</Option>
            
                <Option value="俄罗斯联邦">俄罗斯联邦</Option>
            
                <Option value="乌克兰">乌克兰</Option>
            
                <Option value="欧洲其他国家(地区)">欧洲其他国家(地区)</Option>
            
                <Option value="匈牙利">匈牙利</Option>
            
                <Option value="冰岛">冰岛</Option>
            
                <Option value="马耳他">马耳他</Option>
            
                <Option value="摩纳哥">摩纳哥</Option>
            
                <Option value="挪威">挪威</Option>
            
                <Option value="罗马尼亚">罗马尼亚</Option>
            
                <Option value="利比亚">利比亚</Option>
            
                <Option value="圣马力诺">圣马力诺</Option>
            
                <Option value="瑞典">瑞典</Option>
            
                <Option value="瑞士">瑞士</Option>
            
                <Option value="爱沙尼亚">爱沙尼亚</Option>
            
                <Option value="拉脱维亚">拉脱维亚</Option>
            
                <Option value="立陶宛">立陶宛</Option>
            
                <Option value="摩尔多瓦">摩尔多瓦</Option>
            
                <Option value="土耳其">土耳其</Option>
            
                <Option value="斯洛文尼亚">斯洛文尼亚</Option>
            
                <Option value="捷克共和国">捷克共和国</Option>
            </Select>
        )
    }
}
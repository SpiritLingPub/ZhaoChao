import React, { Component } from 'react';
import { Upload, Icon, message, Input, Popover, Select, Radio } from 'antd';
import { Link } from 'react-router-dom';
import '../../css/sign_sixth.css';

import SignFoot from '../../modular/sign_up/sign_up_foot'
import AddEducation from './modal/add_education'
import AddEmployment from './modal/add_employment'

const Option = Select.Option;
const RadioGroup = Radio.Group;
const { TextArea } = Input;


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
function focusing_list() {
    let list = [];
    let last = localStorage.getItem('main_services_type').split(',').reverse()[0]
    let mod= localStorage.getItem('main_services_type').split(',')
    mod.pop()
    let item = mod
    for (let i of item) {
        let el = (
            <span style={{
                fontWeight: 600
            }}>
                {i}&nbsp;
                <span style={{
                    fontWeight: 500
                }}>and&nbsp;</span>
            </span>
        )
        list.push(el)
    }
    list.push(
        <span style={{
            fontWeight: 600
        }}>
            {last}
        </span>
    )
    return list
}
function skills_list(){
    let list=[];
    let item =localStorage.getItem('offer_clients').split(',')
    for(let i of item){
        let el=(
            <div className='sign_sixth_skills_list'>
                &emsp;{item}&emsp;
                </div>
        )
        list.push(el)
    }
    return list
}

function beforeUpload(file) {
    if(file.type === 'image/jpeg' || file.type === 'image/png'){
    var isJPG=true
    }
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024  < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

export default class SignSixth extends React.Component {
    state = {
        loading: false,
        show_add_education: false,
        show_add_employment: false,
        fee:null,
        get:null,
    };

    // componentWillMount() {
    //     focusing_list()
    // }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                this.setState({
                imageUrl,
                loading: false,
            })});
            localStorage.setItem('imgurl',info.file.originFileObj.name)
            console.log(localStorage.getItem('imgurl'))
        }
    }

    handler_months_long = (e) => {
        localStorage.setItem('months_long',e.target.value)
    }

    handler_hours_week = (value) => {
        document.getElementById('sign_sixth_radio_hour').style.display = 'block'
        localStorage.setItem('hours_week',value)
    }

    handler_professional_input=(e)=>{
        localStorage.setItem('professional',e.target.value)
    }

    handler_professional_title_input=(e)=>{
        localStorage.setItem('professional_title',e.target.value)
    }

    handler_english_proficiency=(e)=>{
        localStorage.setItem('english_proficiency',e)
    }

    handler_address_one=(e)=>{
        localStorage.setItem('address_one',e.target.value)
    }

    handler_address_two=(e)=>{
        localStorage.setItem('address_two',e.target.value)
    }

    handler_postal_code=(e)=>{
        localStorage.setItem('postal_code',e.target.value)
    }

    handler_phone_number=(e)=>{
        localStorage.setItem('phone_number',e.target.value)
    }

    handler_city=(e)=>{
        localStorage.setItem('city',e.target.value)
    }

    handler_hourly_input_cin=(e)=>{
        localStorage.setItem('hourly_rate',e.target.value)
        let num=parseInt(e.target.value)
        this.setState({
            fee:num*0.2,
            get:num*0.8
        })
    }

    handler_add_education_close() {
        this.setState({
            show_add_education: false
        })
    }
    handler_add_education_open = () => {
        this.setState({
            show_add_education: true
        })
    }
    handler_add_employment_close() {
        this.setState({
            show_add_employment: false
        })
    }
    handler_add_employment_open = () => {
        this.setState({
            show_add_employment: true
        })
    }


    render() {
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const content = (
            <div>
                <p>
                    A short statement describing the services you offer.
                    <br />
                    Examples:
                </p>
                <ul>
                    <li>
                        Mobile Developer
                    </li>
                    <li>
                        Ruby on Rails Programmer
                    </li>
                    <li>
                        Senior Linux System Administrator
                    </li>
                </ul>
            </div>
        )
        const content2 = (
            <div>
                <p>
                    Tips for a great overview:
                </p>
                <ul>
                    <li>
                        Describe your strengths and skills
                    </li>
                    <li>
                        Highlinght projects,accomplishments,andeducation
                    </li>
                    <li>
                        Make sure it`s error-free
                    </li>
                </ul>
            </div>
        )
        const imageUrl = this.state.imageUrl;
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
            fontWeight: 500,
        };
        return (
            <div>
                <h2 id='sign_sixth_title'>
                    Create your Profile for Consideration
                </h2>
                <div id='sign_sixth_box'>
                    <div id='sign_sixth_first_box' className='sign_sixth_little_box'>
                        <p className='sign_sixth_first_con'>
                            The information you include in your profile will largely determine whether you are approved to join our marketplace.If approved,this will become your public profile that you`ll use to market your freelance business to clients (you can edit this info and your privacy settings anytime).
                        </p>
                        <p className='sign_sixth_first_con'>
                            Looking for inspiration?Check out these strong profile examples from a write/translator,a developer,and a suctomer service agent.
                        </p>
                        <hr />
                        <h3>
                            What you`ve told us so far
                        </h3>
                        <p>
                            You want to work in <span style={{ fontWeight: 700 }}>{localStorage.getItem('main_services')}</span>
                        </p>
                        <p>
                            You are focusing in{
                                focusing_list()
                            }
                        </p>
                        <div style={{
                            marginBottom:'10px'
                        }}>
                            Your skills are:{
                                skills_list()
                            }
                        </div>
                        <p>
                            Your experience level is <span style={{ fontWeight: 700 }}>{localStorage.getItem('experience_level')}</span>
                        </p>
                    </div>
                    <hr />
                    <div className='sign_sixth_little_box'>
                        <div>
                            <h3>
                                Tell us more about you
                            </h3>
                            <p className='sign_sixth_small_title'>
                                Please upload a professional portrait that clearly shows your face
                            </p>
                            <div style={{
                                position: 'relative'
                            }}>
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="http://localhost:3001/sign_up/upload"
                                    beforeUpload={beforeUpload}
                                    onChange={this.handleChange}
                                >
                                    {imageUrl ? <img src={imageUrl} alt="" /> : uploadButton}
                                </Upload>
                                <div id='sign_sixth_avatar_con'>
                                    <p>
                                        Freelancers with a friendly,professional-lokking portrait are hired 5 times more often than those without a photo
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <p className='sign_sixth_small_title'>
                                Add a professional title that describes the work you do
                            </p>
                            <p>
                                Try to choose a title that will help you stand out.
                            </p>
                            <Popover placement="right" content={content} overlayClassName=''>
                                <Input placeholder="EXAMPLES:Expert IOS Game Developer" id='sign_sixth_professional_title_input' onChange={this.handler_professional_title_input} />
                            </Popover>
                            <p className='sign_sixth_small_title'>
                                Write a pro fessional overview
                            </p>
                            <p>
                                Highlight your top skills,experience,and interests.This is one of the first things clients will see on your profile.
                            </p>
                            <Popover placement="right" content={content2} overlayClassName=''>
                                <TextArea rows={6} id='sign_sixth_professional_input' placeholder="Use this space to show clients you have the skills and experience thry`re looking for."  onChange={this.handler_professional_input} />
                            </Popover>
                            <p onClick={this.handler_add_education_open} className='sign_sixth_small_title'>
                                Education
                            </p>
                            <p>
                                Tell us about your education history
                            </p>
                            <div>
                                {/*用来放置教育背景的内容*/}
                            </div>
                            <p onClick={this.handler_add_employment_open} className='sign_sixth_small_title'>
                                Employment History
                            </p>
                            <p
                                style={{
                                    width: '70%'
                                }}
                            >
                                Write about previous positions,companies,and the number of years you`ve worked,plus highlight relevant projects and accomplishments.Include work where you erer self-employed as a freelancer.
                                </p>
                            <div>
                                {/* 用来放置工作经历的内容 */}
                            </div>
                            <p className='sign_sixth_small_title'>
                                What your English proficiency?
                                </p>
                            <Select
                                showSearch
                                style={{ width: 360 }}
                                placeholder="Select your proficiency"
                                optionFilterProp="children"
                                onChange={this.handler_english_proficiency}
                                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                id='sign_sixth_english_proficiency'
                            >

                                <Option value="Basic">Basic</Option>
                                <Option value="Conversational">Conversational</Option>
                                <Option value="Fluent">Fluent</Option>
                                <Option value="Native">Native</Option>

                            </Select>
                        </div>
                    </div>
                    <hr />
                    <div className='sign_sixth_little_box'>
                        <div id='sign_sixth_money_box'>
                            <h3>
                                Set your Hourly Rate
                            </h3>
                            <span className='sign_sixth_hourly_con'>
                                Your profile rate:$0.00/hr
                        </span>
                            <hr />
                            <div className='sign_sixth_hourly_con_box'>
                                <h4>
                                    Hourly Rate
                                </h4>
                                <p>
                                    Total amount the client will see
                                </p>
                            </div>
                            <div className='sign_sixth_hourly_icon_box'>
                                <span className='sign_sixth_icon'>
                                    $
                                </span>
                                &emsp;
                                <Input className='sign_sixth_hourly_input' id='sign_sixth_hourly_input_cin' onChange={this.handler_hourly_input_cin} />
                                &emsp;
                                <span>
                                    /hr
                                </span>
                            </div>
                            <hr />
                            <div className='sign_sixth_hourly_con_box'>
                                <h4>
                                    20% Upwork Service Fee
                                </h4>
                            </div>
                            <div className='sign_sixth_hourly_icon_box'>
                                <span className='sign_sixth_icon'>
                                    $
                                </span>
                                &emsp;
                                <Input className='sign_sixth_hourly_input' value={this.state.fee} />
                                &emsp;
                                <span>
                                    /hr
                                </span>
                            </div>
                            <hr />
                            <div className='sign_sixth_hourly_con_box'>
                                <h4>
                                    You`ll be paid
                                </h4>
                                <p>
                                    The estimates amount you`ll receive after service fees:
                                </p>
                            </div>
                            <div className='sign_sixth_hourly_icon_box'>
                                <span className='sign_sixth_icon'>
                                    $
                                </span>
                                &emsp;
                                <Input className='sign_sixth_hourly_input' value={this.state.get} />
                                &emsp;
                                <span>
                                    /hr
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='sign_sixth_little_box'>
                        <h3>
                            Add your availability and location
                        </h3>
                        <p className='sign_sixth_small_title'>
                            How many hours do you have available for work each week?
                        </p>
                        <p>
                            Don`t worry,you can always update this later.
                        </p>
                        <Select
                            showSearch
                            style={{ width: 300, marginTop: '10px', marginBottom: '30px' }}
                            placeholder="Please select..."
                            optionFilterProp="children"
                            onChange={this.handler_hours_week}
                            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            id='sign_sixth_english_proficiency'
                        >
                            <Option value="30+">More than 30 hrs/weel</Option>
                            <Option value="30-">less than 30 hrs/weel</Option>
                            <Option value="other">As Needed</Option>

                        </Select>
                        <div id='sign_sixth_radio_hour' style={{
                            display: 'none'
                        }}>
                            <p>
                                What type of projects are you interested in?
                            </p>
                            <p>
                                Don`t worry,your selection won`t affect how or when we display your profile to clients.
                            </p>
                            <RadioGroup onChange={this.handler_months_long}>
                                <Radio style={radioStyle} value={'longer'}>Longer-term projects 3+ months long</Radio>
                                <Radio style={radioStyle} value={'shorter'}>Short-term projects &lt;3 months long</Radio>
                                <Radio style={radioStyle} value={'both'}>Both longer and shorter-term projects</Radio>
                            </RadioGroup>
                        </div>
                        <p className='sign_sixth_small_title'>
                            Country
                        </p>
                        <Input disabled={true} value='China' className='sign_sixth_location_input' />
                        <p style={{
                            marginTop: '30px'
                        }}>
                            We take your privacy seriously.Only your city and country will be shared with clients.
                        </p>
                        <p className='sign_sixth_small_title'>
                            Address
                        </p>
                        <Input className='sign_sixth_location_input' onChange={this.handler_address_one} />
                        <Input className='sign_sixth_location_input' onChange={this.handler_address_two} />
                        <p className='sign_sixth_small_title'>
                            City
                        </p>
                        <Input style={{
                            width: '20%'
                        }} onChange={this.handler_city} />
                        <br />
                        <br />
                        <p className='sign_sixth_small_title'>
                            Psotal Code
                        </p>
                        <br />
                        <Input style={{
                            width: '15%'
                        }} onChange={this.handler_postal_code} />
                        <br />
                        <br />
                        <p className='sign_sixth_small_title'>
                            Phone number
                        </p>
                        <br />
                        <Input style={{
                            width: '15%'
                        }} onChange={this.handler_phone_number} />
                        <br />
                        <br />
                    </div>
                    <hr />
                    <div className='sign_sixth_little_box'>
                        <br />
                        <p>
                            See what your profile will look like to prospective clients if your application to join is approved.
                        </p>
                        <br />
                        <Link to="/sign_up/sign_up_seventh">
                            <div id='sign_sixth_review_box' onClick={this.handler_next}>
                                <p>
                                    Review Application & Submit
                            </p>
                            </div>
                        </Link>
                        <br />
                        <br />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* 添加教育背景模块 */}
                {
                    this.state.show_add_education && <AddEducation
                        show={this.state.show_add_education}
                        handler_add_education_close={this.handler_add_education_close.bind(this)}
                    />
                }
                {/* 添加工作经历 */}
                {
                    this.state.show_add_employment && <AddEmployment
                        show={this.state.show_add_employment}
                        handler_add_employment_close={this.handler_add_employment_close.bind(this)}
                    />
                }
                <SignFoot />
            </div>
        )
    }
}
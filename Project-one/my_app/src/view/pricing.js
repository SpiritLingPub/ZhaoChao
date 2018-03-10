import React, { Component } from 'react';
import { Jumbotron, Button, Navbar, FormGroup, FormControl } from 'react-bootstrap';
import { Collapse } from 'antd';
import '../css/pricing.css';

import Navigation from '../modular/navigation'
import SecondNav from '../modular/second_nav'
import ServiceLevel from '../modular/service_level'

import PricingSurprises from '../photo/pricing/pricing_fee.png'

const Panel = Collapse.Panel;
const head1 = (
    <div>
        <h4 style={{ paddingLeft: 24 }}>
            How much will my project cost total?
        </h4>
        <p style={{ paddingLeft: 24, fontSize: 17 }}>
            Clients can post either hourly or fixed-price jobs. Describe your project in as much detail as possible and freelancers will submit a bid with their proposed cost. Most payments are subject to a standard 2.75% processing fee.
        </p>
    </div>
)
const text1 = (
    <div>
        <p style={{ paddingLeft: 24, fontSize: 17, paddingLeft: 50 }}>
            For example, if you and your freelancer agree to 40 hours of work at $25/hour, you will pay 40 hours x $25 = $1,000 * 2.75% = $1,027.50.
            <br />
            <br />
            On fixed-price projects, if you and your freelancer agree to $1,000 for the fixed-price amount, you will pay $1,000 * 2.75% = $1,027.50.
    </p>
    </div>
)
const head2 = (
    <div>
        <h4 style={{ paddingLeft: 24 }}>
            How do I pay my freelancer?
        </h4>
        <p style={{ paddingLeft: 24, fontSize: 17 }}>
            Upwork makes paying freelancers simple and secure. Choose to pay using MasterCard, Visa, American Express, Discover, or PayPal.Clients can post either hourly or fixed-price jobs. Describe your project in as much detail as possible and freelancers will submit a bid with their proposed cost. Most payments are subject to a standard 2.75% processing fee.
        </p>
    </div>
)
const text2 = (
    <div>
        <p style={{ paddingLeft: 24, fontSize: 17, paddingLeft: 50 }}>
            Upwork offers two forms of payment protection based on your project setup: pay per hour or pay a fixed price. On hourly projects, Upwork Hourly Protection offers features to ensure that clients only pay for hours worked and freelancers are paid for their time spent working. With Upwork Fixed-Price Protection, clients deposit a milestone payment into escrow before work begins. Upon receiving and approving the work, payment is released to the freelancer.
    </p>
    </div>
)
const head3 = (
    <div>
        <h4 style={{ paddingLeft: 24 }}>
            How do I know my freelancer is accurately billing for my project?
        </h4>
        <p style={{ paddingLeft: 24, fontSize: 17 }}>
            Upwork provides several methods to verify work. On hourly contracts, you can review the Work Diary, one of Upwork’s billing and invoicing systems. It records billable time and completed work by logging activity levels and taking screenshots of the freelancer’s screen (six times per hour), so you can verify billable hours.
         </p>
    </div>
)
const text3 = (
    <div>
        <p style={{ paddingLeft: 24, fontSize: 17, paddingLeft: 50 }}>
            On fixed-price jobs, you and your freelancer can agree on milestones for each project. When your freelancer completes a milestone, you review the work and release funds upon approval.
        <br />
            <br />
            You will also have Upwork Messages, a tool for real-time communication and file sharing with your freelancer to help ensure smooth delivery of your project.
    </p>
    </div>
)

export default class Pricing extends React.Component {
    state = {

    };

    render() {
        return (
            <div>
                <Navigation />
                <SecondNav />
                <Jumbotron id='pricing_jumbotron'>
                    <h1 id='pricing_jumbotron_title'>
                        Upwork Pricing
                </h1>
                    <p id='pricing_jumbotron_con'>
                        As a client, there’s no charge to sign up on Upwork or to get quotes from freelancers. Pay only an
                    <br />
                        additional 2.75% for payment processing.
                </p>
                </Jumbotron>
                <div id='pricing_surprises'>
                    <div id='pricing_surprises_box'>
                        <h1 id='pricing_surprises_title'>No surprises</h1>
                        <p id='pricing_surprises_con'>
                            Simply pay the amount agreed upon with your freelancer (plus a standard 2.75% processing fee on payments). We cover our costs by collecting a percentage fee from your freelancer. If your business requires more assistance, you can choose to pay for an additional service below.
                        </p>
                    </div>
                    <img id='pricing_surprises_img' src={PricingSurprises} alt="PricingSurprises" />
                </div>
                <ServiceLevel />
                <div id='pricing_collapse_box'>
                <h1 id='pricing_collapse_title'>
                FAQ
                </h1>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                    <hr/>
                        <Panel header={head1} key="1">
                            {text1}
                        </Panel>
                        <Panel header={head2} key="2">
                            {text2}
                        </Panel>
                        <Panel header={head3} key="3">
                            {text3}
                        </Panel>
                        <h4 style={{ paddingLeft: 62 }}>
                            What is Upwork Pro?
                        </h4>
                        <p style={{ paddingLeft: 62, fontSize: 17 }}>
                            Upwork Pro is a premium talent sourcing service that matches businesses with hand-picked talent for critical projects. With Upwork Pro, you save time searching because Upwork reviews proposals for you and only connects you to highly experienced and interested freelancers. You also get dedicated customer support to help with questions on your Pro engagement.
                        </p>
                        <hr />
                        <h4 style={{ paddingLeft: 62 }}>
                            What is Upwork Enterprise?
                        </h4>
                        <p style={{ paddingLeft: 62, fontSize: 17 }}>
                            Upwork Enterprise combines technology with talent sourcing and compliance services. You can support your in-house team with direct access to pre-vetted developers, designers, writers, translators, analysts, and more. Our comprehensive compliance services are also available to classify your freelance engagements and protect you from misclassification risk.
                         </p>
                        <hr />
                    </Collapse>
                </div>
            </div>
        )
    }
}
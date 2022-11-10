import "./Body.css";

import React from 'react'

const Body = () => {
    return (
        <div className="body-wrap">
            <div className="row-one">
                <img className="image" src={require('../../images/spongebob.jpg')} alt="" />
                <img className="image" src={require('../../images/gary.jpg')} alt="" />
                <div className="row-one-blurb">
                    <img className="row-one-blurb-quotes" src={require('../../images/quotes.png')} alt="" />
                    <p className="row-one-txt-blue-one">WITH IMAGINATION, YOU CAN</p>
                    <p className="row-one-txt-blue-two">BE ANYTHING YOU WANT.</p>
                    <p className="row-one-txt-orange">SPONGEBOB</p>
                </div>
            </div>
            <div className="row-two">
                <img className="image" src={require('../../images/patrick.jpg')} alt="" />
                <img className="image" src={require('../../images/sandy.jpg')} alt="" />
                <div className="row-two-blurb">
                    <h4 className="row-two-squidward-txt">S&nbsp;Q&nbsp;U&nbsp;I&nbsp;D&nbsp;W&nbsp;A&nbsp;R&nbsp;D</h4>
                    <p className="row-two-patrick-txt">T&nbsp;O&nbsp;&nbsp;&nbsp;&nbsp;P&nbsp;A&nbsp;T&nbsp;R&nbsp;I&nbsp;C&nbsp;K&nbsp;&nbsp;&nbsp;&nbsp;S&nbsp;T&nbsp;A&nbsp;R</p>
                    <div className="row-two-blurb-question">
                        <p className="row-two-blurb-q">Q:&nbsp;</p>
                        <p className="row-two-blurb-question-txt">Why is your suitcase full of rocks??</p>
                    </div>
                    <div className="row-two-blurb-answer">
                        <p className="row-two-blurb-a">A:&nbsp;</p>
                        <p className="row-two-blurb-answer-txt">I don't tell you how to live YOUR life.</p>
                    </div>
                </div>
            </div>
            <div className="row-three">
                <div className="row-three-blurb">
                    <img className="row-three-blurb-quotes" src={require('../../images/quotes.png')} alt="" />
                    <p className="row-three-txt-blue-one">A FIVE-LETTER WORD FOR HAPPINESS...</p>
                    <p className="row-three-txt-blue-two">MONEY.</p>
                    <p className="row-three-txt-orange">MR. KRABS</p>
                </div>
                <img className="image" src={require('../../images/krabs.jpg')} alt="" />
                <img className="image" src={require('../../images/plankton.jpg')} alt="" />
            </div>
            <div className="row-four">
                <img className="image" src={require('../../images/squidward.jpg')} alt="" />
                <div className="row-four-blurb">
                    <div className="row-four-blurb-header">
                        <h1>J&nbsp;O&nbsp;I&nbsp;N&nbsp;&nbsp;&nbsp;&nbsp;O&nbsp;U&nbsp;R</h1>
                        <h1>T&nbsp;E&nbsp;A&nbsp;M</h1>
                    </div>
                    <div className="row-four-blurb-txt">
                        <h4>T&nbsp;H&nbsp;I&nbsp;N&nbsp;K&nbsp;&nbsp;&nbsp;&nbsp;Y&nbsp;O&nbsp;U&nbsp;'&nbsp;V&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;G&nbsp;O&nbsp;T</h4>
                        <h4>W&nbsp;H&nbsp;A&nbsp;T&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;T&nbsp;&nbsp;&nbsp;&nbsp;T&nbsp;A&nbsp;K&nbsp;E&nbsp;S&nbsp;?</h4>
                    </div>
                    <img className="logo" src={require('../../images/logo.png')} alt="" />
                </div>
                <div className="row-four-blank"></div>
            </div>
        </div>
    )
}

export default Body

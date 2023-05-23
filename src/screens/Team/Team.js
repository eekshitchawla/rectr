// import React from "react";
import "../Team/Team.css";
import avatar from "../../assets/avatar.png";
import tri from "../../assets/msgTriangle.png";
import mail from "../../assets/mailBlack.png";
import insta from "../../assets/instaPic.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useState } from 'react';

const Team = () => {

    const [isClickedFaq, setClickedFaq] = useState(false);
    const [isClickedHost, setClickedHost] = useState(false);

    const handleFaq = () => {
        setClickedFaq(!isClickedFaq);
    };
    const handleHost = () => {
        setClickedHost(!isClickedHost)
    }
    const members = [
        { key: 1, memName: "SreSanjai1", designation: "Owner", picUrl: avatar },
        { key: 2, memName: "SreSanjai2", designation: "Manager", picUrl: avatar },
        { key: 3, memName: "SreSanjai3", designation: "Developer", picUrl: avatar },
        { key: 4, memName: "SreSanjai4", designation: "Owner", picUrl: avatar },
        { key: 5, memName: "SreSanjai5", designation: "Manager", picUrl: avatar },
        { key: 6, memName: "SreSanjai6", designation: "Developer", picUrl: avatar },
        { key: 7, memName: "SreSanjai7", designation: "Developer", picUrl: avatar },
    ];

    const memberCards = members.map((member) => (

        <div key={member.key} //id="glassCardContainer">
            className={`glassCardContainer${isClickedFaq ? "active" : ""}`}>
            <div className="glassCard" id="glassCard">
                <img id="avatar" src={member.picUrl} alt="avatar" />
                <div id="nameInCard">
                    <strong>{member.memName}</strong>
                </div>
                <div id="designationInCard">{member.designation}</div>
            </div>
        </div>
    ));

    return (
        <div id="teamPageCard">
            <div id="memberCardsContainer">
                <Slider
                    centerPadding="0"
                    arrows={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite
                    pauseOnHover={false}
                    cssEase="linear"
                    autoplay
                    autoplaySpeed={5000}
                >
                    {memberCards}
                </Slider>
            </div>
            <footer id="footerContainer">
                <div id="footer">
                    <div id="faqContainer">
                        <div id="faq">FAQ</div>
                        <div id="dropUps">
                            <div id="dropUp" onClick={handleFaq}>
                                {isClickedFaq ? <div id="msgFaq" >Message displayed!</div> : null}
                                <div id="dropUpContent"> How to use? <img id={isClickedFaq ? "triTurn" : "tri"} src={tri} alt="" /></div>
                            </div>
                            <div id="dropUp" onClick={handleHost}>
                                {isClickedHost ? <span id="msgFaq" >Message displayed!</span> : null}
                                <div id="dropUpContent"> Host your Property! <img id={isClickedHost ? "triTurn" : "tri"} src={tri} alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div id="reachUs">
                        <div id="reach">REACH US</div>
                        <div id="imgsLink">
                            <div id="mailCont">
                                <img id="reachImg" src={mail} alt="" />
                                <u>
                                    <a id="link" href="http://localhost:3000/">Happy to Hear</a>
                                </u>

                            </div>
                            <div id="instaCont">
                                <img id="reachImg" src={insta} alt="" />
                                <u>

                                    <a id="link" href="http://localhost:3000/">Happy to Hear</a>
                                </u>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Team;

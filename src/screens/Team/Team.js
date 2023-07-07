import "../Team/Team.css";
import avatar from "../../assets/avatar.png";
import tri from "../../assets/msgTriangle.png";
import mail from "../../assets/mailBlack.png";
import insta from "../../assets/instaPic.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useState } from 'react';
import { useEffect } from "react";
import teamHead from "../../assets/teamHead.png";

const Team = () => {

    const [isClickedFaq, setClickedFaq] = useState(false);
    const [isClickedHost, setClickedHost] = useState(false);
    const [carouselIdx, setCarouselIdx] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3);


    const handleFaq = () => {
        setClickedFaq(!isClickedFaq);
    };
    const handleHost = () => {
        setClickedHost(!isClickedHost)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else {
                setSlidesToShow(3);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const members = [
        { key: 1, memName: "SreSanjai", designation: "Founder and CEO", picUrl: avatar },
        { key: 2, memName: "Dhanush", designation: "Front-End", picUrl: avatar },
        { key: 3, memName: "Suresh", designation: "Social Media and Content", picUrl: avatar },
    ];

    const memberCards = members.map((member, idx) => (

        <div key={member.key} className="glassCardContainer">

            <div
                className={carouselIdx === idx ? `activeCard` : `glassCard`}
                id="glassCard">
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
            <img id="teamHead" src={teamHead} alt="" />
            <div id="memberCardsContainer">
                <Slider
                    centerPadding="50px"
                    arrows={true}
                    slidesToShow={slidesToShow}
                    slidesToScroll={1}
                    infinite
                    pauseOnHover={false}
                    cssEase="linear"
                    autoplay
                    autoplaySpeed={3000}
                    centerMode={true}
                    className="center"
                    afterChange={i => setCarouselIdx(i)}
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
                                <div id="dropUpContent"> How to use? <img id={isClickedFaq ? "triTurn" : "tri"} src={tri} alt="" /></div>
                                {isClickedFaq ? <div id="msgFaq" >Download the app from play store ( Launching Soon).

                                    Search the desired Rental house you prefer from filters and search.Absolutely Free.

                                    Register. Scheduled-Visit. Own-it. </div> : null}
                            </div>
                            <div id="dropUp" onClick={handleHost}>
                                <div id="dropUpContent"> Host your Property! <img id={isClickedHost ? "triTurn" : "tri"} src={tri} alt="" /></div>
                                {isClickedHost ? <div id="msgFaq2" >For Now we accepting Rental house around Tamilnadu.

                                    Submit Your Property for Free <a target="_blank" style={{ fontWeight: '700' }} href="https://docs.google.com/forms/d/e/1FAIpQLSeKviYJ1VcoI8es5fANH91uZL8O0znacdgpCOuCK6jQ5a1KAQ/viewform" rel="noreferrer"> Here! </a>.</div> : null}
                            </div>
                        </div>
                    </div>
                    <div id="reachUs">
                        <div id="reach">REACH US</div>
                        <div id="imgsLink">
                            <div id="mailCont">
                                <img id="reachImg" src={mail} alt="" />
                                <u>
                                    <a id="link" href="mailto:sresanjai.founder@rectr.in">Happy to Hear</a>

                                </u>

                            </div>
                            <div id="instaCont">
                                <img id="reachImg" src={insta} alt="" />
                                <u>

                                    <a id="link" target="_blank" href="https://instagram.com/rectr.in?igshid=MzNlNGNkZWQ4Mg==" rel="noreferrer">We are Active</a>
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

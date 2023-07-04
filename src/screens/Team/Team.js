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
    const [carouselIdx, setCarouselIdx] = useState(0);

    const handleFaq = () => {
        setClickedFaq(!isClickedFaq);
    };
    const handleHost = () => {
        setClickedHost(!isClickedHost)
    }
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
            <div id="memberCardsContainer">
                <Slider
                    centerPadding="50px"
                    arrows={true}
                    slidesToShow={3}
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
                                {/* {isClickedFaq ? <div id="msgFaq" >Message displayed!</div> : null} */}
                                <div id="dropUpContent"> How to use? <img id={isClickedFaq ? "triTurn" : "tri"} src={tri} alt="" /></div>
                            </div>
                            <div id="dropUp" onClick={handleHost}>
                                {/* {isClickedHost ? <span id="msgFaq" >Message displayed!</span> : null} */}
                                <div id="dropUpContent"> Host your Property! <img id={isClickedHost ? "triTurn" : "tri"} src={tri} alt="" /></div>
                            </div>
                            <div id="msf">
                                {isClickedFaq ? <div id="msgFaq" >Download the app from play store ( Launching Soon).

                                    Search the desired Rental house you prefer from filters and search.Absolutely Free.

                                    Register. Scheduled-Visit. Own-it. </div> : null}
                                {isClickedHost ? <div id="msgFaq2" >For Now we accepting Rental house around Tamilnadu.

                                    Submit Your Property for Free Here!.</div> : null}
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

                                    <a id="link" target="_blank" href="https://instagram.com/rectr.in?igshid=MzNlNGNkZWQ4Mg==" rel="noreferrer">Happy to Hear</a>
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

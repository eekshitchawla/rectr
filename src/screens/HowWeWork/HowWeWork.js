import React, { useEffect } from "react";
import "../HowWeWork/HowWeWork.css";
import am from "../../assets/aiml.png";
import bd from "../../assets/bigData.png";
import pa from "../../assets/propAlgo.png";
import sol from "../../assets/sol.png";
import ua from "../../assets/upArrow.png";
import da from "../../assets/downArrow.png";
import sa from "../../assets/strArrow.png";

const HowWeWork = () => {

    document.addEventListener('scroll', function () {
        var elements = document.querySelectorAll('.fade-in-element');
        elements.forEach(function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('fade-in-element');
            }
        });
    });

    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    useEffect(() => {
        const cards = document.querySelectorAll(".containers");
        const observer = new IntersectionObserver((entries) =>
            entries.forEach(
                (entry, idx) => {
                    setTimeout(
                        () => {
                            entry.target.classList.toggle("show", entry.isIntersecting);
                        },
                        idx === 0 ? 300 : idx * 500
                    );
                },
                {
                    threshold: 1,
                }
            )
        );

        cards.forEach((card) => {
            observer.observe(card);
        });
    }, []);


    return (
        <div id="workPage">
            <div id="headingWork">
                <h1 id="h1Heading">How We Work?</h1>
            </div>
            <div id="imgs">
                <div className="fade-in-element">
                    <div className="containers" id="con1">
                        <div id="frame">
                            <img className="imgTag" id="bdImg" src={bd} alt="" />
                            Big Data
                        </div>
                        <div id="frame">
                            <img className="imgTag" id="amImg" src={am} alt="" />
                            AI & ML
                        </div>
                    </div>
                    <div className="containers" id="con2">
                        <img className="imgTag" id="uaImg" src={ua} alt="" />
                        <img className="imgTag" id="daImg" src={da} alt="" />
                    </div>
                    <div className="containers" id="con3">
                        <div id="frame">
                            <img className="imgTag" id="paImg" src={pa} alt="" />
                            Proprietary Algorithm
                        </div>
                    </div>
                    <div className="containers " id="con4">
                        <img className="imgTag" id="saImg" src={sa} alt="" />
                    </div>
                    <div className="containers" id="con5">
                        <div id="frame">
                            <img className="imgTag" id="solImg" src={sol} alt="" />
                            Solution
                        </div>
                    </div>
                </div>
            </div>
            <div id="cont" style={{ padding: "3vh" }}>

                We engineered our own proprietary algorithms to ensure a flawless functioning of the system.
                <br />Combining AI and Big Data to produce tailored solutions to your house searching process.
            </div>
        </div>
    );
};

export default HowWeWork;


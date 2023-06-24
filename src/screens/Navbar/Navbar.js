import React, { useEffect } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    useEffect(() => {
        let aa = document.body.getBoundingClientRect().top;
        const handleScroll = () => {
            if (document.body.getBoundingClientRect().top > aa) {
                const navbar = document.getElementById("navbarParentContainer");
                navbar.style.display = "block";
                navbar.style.animation = "bringDown 0.2s 0.2s forwards";
            } else {
                const navbar = document.getElementById("navbarParentContainer");
                navbar.style.display = "none";
                navbar.style.animation = "none";
            }
            aa = document.body.getBoundingClientRect().top;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div id="navbarParentContainer">
                <div id="navbarContainer">
                    <div id="logoContainer">
                        <div id="logoImgContainer">
                            <a href="../#landingPage">
                                <img src={logo} alt="" />
                            </a>
                        </div>
                        <div id="homeTitle">HOME</div>
                    </div>
                    <div id="listItems">
                        <button className="listOfBtns">
                            <a id="navLinks" href="../#landingPage">
                                Explore
                            </a>
                        </button>
                        <button className="listOfBtns">
                            <a id="navLinks" href="../#featuresPage">
                                Features
                            </a>
                        </button>
                        <button className="listOfBtns">
                            <a id="navLinks" href="../#workPage">
                                How It Works?
                            </a>
                        </button>
                        <button className="listOfBtns">
                            <a id="navLinks" href="../#whyUsPage">
                                Why Us?
                            </a>
                        </button>
                    </div>
                    <div id="signUpContainer">
                        <button type="submit" id="getInButton">
                            <a href="../signup">Get In</a>
                        </button>
                        <div id="theJourneyText">The Journey</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

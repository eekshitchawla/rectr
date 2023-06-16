import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png';
const Navbar = () => {

    return (
        <>
            <div id="navbarParentContainer">
                <div id="navbarContainer">
                    <div id="logoContainer">
                        <div id="logoImgContainer"><a href="../#landingPage" ><img src={logo} alt="" /></a></div>
                        <div id="homeTitle">HOME</div>
                    </div>
                    <div id="listItems">
                        <button className="listOfBtns"><a id="navLinks" href="../#landingPage" > Explore</a></button>
                        <button className="listOfBtns"><a id="navLinks" href="../#featuresPage" >Features</a></button>
                        <button className="listOfBtns"><a id="navLinks" href="../#workPage" >How It Works?</a></button>
                        <button className="listOfBtns"><a id="navLinks" href="../#whyUsPage" >Why Us?</a></button>
                    </div>
                    <div id="signUpContainer">
                        <button type="submit" id="getInButton"><a href="../signup" >Get In</a></button>
                        <div id="theJourneyText">The Journey</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

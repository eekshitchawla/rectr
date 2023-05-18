import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png';
const Navbar = () => {
    return (
        <>
            <div id="navbarParentContainer">
                <div id="navbarContainer">
                    <div id="logoContainer">
                        <div id="logoImgContainer"><img src={logo} alt="" /></div>
                        <div id="homeTitle">HOME</div>
                    </div>
                    <div id="listItems">
                        <ul>
                            <li><button><a href="../" >Explore</a></button></li>
                            <li><button><a href="../#featuresPage" >Features</a></button></li>
                            <li><button ><a href="../#workPage" >How It Works </a></button></li>
                            <li><button ><a href="../#whyUsPage" >Why Us </a></button></li>
                            <li><button >Contact Us</button></li>
                        </ul>
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

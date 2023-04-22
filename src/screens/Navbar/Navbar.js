import React from "react";
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.png';
const Navbar = () => {
    return (
        <>
            <div id="navbarParentContainer">
                <div id="navbarContainer">
                    <div id="logoContainer">
                        <div><img src={logo} alt="" /></div>
                        <div id="homeTitle">HOME</div>
                    </div>
                    <div id="listItems">
                        <ul>
                            <li><button >Explore</button></li>
                            <li><button >Features</button></li>
                            <li><button >How It Works</button></li>
                            <li><button >Why Us</button></li>
                            <li><button >Contact Us</button></li>
                        </ul>
                    </div>
                    <div id="signUpContainer">
                        <button type="submit" id="getInButton">Get In</button>
                        <div id="theJourneyText">The Journey</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

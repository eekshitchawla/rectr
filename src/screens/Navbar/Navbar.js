// import React, { useEffect } from "react";
// import "../Navbar/Navbar.css";
// import logo from "../../assets/logo.png";

// const Navbar = () => {

//     const colorIt = (val) => {
//         const textElement = document.getElementById("textToColor");
//         if (textElement) {
//             textElement.style.color = "#00B7A9";
//         }
//     };

//     useEffect(() => {
//         let aa = document.body.getBoundingClientRect().top;
//         const handleScroll = () => {
//             if (document.body.getBoundingClientRect().top > aa) {
//                 const navbar = document.getElementById("navbarParentContainer");
//                 navbar.style.display = "block";
//                 navbar.style.animation = "bringDown 0.2s 0.2s forwards";
//             } else {
//                 const navbar = document.getElementById("navbarParentContainer");
//                 navbar.style.display = "none";
//                 navbar.style.animation = "none";
//             }
//             aa = document.body.getBoundingClientRect().top;
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <>
//             <div id="navbarParentContainer">
//                 <div id="navbarContainer">
//                     <div id="logoContainer">
//                         <div id="logoImgContainer">
//                             <a href="../#landingPage">
//                                 <img src={logo} alt="" />
//                             </a>
//                         </div>
//                         <div id="homeTitle">HOME</div>
//                     </div>
//                     <div id="listItems">
//                         <button className="listOfBtns" onClick={() => colorIt('explore')}>
//                             <a id="navLinks" href="../#landingPage">
//                                 Explore
//                             </a>
//                         </button>
//                         <button className="listOfBtns" onClick={() => colorIt('features')}>
//                             <a id="navLinks" href="../#featuresPage">
//                                 Features
//                             </a>
//                         </button>
//                         <button className="listOfBtns" onClick={() => colorIt('how')}>
//                             <a id="navLinks" href="../#workPage">
//                                 How It Works?
//                             </a>
//                         </button>
//                         <button className="listOfBtns" onClick={() => colorIt('why')}>
//                             <a id="navLinks" href="../#whyUsPage">
//                                 Why Us?
//                             </a>
//                         </button>
//                     </div>
//                     <div id="signUpContainer">
//                         <button type="submit" id="getInButton">
//                             <a href="../signup">Get In</a>
//                         </button>
//                         <div id="theJourneyText">The Journey</div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Navbar;


import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const [underlineColor, setUnderlineColor] = useState("");

    const colorIt = (val) => {
        setUnderlineColor(val);
    };

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
                        <div id="homeTitle">RECTR</div>
                    </div>
                    <div id="listItems">
                        <button
                            className={`listOfBtns ${underlineColor === "explore" ? "underline" : ""}`}
                            onClick={() => colorIt("explore")}
                        >
                            <a id="navLinks" href="../#landingPage">
                                Explore
                            </a>
                        </button>
                        <button
                            className={`listOfBtns ${underlineColor === "features" ? "underline" : ""}`}
                            onClick={() => colorIt("features")}
                        >
                            <a id="navLinks" href="../#featuresPage">
                                Features
                            </a>
                        </button>
                        <button
                            className={`listOfBtns ${underlineColor === "how" ? "underline" : ""}`}
                            onClick={() => colorIt("how")}
                        >
                            <a id="navLinks" href="../#workPage">
                                How It Works?
                            </a>
                        </button>
                        <button
                            className={`listOfBtns ${underlineColor === "why" ? "underline" : ""}`}
                            onClick={() => colorIt("why")}
                        >
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

// INITIAL, TO BE KEPT
// import { React, useState, useEffect, useRef } from "react";
// import "../Triangle/Triangle.css";
// import TrianglePic from "../../assets/triangle.png";

// const Triangle = ({ count, setCount }) => {
//     const [isRotated, setIsRotated] = useState(false);
//     const [opac, setOpac] = useState(false);

//     const triangleRef = useRef(null);

//     const handleIntersection = (entries) => {
//         const [entry] = entries;
//         if (entry.isIntersecting) {
//             setIsRotated(true);
//             setOpac(true);
//             count = count + 1;
//             setCount(count);

//         } else {
//             setIsRotated(false);
//             setOpac(false);
//         }
//     };

//     useEffect(() => {
//         const options = {
//             root: null,
//             rootMargin: "0px",
//             threshold: 0.5,
//         };
//         const observer = new IntersectionObserver(handleIntersection, options);
//         if (triangleRef.current) {
//             observer.observe(triangleRef.current);
//         }
//         return () => {
//             if (triangleRef.current) {
//                 observer.unobserve(triangleRef.current);
//             }
//         };
//     }, []);

//     const trianglePage = {
//         height: '120vh',
//         color: 'white',
//         display: 'flex',
//         flexDirection: 'column',
//         flexWrap: 'wrap',
//         backgroundColor: 'black',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundSize: 'cover',
//         animation: isRotated ? "bgchange 4s ease-in-out" : ""
//     };

//     const triangleStyles = {
//         width: "50vh",
//         height: "50vh",
//         transform: isRotated ? "rotate(0deg)" : "rotate(180deg)",
//         transition: "transform 0.5s ease-in-out",
//     };


//     const textOpac = {
//         transform: opac ? "translateY(1vh)" : "translateY(20vh)",
//         opacity: opac ? "100" : "0%",
//         transition: "opacity 0.5s ease-in-out, transform 1s ease-in-out",
//     };

//     const textTriangle = [
//         {
//             key: 1,
//             data: 'lorem1'
//         },
//         {
//             key: 2,
//             data: 'lorem2'
//         },
//         {
//             key: 3,
//             data: 'lorem3'
//         },
//     ]

//     return (
//         <>
//             <div style={trianglePage} >
//                 <div style={textOpac}>
//                     {
//                         textTriangle[count % 3].data
//                     }
//                 </div>
//                 <img
//                     ref={triangleRef}
//                     src={TrianglePic}
//                     alt=""
//                     style={triangleStyles}
//                 />
//             </div>
//         </>
//     );
// };

// export default Triangle;

import React, { useState, useEffect, useRef } from "react";
import "../Triangle/Triangle.css";
import TrianglePic from "../../assets/triangle.png";
import claim from "../../assets/claim.png";
import triangle1 from "../../assets/triangle1.png";
import triangle2 from "../../assets/triangle2.png";
import triangle3 from "../../assets/triangle3.png";


const Triangle = ({ count, setCount }) => {
    const [isRotated, setIsRotated] = useState(false);
    const [opac, setOpac] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const triangleRef = useRef(null);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsRotated(true);
            setOpac(true);
            setCount((prevCount) => prevCount + 1);
            setTextIndex((prevIndex) => (prevIndex + 1) % textTriangle.length);
        } else {
            setIsRotated(false);
            setOpac(false);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5,
        };
        const observer = new IntersectionObserver(handleIntersection, options);
        if (triangleRef.current) {
            observer.observe(triangleRef.current);
        }
        return () => {
            if (triangleRef.current) {
                observer.unobserve(triangleRef.current);
            }
        };
    }, []);

    const trianglePage = {
        // height: "120vh",
        width: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        animation: isRotated ? "bgchange 4s ease-in-out" : "",
    };

    const triangleStyles = {

        transform: isRotated ? "rotate(0deg)" : "rotate(360deg)",
        transition: "transform 1s ease-in-out",
    };

    const textOpac = {
        transform: opac ? "translateY(1vh)" : "translateY(20vh)",
        opacity: opac ? "100" : "0%",
        transition: "opacity 0.5s ease-in-out, transform 1s ease-in-out",
    };

    const textTriangle = ["Security", "Efficiency", "Easy To Use"]
    const contextTriangle = ["We sealed it.", " 40% efficient than current market and still pushing the limits, packed with a warmth experience.", "Easy to use for both GenZ & Millennials with gamification of process and get the work done peacefully."]
    const imgsTriangle = [triangle1, triangle2, triangle3]
    const rotateIt = () => {
        setIsRotated((prevState) => !prevState);
    };


    useEffect(() => {
        const timer = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % textTriangle.length);
            rotateIt()
        }, 4000);

        return () => {
            clearInterval(timer);
        };
    }, [textTriangle.length]);

    return (
        <>
            <div id="claimPage">
                <div style={trianglePage}>
                    <div id="headTriCont">
                        <div id="headingTri">
                            <h1>WHAT WE CLAIM?</h1>
                        </div>
                        <img id="claim" src={claim} alt="" />
                    </div>
                    <div id="claimContent">

                        <div id="triangle">

                            <div style={textOpac}>
                                {textTriangle.map((val, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: index === textIndex ? "block" : "none",
                                            animation: index === textIndex ? "textAnimation 2s ease-in-out" : "",
                                            fontWeight: '600',
                                            fontSize: "20px"
                                        }}
                                        className={index === textIndex ? "animated-text" : ""}
                                    >
                                        {val}
                                    </div>
                                ))}
                            </div>
                            <img id="imgRot" ref={triangleRef} src={TrianglePic} alt="" style={triangleStyles} />
                            <div id="textOpac">
                                {contextTriangle.map((val, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: index === textIndex ? "block" : "none",
                                            animation: index === textIndex ? "textAnimation 2s ease-in-out" : "",
                                            padding: '2vh',
                                            paddingTop: '5vh',
                                            fontSize: '20px',
                                            fontWeight: '600'
                                        }}
                                    >
                                        {val}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div id="imgss">
                            {imgsTriangle.map((val, index) => (
                                <img
                                    style={{
                                        display: index === textIndex ? "block" : "none",
                                        animation: index === textIndex ? "textAnimation 2s ease-in-out" : "",
                                        padding: '2vh',
                                        fontSize: '20px',
                                        height: "100%",
                                        width: "100%"
                                    }}
                                    src={val}
                                    alt="claims"
                                />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Triangle;

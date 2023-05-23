// import React from "react";
// import '../HowWeWork/HowWeWork.css'
// import am from '../../assets/aiml.png'
// import bd from '../../assets/bigData.png'
// import pa from '../../assets/propAlgo.png'
// import sol from '../../assets/sol.png'
// import ua from '../../assets/upArrow.png'
// import da from '../../assets/downArrow.png'
// import sa from '../../assets/strArrow.png'
// import { React, useState, useEffect, useRef } from "react";

// const HowWeWork = () => {

//         const [imgTag, setimgTag] = useState(false);
//         const [opac, setOpac] = useState(false);
//         const triangleRef = useRef(null);

//         const handleIntersection = (entries) => {
//             const [entry] = entries;
//             if (entry.isIntersecting) {
//                 setimgTag(true);
//                 setOpac(true);
//             } else {
//                 setimgTag(false);
//                 setOpac(false);
//             }
//         };

//         useEffect(() => {
//             const options = {
//                 root: null,
//                 rootMargin: "0px",
//                 threshold: 0.5,
//             };
//             const observer = new IntersectionObserver(handleIntersection, options);
//             if (triangleRef.current) {
//                 observer.observe(triangleRef.current);
//             }
//             return () => {
//                 if (triangleRef.current) {
//                     observer.unobserve(triangleRef.current);
//                 }
//             };
//         }, []);





//     return <>
//         <div id="workPage">
//             <div id="headingWork">
//                 <strong>
//                     How We Work?
//                 </strong>
//             </div>
//             <div id="imgs">
//                 <div ref='triangleRef' className="containers" id="con1">
//                     <img className="imgTag" id="bdImg" src={bd} alt="" />
//                     <img className="imgTag" id="amImg" src={am} alt="" />
//                 </div>
//                 <div className="containers" id="con2">
//                     <img className="imgTag" id="uaImg" src={ua} alt="" />
//                     <img className="imgTag" id="daImg" src={da} alt="" />
//                 </div>
//                 <div className="containers" id="con3">
//                     <img className="imgTag" id="paImg" src={pa} alt="" />
//                 </div>
//                 <div className="containers" id="con4">
//                     <img className="imgTag" id="saImg" src={sa} alt="" />
//                 </div>
//                 <div className="containers" id="con5">
//                     <img className="imgTag" id="solImg" src={sol} alt="" />
//                 </div>
//             </div>
//         </div>
//     </>;
// };

// export default HowWeWork;


// import React, { useRef, useEffect } from "react";
// import "../HowWeWork/HowWeWork.css";
// import am from "../../assets/aiml.png";
// import bd from "../../assets/bigData.png";
// import pa from "../../assets/propAlgo.png";
// import sol from "../../assets/sol.png";
// import ua from "../../assets/upArrow.png";
// import da from "../../assets/downArrow.png";
// import sa from "../../assets/strArrow.png";

// const HowWeWork = () => {
//     const containerRefs = useRef([]);

//     useEffect(() => {
//         const observerOptions = {
//             root: null,
//             rootMargin: "0px",
//             threshold: 0.2, // Adjust this threshold value as needed
//         };

//         const handleIntersection = (entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add("animate");
//                 }
//             });
//         };

//         const observer = new IntersectionObserver(handleIntersection, observerOptions);

//         containerRefs.current.forEach((ref) => {
//             if (ref.current) {
//                 observer.observe(ref.current);
//             }
//         });

//         return () => {
//             observer.disconnect();
//         };
//     }, []);

//     return (
//         <div id="workPage">
//             <div id="headingWork">
//                 <strong>How We Work?</strong>
//             </div>
//             <div id="imgs">
//                 <div className="containers" id="con1" ref={containerRefs.current[0]}>
//                     <img className="imgTag" id="bdImg" src={bd} alt="" />
//                     <img className="imgTag" id="amImg" src={am} alt="" />
//                 </div>
//                 <div className="containers" id="con2" ref={containerRefs.current[1]}>
//                     <img className="imgTag" id="uaImg" src={ua} alt="" />
//                     <img className="imgTag" id="daImg" src={da} alt="" />
//                 </div>
//                 <div className="containers" id="con3" ref={containerRefs.current[2]}>
//                     <img className="imgTag" id="paImg" src={pa} alt="" />
//                 </div>
//                 <div className="containers" id="con4" ref={containerRefs.current[3]}>
//                     <img className="imgTag" id="saImg" src={sa} alt="" />
//                 </div>
//                 <div className="containers" id="con5" ref={containerRefs.current[4]}>
//                     <img className="imgTag" id="solImg" src={sol} alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HowWeWork;



import React, { useRef, useEffect } from "react";
import "../HowWeWork/HowWeWork.css";
import am from "../../assets/aiml.png";
import bd from "../../assets/bigData.png";
import pa from "../../assets/propAlgo.png";
import sol from "../../assets/sol.png";
import ua from "../../assets/upArrow.png";
import da from "../../assets/downArrow.png";
import sa from "../../assets/strArrow.png";

const HowWeWork = () => {
    const containerRefs = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.2, // Adjust this threshold value as needed
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > observerOptions.threshold) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        containerRefs.current.forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div id="workPage">
            <div id="headingWork">
                <strong>How We Work?</strong>
            </div>
            <div id="imgs">
                <div className="containers" id="con1" ref={el => (containerRefs.current[0] = el)}>
                    <img className="imgTag" id="bdImg" src={bd} alt="" />
                    <img className="imgTag" id="amImg" src={am} alt="" />
                </div>
                <div className="containers" id="con2" ref={el => (containerRefs.current[1] = el)}>
                    <img className="imgTag" id="uaImg" src={ua} alt="" />
                    <img className="imgTag" id="daImg" src={da} alt="" />
                </div>
                <div className="containers" id="con3" ref={el => (containerRefs.current[2] = el)}>
                    <img className="imgTag" id="paImg" src={pa} alt="" />
                </div>
                <div className="containers" id="con4" ref={el => (containerRefs.current[3] = el)}>
                    <img className="imgTag" id="saImg" src={sa} alt="" />
                </div>
                <div className="containers" id="con5" ref={el => (containerRefs.current[4] = el)}>
                    <img className="imgTag" id="solImg" src={sol} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;

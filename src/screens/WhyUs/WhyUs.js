import React, { useState } from "react";
import imgUs from '../../assets/aiml.png';
import '../WhyUs/WhyUs.css'

const WhyUs = () => {
    const data = [
        {
            id: 1,
            key: 1,
            title: "Lorem Ipsum 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: { imgUs }
        },
        {
            id: 2,
            key: 2,
            title: "Lorem Ipsum 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: { imgUs }
        },
        {
            id: 3,
            key: 3,
            title: "Lorem Ipsum 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: { imgUs }
        },
        {
            id: 4,
            key: 4,
            title: "Lorem Ipsum 4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: { imgUs }
        },

    ];

    const [toggle, setToggle] = useState("1");

    return (
        <div id="whyUsPage">
            <h1 id="mainHead">What We Offer?</h1>
            {data.map(({ title, text, key, img }) => {
                return (
                    <>
                        <span className="main">
                            <h1 className={toggle === key ? "enlarged" : ""} onClick={() => setToggle(key)}>
                                {title}
                            </h1>

                            <div className="img">
                                {
                                    toggle === key ? (
                                        <>
                                            <img alt="" src={imgUs} key={key} className="photo" />
                                        </>
                                    ) : null
                                }
                            </div>
                        </span>

                    </>
                );
            })}
            <span id="scrollContainer">
                {/* {data.map(({ key }) => {
                    <img alt="" src={imgUs} key={key} className="photoScroll" />
                })} */}
                <img alt="" src={imgUs} className="photoScroll" />
                <img alt="" src={imgUs} className="photoScroll" />
                <img alt="" src={imgUs} className="photoScroll" />
                <img alt="" src={imgUs} className="photoScroll" />
            </span>
        </div>
    );
}


export default WhyUs;

// import React, { useState } from "react";
// import imgUs from '../../assets/aiml.png';
// import '../WhyUs/WhyUs.css'

// const WhyUs = () => {
//     const data = [
//         {
//             id: 1,
//             key: 1,
//             title: "Lorem Ipsum 1",
//             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
//             img: imgUs
//         },
//         {
//             id: 2,
//             key: 2,
//             title: "Lorem Ipsum 2",
//             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
//             img: imgUs
//         },
//         {
//             id: 3,
//             key: 3,
//             title: "Lorem Ipsum 3",
//             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
//             img: imgUs
//         },
//         {
//             id: 4,
//             key: 4,
//             title: "Lorem Ipsum 4",
//             text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
//             img: imgUs
//         }
//     ];

//     const [activeIndex, setActiveIndex] = useState(0);

//     const handleSlideClick = (index) => {
//         setActiveIndex(index);
//     };

//     return (
//         <div id="whyUsPage">
//             <h1 id="mainHead">What We Offer?</h1>
//             <div id="contentContainer">
//                 <div className="text">
//                     <h1>{data[activeIndex].title}</h1>
//                     <p>{data[activeIndex].text}</p>
//                 </div>
//                 <div className="slider">
//                     <div className="slides">
//                         {data.map(({ title, key, img }, index) => (
//                             <div
//                                 key={key}
//                                 className={`slide ${activeIndex === index ? "active" : ""}`}
//                                 onClick={() => handleSlideClick(index)}
//                             >
//                                 <img src={img} alt="" className="photo" />
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }

// export default WhyUs;



import React, { useState, useRef } from "react";
import imgUs from '../../assets/aiml.png';
import imgUs2 from '../../assets/bigData.png';
import '../WhyUs/WhyUs.css';

const WhyUs = () => {
    const data = [
        {
            id: 1,
            key: 1,
            title: "Lorem Ipsum 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: imgUs
        },
        {
            id: 2,
            key: 2,
            title: "Lorem Ipsum 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: imgUs2
        },
        {
            id: 3,
            key: 3,
            title: "Lorem Ipsum 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: imgUs
        },
        {
            id: 4,
            key: 4,
            title: "Lorem Ipsum 4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: imgUs2
        }
    ];

    const [toggle, setToggle] = useState(1);
    const scrollContainerRef = useRef(null);

    const handleTextClick = (id) => {
        setToggle(id);
        const imageIndex = id - 1;
        scrollContainerRef.current.scrollTo({
            top: imageIndex * scrollContainerRef.current.offsetHeight,
            behavior: "smooth"
        });
    };



    return (
        <div id="whyUsPage">
            <h1 id="mainHead">What We Offer?</h1>
            <div id="bodyWhy">
                <span id="lhs">
                    <div id="titleContainer">

                        {data.map(({ title, key }) => (
                            <h2
                                key={key}
                                className={toggle === key ? "enlarged" : ""}
                                onClick={() => handleTextClick(key)}
                            >
                                {title}
                            </h2>
                        ))}
                    </div>
                </span>
                <div id="scrollContainer" ref={scrollContainerRef}>
                    {data.map(({ id, img }) => (
                        <img
                            id="imgId"
                            key={id}
                            alt=""
                            src={img}
                            className={toggle === id ? "active" : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WhyUs;


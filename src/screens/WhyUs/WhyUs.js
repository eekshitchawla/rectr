import React, { useState, useRef } from "react";
import tenant1 from '../../assets/tenant1.jpg'
import tenant2 from '../../assets/tenant2.jpg'
import tenant3 from '../../assets/tenant3.jpg'
import tenant4 from '../../assets/tenant4.jpg'

import host2 from '../../assets/host2.jpg'
import host3 from '../../assets/host3.jpg'
import host4 from '../../assets/host4.jpg'
import './WhyUs.css';

const WhyUs = () => {
    const tenantData = [
        {
            id: 1,
            key: 1,
            title: "Lorem Ipsum 1",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: tenant1
        },
        {
            id: 2,
            key: 2,
            title: "Lorem Ipsum 2",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: tenant2
        },
        {
            id: 3,
            key: 3,
            title: "Lorem Ipsum 3",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: tenant3
        },
        {
            id: 4,
            key: 4,
            title: "Lorem Ipsum 4",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: tenant4
        }
    ];
    const hostData = [
        {
            id: 1,
            key: 1,
            title: "Lorem Ipsum 5",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: tenant1
        },
        {
            id: 2,
            key: 2,
            title: "Lorem Ipsum 6",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: host2
        },
        {
            id: 3,
            key: 3,
            title: "Lorem Ipsum 7",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: host3
        },
        {
            id: 4,
            key: 4,
            title: "Lorem Ipsum 8",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur reiciendis voluptates, aperiam repellat perferendis qui quidem ipsa rem tempore, eius eos, eligendi saepe? Ipsa illum dicta ipsum officiis numquam.",
            img: host4
        },
        {
            id: 5
        },
    ];
    const [toggle, setToggle] = useState(1);
    const [data, setData] = useState(tenantData);
    const scrollContainerRef = useRef(null);

    const handleTextClick = (id) => {
        setToggle(id);
        const imageIndex = id - 1;
        scrollContainerRef.current.scrollTo({
            top: imageIndex * scrollContainerRef.current.offsetHeight,
            behavior: 'smooth'
        });
    };

    const handleData = (data) => {
        setData(data);
        setToggle(1);
        scrollContainerRef.current.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id="whyUsPage">
            <h1 id="mainHead"><strong>WHAT WE OFFER?</strong></h1>
            <div id="tenantNhost" style={{ display: "flex", justifyContent: 'space-around' }}>
                <h1 id="headingTNH" onClick={() => handleData(tenantData)} className={data.length === tenantData.length ? "activePerson" : ""}>Tenant</h1>
                <h1 id="headingTNH" onClick={() => handleData(hostData)} className={data.length === hostData.length ? "activePerson" : ""}>Host</h1>
            </div>
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

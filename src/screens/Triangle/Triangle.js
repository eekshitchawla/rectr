import { React, useState, useEffect, useRef } from "react";
import "../Triangle/Triangle.css";
import TrianglePic from "../../assets/triangle.png";

const Triangle = () => {
    const [isRotated, setIsRotated] = useState(false);
    const [opac, setOpac] = useState(false);
    const triangleRef = useRef(null);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            setIsRotated(true);
            setOpac(true);
        } else {
            setIsRotated(false);
            setOpac(false);
        }
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Change this threshold value as per your requirement
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

    const triangleStyles = {
        width: "50vh",
        height: "50vh",
        transform: isRotated ? "rotate(0deg)" : "rotate(180deg)",
        transition: "transform 0.5s ease-in-out",
    };

    const textOpac = {
        transform: opac ? "translateY(1vh)" : "translateY(20vh)",
        opacity: opac ? "100" : "0%",
        transition: "opacity 0.5s ease-in-out, transform 1s ease-in-out",
    };

    return (
        <>
            <div id="trianglePage">
                <div style={textOpac}>
                    <h1>lorem ipsum</h1>
                </div>
                <img
                    ref={triangleRef}
                    src={TrianglePic}
                    alt=""
                    style={triangleStyles}
                />
            </div>
        </>
    );
};

export default Triangle;

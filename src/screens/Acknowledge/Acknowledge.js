import React from "react";
import '../Acknowledge/Acknowledge.css';
import mailPic from '../../assets/celebrate.jpg';

const Acknowledge = () => {
    return <>
        <div id="ackContainer">
            <img id="mailPic" src={mailPic} alt="mail" />
            <div id="txtMail"><strong>Check your Inbox!!!</strong></div>
            <div id="txtMail">We've subscribed you to the newsletter!</div>
        </div>
    </>;
};

export default Acknowledge;

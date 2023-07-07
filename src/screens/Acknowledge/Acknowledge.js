import React from "react";
import '../Acknowledge/Acknowledge.css';
import mailPic from '../../assets/celebrate.jpg';

const Acknowledge = () => {
    return <>
        <div id="ackContainer">
            <img id="mailPic" src={mailPic} alt="mail" />
            <div id="txtMail"><strong>Check your Inbox!!!</strong></div>
            <div id="txtMail">We've subscribed you to the newsletter!</div>
            <button id="signInBtn" style={{ fontSize: '24px', padding: '30px' }} onClick={() => window.location.href = '/'}>Back To Home</button>

        </div>
    </>;
};

export default Acknowledge;

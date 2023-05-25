import React from "react";
import '../JoinUs/JoinUs.css'
import join from '../../assets/joinus.png';

const JoinUs = () => {

    const handleJoinUsClick = () => {
        window.location.href = "/signup"
    }

    return <>
        <div id="joinUsContainer"><img id="joinUsImg" src={join} alt="joinUs" onClick={handleJoinUsClick} /></div>
    </>;
};

export default JoinUs;


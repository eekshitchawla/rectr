import React from "react";
import '../JoinUs/JoinUs.css'
import join from '../../assets/joinus.png';

const JoinUs = () => {

    const handleJoinUsClick = () => {
        window.location.href = "/signup"
    }

    return <>
        <div id="joinUsContainer">
            {/* <img id="joinUsImg" src={join} alt="joinUs" onClick={handleJoinUsClick} /> */}
            <div id="joinUs" onClick={handleJoinUsClick}>

                JOIN US
            </div>
            <div id="joinuscontent">

                We make your inbox valuable with subscriber only discounts . Also get to know the cool upcoming features on the app.
                <br />
                Get ahead of people who hadn't signed in .
                <br />
                See you there…
            </div>

        </div>
    </>;
};

export default JoinUs;


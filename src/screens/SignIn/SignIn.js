// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import React, { useState } from "react";

// import '../SignIn/SignIn.css'
// import signInPic from '../../assets/signUpPic.png';
// import Acknowledge from "../Acknowledge/Acknowledge";

// const SignIn = () => {

//     const firebaseConfig = {
//         apiKey: "AIzaSyBgp6--sp1F78QVryczWIlKPb0cgHfLLl4",
//         authDomain: "rectr-8b5b2.firebaseapp.com",
//         projectId: "rectr-8b5b2",
//         storageBucket: "rectr-8b5b2.appspot.com",
//         messagingSenderId: "509755370950",
//         appId: "1:509755370950:web:8cf6299d1298e492ecd6c7",
//         measurementId: "G-ZYMNWN3YTS"
//     };

//     const provider = new GoogleAuthProvider();
//     const auth = getAuth();
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");
//     const [flag, setFlag] = useState(false);

//     async function signIn(event) {
//         event.preventDefault();
//         signInWithPopup(auth, provider).then(setFlag(true))
//     }

//     return <>
//         <div id="signInPage">
//             <div id="pictureContainer"><img id="signInPic" src={signInPic} alt="" /></div>
//             <div id="detailsContainer">
//                 <div id="innerContanier">
//                     <div id="txt">Sign In </div>
//                     <form id="form" action="">
//                         <div id="inputs">
//                             <input id="mail" value={email} className="inputField" type="email" onChange={(e) => {
//                                 setEmail(e.target.value)
//                             }} placeholder="Email" required />
//                             <input id="password" value={pass} className="inputField" type="password" onChange={(e) => {
//                                 setPass(e.target.value)
//                             }} placeholder="Password" required />
//                             <button id="signInBtn" onClick={signIn}><strong>Sign In</strong></button>
//                         </div>
//                     </form>
//                     <br />
//                     <div id="otherOptions">
//                         <div id="horizontalComponent" >
//                             <span id="spanSection">
//                                 OR
//                             </span>
//                         </div>
//                         <div id="otherHalf">
//                             <button id="google" onClick={signIn}> G</button>
//                             <div id="noAccount">
//                                 <div id="noAcc">Don't have an account?</div>
//                                 <button id="signUpBtn">Sign Up</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div id="flag">
//             {flag ? <Acknowledge /> : ""}
//         </div>
//     </>;
// };

// export default SignIn;



import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import React, { useState } from "react";

import '../SignIn/SignIn.css'
import signInPic from '../../assets/signUpPic.png';
import Acknowledge from "../Acknowledge/Acknowledge";

const SignIn = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBgp6--sp1F78QVryczWIlKPb0cgHfLLl4",
        authDomain: "rectr-8b5b2.firebaseapp.com",
        projectId: "rectr-8b5b2",
        storageBucket: "rectr-8b5b2.appspot.com",
        messagingSenderId: "509755370950",
        appId: "1:509755370950:web:8cf6299d1298e492ecd6c7",
        measurementId: "G-ZYMNWN3YTS"
    };

    const provider = new GoogleAuthProvider();
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [flag, setFlag] = useState(false);

    const handleAck = () => {
        window.location.href = "/ack"
    }
    async function signIn(event) {
        event.preventDefault();
        signInWithPopup(auth, provider).then(handleAck)
    }


    return <>
        <div id="signInPage">
            <div id="pictureContainer"><img id="signInPic" src={signInPic} alt="" /></div>
            <div id="detailsContainer">
                <div id="innerContanier">
                    <div id="txt">Sign In </div>
                    <form id="form" action="">
                        <div id="inputs">
                            <input id="mail" value={email} className="inputField" type="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder="Email" required />
                            <input id="password" value={pass} className="inputField" type="password" onChange={(e) => {
                                setPass(e.target.value)
                            }} placeholder="Password" required />
                            <button id="signInBtn" onClick={signIn}><strong>Sign In</strong></button>
                        </div>
                    </form>
                    <br />
                    <div id="otherOptions">
                        <div id="horizontalComponent" >
                            <span id="spanSection">
                                OR
                            </span>
                        </div>
                        <div id="otherHalf">
                            <button id="google" onClick={signIn}> G</button>
                            <div id="noAccount">
                                <div id="noAcc">Don't have an account?</div>
                                <button id="signUpBtn">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SignIn;

import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

import '../SignUp/SignUp.css'
import signUpPic from '../../assets/signUpPic.png';

const SignUp = () => {

    // const firebaseConfig = {
    //     apiKey: "AIzaSyBgp6--sp1F78QVryczWIlKPb0cgHfLLl4",
    //     authDomain: "rectr-8b5b2.firebaseapp.com",
    //     projectId: "rectr-8b5b2",
    //     storageBucket: "rectr-8b5b2.appspot.com",
    //     messagingSenderId: "509755370950",
    //     appId: "1:509755370950:web:8cf6299d1298e492ecd6c7",
    //     measurementId: "G-ZYMNWN3YTS"
    // };

    const firebaseConfig = {
        apiKey: "AIzaSyAQY7lptTGVNeTOPcSDTssM0IriyI07MW0",
        authDomain: "rectr-app.firebaseapp.com",
        databaseURL: "https://rectr-app-default-rtdb.firebaseio.com",
        projectId: "rectr-app",
        storageBucket: "rectr-app.appspot.com",
        messagingSenderId: "317413265184",
        appId: "1:317413265184:web:a2361a5e1fa9956d3cd145",
        measurementId: "G-NKNPP2Q0WY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [pass, setPass] = useState("");

    // const handleSignIn = () => {
    //     window.location.href = "/signin"
    // }
    const handleAck = () => {
        window.location.href = "/ack"
    }
    async function submission(event) {
        event.preventDefault();
        // if (!name || !email || !pass) {
        if (!name || !email) {
            alert("Please fill in all the fields.");
            return;
        }

        const currentDate = new Date();
        const currentDayOfMonth = currentDate.getDate();
        const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
        const currentYear = currentDate.getFullYear();

        const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;

        const timestamp = currentDate.toLocaleString();
        const time = new Date(timestamp).toLocaleTimeString();
        // console.log(time)
        // const existingUser = await getDoc(doc(db, "users", email));
        // if (existingUser.exists()) {
        //     alert("This email is already in use.");
        //     return;
        // }

        await setDoc(doc(db, "newsletterusers", email), {
            name: name,
            email: email,
            // password: pass,
            date: dateString,
            time: time,
            // t: t
        });

        setName("");
        setEmail("");
        // setPass("");

        handleAck();
    }


    // async function googleSignIn() {
    //     const provider = new GoogleAuthProvider();
    //     const auth = getAuth();
    //     await signInWithPopup(auth, provider)
    //         .then((result) => {
    //             addDoc(collection(db, "users"), {
    //                 name: result.user.displayName,
    //                 email: result.user.email,
    //                 authType: "google"
    //             })
    //         }).then(handleAck).catch((error) => {
    //             alert(error)
    //         });
    // }

    return <>
        <div id="signUpPage">
            <div id="pictureContainer"><img id="signUpPic" src={signUpPic} alt="" /></div>
            <div id="detailsContainer">
                <div id="innerContanier">
                    <div id="txt">Sign in to Newsletter</div>
                    <form id="form" action="">
                        <div id="inputs">
                            <input id="name" value={name} className="inputField" type="text" onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder="Name" required />
                            <input id="mail" value={email} className="inputField" type="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder="Email" required />
                            {/* <input id="password" value={pass} className="inputField" type="password" onChange={(e) => {
                                setPass(e.target.value)
                            }} placeholder="Password" required /> */}
                            {/* <div id="tnc"><input id="inputField" type="checkbox" required />I agree to the T&C
                            </div> */}
                            <button id="signUpBtn" onClick={submission}><strong>Subscribe to Newsletter</strong></button>
                        </div>
                    </form>
                    <br />
                    {/* <div id="otherOptions">
                        <div id="horizontalComponent" >
                            <span id="spanSection">
                                OR
                            </span>
                        </div>
                        <div id="otherHalf">
                            <button id="google" onClick={googleSignIn}> <img id="imgGoogle" src={googlePic} alt=""  /></button>
                            <div id="alreadyUser">
                                <div id="alreadyAcc">Already Have An Account?</div>
                                <button id="signInBtn" onClick={handleSignIn}>Sign In</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </>;
};

export default SignUp;

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDoc, doc, setDoc } from "firebase/firestore";

import '../SignUp/SignUp.css'
import signUpPic from '../../assets/signUpPic.png';

const SignUp = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyBgp6--sp1F78QVryczWIlKPb0cgHfLLl4",
        authDomain: "rectr-8b5b2.firebaseapp.com",
        projectId: "rectr-8b5b2",
        storageBucket: "rectr-8b5b2.appspot.com",
        messagingSenderId: "509755370950",
        appId: "1:509755370950:web:8cf6299d1298e492ecd6c7",
        measurementId: "G-ZYMNWN3YTS"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSignIn = () => {
        window.location.href = "/signin"
    }
    const handleAck = () => {
        window.location.href = "/ack"
    }
    async function submission(event) {
        event.preventDefault();

        if (!name || !email || !pass) {
            alert("Please fill in all the fields.");
            return;
        }

        const existingUser = await getDoc(doc(db, "users", email));
        if (existingUser.exists()) {
            alert("This email is already in use.");
            return;
        }

        await setDoc(doc(db, "users", email), {
            name: name,
            email: email,
            password: pass,
        });

        setName("");
        setEmail("");
        setPass("");

        handleAck();
    }


    async function googleSignIn() {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        await signInWithPopup(auth, provider)
            .then((result) => {
                addDoc(collection(db, "users"), {
                    name: result.user.displayName,
                    email: result.user.email,
                    authType: "google"
                })
            }).then(handleAck).catch((error) => {
                alert(error)
            });
    }

    return <>
        <div id="signUpPage">
            <div id="pictureContainer"><img id="signUpPic" src={signUpPic} alt="" /></div>
            <div id="detailsContainer">
                <div id="innerContanier">
                    <div id="txt">Create Account </div>
                    <form id="form" action="">
                        <div id="inputs">
                            <input id="name" value={name} className="inputField" type="text" onChange={(e) => {
                                setName(e.target.value)
                            }} placeholder="Name" required />
                            <input id="mail" value={email} className="inputField" type="email" onChange={(e) => {
                                setEmail(e.target.value)
                            }} placeholder="Email" required />
                            <input id="password" value={pass} className="inputField" type="password" onChange={(e) => {
                                setPass(e.target.value)
                            }} placeholder="Password" required />
                            <div id="tnc"><input id="inputField" type="checkbox" required />I agree to the T&C
                            </div>
                            <button id="signUpBtn" onClick={submission}><strong>Sign Up</strong></button>
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
                            <button id="google" onClick={googleSignIn}> G</button>
                            <div id="alreadyUser">
                                <div id="alreadyAcc">Already Have An Account?</div>
                                <button id="signInBtn" onClick={handleSignIn}>Sign In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default SignUp;

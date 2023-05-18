import React from "react";
import '../JoinUs/JoinUs.css'
import join from '../../assets/joinus.png';

const JoinUs = () => {

    const handleJoinUsClick = () => {
        window.location.href = "/signup"
    }

    return <>
        <div id="joinUsContainer">
            <button id="joinUsBtn" onClick={handleJoinUsClick}><img id="joinUsImg" src={join} alt="joinUs" /></button>
        </div>
    </>;
};

export default JoinUs;


//pop up



// import React, { useState } from "react";
// import "../JoinUs/JoinUs.css";
// import join from "../../assets/joinus.png";

// const JoinUs = () => {
//     const [showPopup, setShowPopup] = useState(false);
//     const [email, setEmail] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//         setShowPopup(false);
//     };

//     return (
//         <>
//             <div id="joinUsContainer">
//                 <button id="joinUsBtn" onClick={() => setShowPopup(true)}>
//                     <img id="joinUsImg" src={join} alt="joinUs" />
//                 </button>
//             </div>
//             {showPopup && (
//                 <div id="popupContainer">
//                     <form id="joinPop" onSubmit={handleSubmit}>
//                         <label id="labelEmail" htmlFor="emailInput" style={{ fontSize: "30px" }}>
//                             <strong>Enter your Email</strong>
//                         </label>
//                         <input
//                             id="emailInput"
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                         <div id="btns">
//                             <button id="emailBtn" type="submit">
//                                 <strong>
//                                     Close
//                                 </strong>
//                             </button>
//                             <button id="closeBtn" onClick={() => setShowPopup(false)}>
//                                 <strong>
//                                     Close
//                                 </strong>
//                             </button>

//                         </div>
//                     </form>
//                 </div>
//             )}
//         </>
//     );
// };

// export default JoinUs;

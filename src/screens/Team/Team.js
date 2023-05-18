// import React from "react";
// import '../Team/Team.css';
// import avatar from '../../assets/avatar.png';

// import Slider from "react-slick";

// const Team = () => {

//     const members = [
//         { key: 1, memName: "SreSanjai1", designation: "Owner", picUrl: avatar },
//         { key: 2, memName: "SreSanjai2", designation: "Manager", picUrl: avatar },
//         { key: 3, memName: "SreSanjai3", designation: "Developer", picUrl: avatar },
//         { key: 4, memName: "SreSanjai4", designation: "Owner", picUrl: avatar },
//         { key: 5, memName: "SreSanjai5", designation: "Manager", picUrl: avatar },
//         { key: 6, memName: "SreSanjai6", designation: "Developer", picUrl: avatar },
//         { key: 7, memName: "SreSanjai7", designation: "Developer", picUrl: avatar },
//     ];

//     const memberCards = members.map((member) => (
//         <div key={member.key} id="glassCardContainer">
//             <div id="glassCard">
//                 <img id="avatar" src={member.picUrl} alt="avatar" />
//                 <div id="nameInCard"><strong>{member.memName}</strong></div>
//                 <div id="designationInCard">{member.designation}</div>
//             </div>
//         </div>
//     ));

//     return (
//         <div id="teamPageCard">
//             <div id="memberCardsContainer">
//                 <Slider>
//                     {/* {memberCards} */}
//                     {
//                         members.map((member) => (
//                             <div key={member.key} id="glassCardContainer">
//                                 <div id="glassCard">
//                                     <img id="avatar" src={member.picUrl} alt="avatar" />
//                                     <div id="nameInCard"><strong>{member.memName}</strong></div>
//                                     <div id="designationInCard">{member.designation}</div>
//                                 </div>
//                             </div>
//                         ))
//                     }
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default Team;


import React from "react";
import "../Team/Team.css";
import avatar from "../../assets/avatar.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Team = () => {
    const members = [
        { key: 1, memName: "SreSanjai1", designation: "Owner", picUrl: avatar },
        { key: 2, memName: "SreSanjai2", designation: "Manager", picUrl: avatar },
        { key: 3, memName: "SreSanjai3", designation: "Developer", picUrl: avatar },
        { key: 4, memName: "SreSanjai4", designation: "Owner", picUrl: avatar },
        { key: 5, memName: "SreSanjai5", designation: "Manager", picUrl: avatar },
        { key: 6, memName: "SreSanjai6", designation: "Developer", picUrl: avatar },
        { key: 7, memName: "SreSanjai7", designation: "Developer", picUrl: avatar },
    ];

    const memberCards = members.map((member) => (
        <div key={member.key} id="glassCardContainer">
            <div id="glassCard">
                <img id="avatar" src={member.picUrl} alt="avatar" />
                <div id="nameInCard">
                    <strong>{member.memName}</strong>
                </div>
                <div id="designationInCard">{member.designation}</div>
            </div>
        </div>
    ));

    return (
        <div id="teamPageCard">
            <div id="memberCardsContainer">
                <Slider
                    centerPadding="0"
                    arrows={true}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite
                    pauseOnHover={false}
                    cssEase="linear"
                    autoplay
                    autoplaySpeed={5000}
                >
                    {memberCards}
                </Slider>
            </div>
        </div>
    );
};

export default Team;

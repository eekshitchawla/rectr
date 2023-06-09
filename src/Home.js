// import React, { useState } from "react";

// import Features from './screens/Features/Features';
// import BACKGROUND from './assets/compressedbg.png'
// import road from './assets/road.png'
// import WhyUs from './screens/WhyUs/WhyUs';
// import HowWeWork from './screens/HowWeWork/HowWeWork';
// import Triangle from './screens/Triangle/Triangle';
// import Team from './screens/Team/Team';
// import JoinUs from "./screens/JoinUs/JoinUs";

// const Home = () => {


//   const [count, setCount] = useState(0);


//   return <>
//     <div id="landingPage">
//       <div id="headingContainer">
//         <div id="heading"><h1 id="headingH1">WELCOME TO RECTR.IN</h1></div>
//         <div id="content">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam modi accusamus soluta
//           sit unde aperiam ipsa suscipit, aspernatur cumque, alias hic ratione, repellat illo voluptate
//           ipsum asperiores voluptas! Error laborum assumenda nulla totam beatae vel praesentium? Totam
//           perferendis tempora voluptas eaque quaerat quas in et rem blanditiis facilis? Rem, incidunt.
//         </div>
//       </div>
//       <div id='imgContainer'>
//         <img id="bgImgg" src={BACKGROUND} alt="background" />
//       </div>
//     </div>
//     <Features />
//     <WhyUs />
//     <HowWeWork />
//     <Triangle setCount={setCount} count={count} />
//     <JoinUs />
//     <Team />
//   </>;
// };

// export default Home;


import React, { useState } from "react";

import Features from './screens/Features/Features';
import WhyUs from './screens/WhyUs/WhyUs';
import HowWeWork from './screens/HowWeWork/HowWeWork';
import Triangle from './screens/Triangle/Triangle';
import Team from './screens/Team/Team';
import JoinUs from "./screens/JoinUs/JoinUs";

const Home = () => {


  const [count, setCount] = useState(0);


  return <>
    <div id="landingPage">
      <div id="headingContainer">
        <div id="heading"><h1 id="headingH1">FINDING RENTED HOUSE MADE EASIER </h1></div>
        <div id="content">
          Explore the whole new experience of the house searching process with the Rectr app.
        </div>
      </div>
    </div>
    <Features />
    <WhyUs />
    <HowWeWork />
    <Triangle setCount={setCount} count={count} />
    <JoinUs />
    <Team />
  </>;
};

export default Home;

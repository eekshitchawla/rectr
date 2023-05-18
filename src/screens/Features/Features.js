import React from "react";
import '../Features/Features.css';
import house1 from '../../assets/featuresHouse1.png'
const Features = () => {
    return <>
        <div id="featuresPage">
            <div id="mainHeading">
                <h1><strong>BROWSE POPULAR HOUSES <br /> BASED ON FEATURES</strong></h1>
            </div>
            <div id="cards">
                <div id="card1">
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt eligendi accusantium impedit adipisci, ea amet, eum reprehenderit voluptates ratione delectus aliquam? Maxime veritatis laborum voluptatibus quis, sed aut illum mollitia voluptatem ut. Officiis doloribus tenetur voluptas itaque, deleniti ratione exercitationem debitis veritatis dolore inventore esse neque maiores dolores! Culpa?
                        </div>
                    </div>
                    <div id="imgCard1"><img className="cardImg" src={house1} alt="" /></div>
                </div>
                <div id="card1">
                    <div id="imgCard1"><img className="cardImg" src={house1} alt="" /></div>
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt eligendi accusantium impedit adipisci, ea amet, eum reprehenderit voluptates ratione delectus aliquam? Maxime veritatis laborum voluptatibus quis, sed aut illum mollitia voluptatem ut. Officiis doloribus tenetur voluptas itaque, deleniti ratione exercitationem debitis veritatis dolore inventore esse neque maiores dolores! Culpa?
                        </div>
                    </div>
                </div>
                <div id="blur2">b</div>
            </div>
        </div>
    </>;
};

export default Features;

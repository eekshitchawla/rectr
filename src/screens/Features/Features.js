import React from "react";
import '../Features/Features.css';
import feature1 from '../../assets/feature1.svg'
import feature2 from '../../assets/feature2.png'
import feature3 from '../../assets/feature3.jpg'
import feature4 from '../../assets/feature4.jpg'
const Features = () => {
    return <>
        <div id="featuresPage">
            <div id="mainHeading">
                <h1>BROWSE POPULAR HOUSES <br /> BASED ON FEATURES</h1>
            </div>
            <div id="cards">
                <div id="card1">
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt eligendi accusantium impedit adipisci, ea amet, eum reprehenderit voluptates ratione delectus aliquam? Maxime veritatis laborum voluptatibus quis, sed aut illum mollitia voluptatem ut. Officiis doloribus tenetur voluptas itaque, deleniti ratione exercitationem debitis veritatis dolore inventore esse neque maiores dolores! Culpa?
                        </div>
                    </div>
                    <div id="imgCard1"><img className="cardImg" src={feature1} alt="" /></div>
                </div>
                <div id="card1">
                    <div id="imgCard1"><img className="cardImg" src={feature2} alt="" /></div>
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt eligendi accusantium impedit adipisci, ea amet, eum reprehenderit voluptates ratione delectus aliquam? Maxime veritatis laborum voluptatibus quis, sed aut illum mollitia voluptatem ut. Officiis doloribus tenetur voluptas itaque, deleniti ratione exercitationem debitis veritatis dolore inventore esse neque maiores dolores! Culpa?
                        </div>
                    </div>
                </div>
                <div id="card1">
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sunt eligendi accusantium impedit adipisci, ea amet, eum reprehenderit voluptates ratione delectus aliquam? Maxime veritatis laborum voluptatibus quis, sed aut illum mollitia voluptatem ut. Officiis doloribus tenetur voluptas itaque, deleniti ratione exercitationem debitis veritatis dolore inventore esse neque maiores dolores! Culpa?
                        </div>
                    </div>
                    <div id="imgCard1"><img className="cardImg" src={feature3} alt="" /></div>
                </div>
                <div id="card1">
                    <div id="imgCard1"><img className="cardImg" src={feature4} alt="" /></div>
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

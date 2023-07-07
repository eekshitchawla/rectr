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
                        <h1 id="heading">Precise search engine that reflects your search.</h1>
                        <div id="lorem">
                            Introducing the renovated search bar that precisely reflects your search results. Made for you & your needs.                        </div>
                    </div>
                    <div id="imgCard1"><img className="cardImg" src={feature1} alt="" /></div>
                </div>
                <div id="card1">
                    <div id="imgCard1"><img className="cardImg" src={feature2} alt="" /></div>
                    <div id="txtCard1">
                        <h1 id="heading">Personalized Content According To Your Interest</h1>
                        <div id="lorem">
                            Personalized house listings that return a better ROI each minute spent in the app.                        </div>
                    </div>
                </div>
                <div id="card1">
                    <div id="txtCard1">
                        <h1 id="heading">Choose the Host or tenant who match your mindset</h1>
                        <div id="lorem">
                            Now tenants can choose not only a house but also the owners/host from the pool of highly valued people according to your preferences.
                        </div>
                    </div>
                    <div id="imgCard1"><img className="cardImg" src={feature3} alt="" /></div>
                </div>
                <div id="card1">
                    <div id="imgCard1"><img className="cardImg" src={feature4} alt="" /></div>
                    <div id="txtCard1">
                        <h1 id="heading"> Background check for enhanced security.</h1>
                        <div id="lorem">
                            Host/Owners need not worry about listing your property with Rectr, we give a  clear picture of people using our app.                        </div>
                    </div>
                </div>
                <div id="blur2">b</div>
            </div>
        </div>
    </>;
};

export default Features;

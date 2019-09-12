import React, { Component } from 'react';
import LightBG from '../img/profile/light.svg';
import fadeBG from '../img/profile/faded.svg';
import darkBG from '../img/profile/dark.svg';
import cloud1 from '../img/profile/cloud_Left.svg';
import cloud2 from '../img/profile/cloud_Mid.svg';
import cloud3 from '../img/profile/cloud_Right.svg';
import trees from '../img/profile/Tree.svg';
import grass from '../img/profile/Grass.svg';

class Background extends Component {
    render() { 
        return (
            <div className="backgrounds-container">
                <img src={LightBG} alt="background" className="LightBG"/>
                <img src={darkBG} alt="background" className="darkBG"/>
                <img src={fadeBG} alt="background" className="fadeBG"/>

                <img src={cloud1} alt="background" className="cloud1"/>
                <img src={cloud2} alt="background" className="cloud2"/>
                <img src={cloud3} alt="background" className="cloud3"/>
                <img src={trees} alt="background" className="trees"/>
                <img src={grass} alt="background" className="grass"/>
            </div>
         );
    }
}
 
export default Background;
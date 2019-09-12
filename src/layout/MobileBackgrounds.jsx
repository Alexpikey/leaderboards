import React, { Component } from 'react';
import LightBG from '../img/profile/mobile-light.svg';
import fadeBG from '../img/profile/mobile-faded.svg';
import darkBG from '../img/profile/mobile-dark.svg';
import cloud1 from '../img/profile/cloud_Left.svg';
import cloud2 from '../img/profile/cloud_Mid.svg';
import cloud3 from '../img/profile/cloud_Right.svg';
import trees from '../img/profile/mobile-trees.svg';

class MobileBackground extends Component {
    render() { 
        return (
            <div className="mobile-backgrounds-container">
                <img src={LightBG} alt="background" className="mLightBG"/>
                <img src={darkBG} alt="background" className="mdarkBG"/>
                <img src={fadeBG} alt="background" className="mfadeBG"/>

                <img src={cloud1} alt="background" className="cloud1"/>
                <img src={cloud2} alt="background" className="cloud2"/>
                <img src={cloud3} alt="background" className="cloud3"/>
                <img src={trees} alt="background" className="trees"/>
            </div>
         );
    }
}
 
export default MobileBackground;
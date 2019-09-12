import React, { Component } from 'react';
import education from '../img/theme/education.png';
import unilever from '../img/theme/unilever.png';

class Footer extends Component {
    render() { 
        return ( 
            <footer>
                <div className="image-container">
                    <img src={education} className="education" alt=""/>
                    <div className="separator"></div>
                    <img src={unilever} className="unilever" alt=""/>
                </div>

                <div className="footer-signoff">
                    <ul>
                        <li><a href="http://">Home</a></li>
                        <li><a href="http://">Activities</a></li>
                        <li><a href="http://">News</a></li>
                        <li><a href="http://">Sign Up</a></li>
                        <li><a href="http://">Contact Us</a></li>
                    </ul>

                    <p>
                        Copyright 2018 | All rights reserved | Unilever Bright Future | Terms &amp; Conditions | Privacy policy
                    </p>
                </div>

                <div className="social">
                    <a href="/"><i className="icon icon-facebook"></i></a>
                    <a href="/"><i className="icon icon-instagram"></i></a>
                    <a href="/"><i className="icon icon-twitter"></i></a>
                </div>
            </footer>
         );
    }
}
 
export default Footer;
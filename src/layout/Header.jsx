import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <nav className="header">
                <a className="back-button" href="/">
                    <i className="icon icon-chevron-thin-left"></i>
                    <p>Website</p>
                </a>
                <div className="tabs-container">
                    <a href="/">Dashboard</a>
                    <a href="/">Leaderboard</a>
                </div>
                <a href="/" className="account-container">
                    <i className="icon icon-creative-commons-attribution"></i>
                    <p>Account</p>
                    <i className="icon icon-chevron-thin-down"></i>
                </a>
            </nav>
         );
    }
}
 
export default Header;
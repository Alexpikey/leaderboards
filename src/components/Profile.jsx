import React, { Component } from 'react';
import profileImage from '../img/profile/profile.png'

class Profile extends Component {
    render() { 
        return ( 
            <section className="profile">
                <img src={profileImage} alt=""/>
                <h2 className="profile-name">Nancy Modjaka Meke</h2>
                <p className="status-name">Bathroom Beginner</p>
                <p className="position">
                    Your position
                    <span>276</span>
                </p>
                <div className="account-prompt">
                    <p>Don't have an account?</p>
                    <p>Click <a href="/">here</a> to sign up</p>
                </div>
            </section>
         );
    }
}
 
export default Profile;
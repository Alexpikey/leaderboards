import React, { Component } from 'react';

class LeaderboardItem extends Component {

    state = {
        active: false
    }

    render() { 
        return ( 
            <div className={"leaderboard-item " + this.props.classes}>
                <p className="rank"></p>
                <div className="profile-icon"></div>
                <div className="details">
                    <p>{this.props.name}</p>
                    <small>{this.props.rank}</small>
                </div>
                <p className="score">{this.props.score}</p>
                <i className="icon icon-star"></i>
            </div>
         );
    }
}
 
export default LeaderboardItem;
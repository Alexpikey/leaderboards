import React, { Component } from 'react';
import LeaderboardItem from './Leaderboard-item';
import Button from '../Button';

class Leaderboard extends Component {

    state = {
        entries: []        
    }


    fetchData() {
        fetch('http://localhost/server/')
        .then(response => response.json())
        .then(parsedJSON => console.log(parsedJSON.results))
    }

    
    render() { 
        
        var {entries} = this.state;

        return ( 
            <div className="leaderboard">
                <h1>Hygienica Leaderboard</h1>
                <div className="leaderboard-item-container">                    

                    <ul>
                        {entries.map(entry => (
                            <LeaderboardItem
                            rank={entry.id}
                            name={entry.name}
                            description={entry.rankDescription}
                            score={entry.score}
                            />
                        ))}
                    </ul>
                </div>
                <Button text="Load More" link="/" />
            </div>
         );
    }
}
 
export default Leaderboard;
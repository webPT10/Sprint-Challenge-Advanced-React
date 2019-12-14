import React, { Component } from 'react';
import axios from 'axios';

class PlayerCard extends Component {
    state = {
        players: []
    }

    componentDidMount(){
        axios   
            .get(`http://localhost:5000/api/players`)
            .then(result => {
                console.log(result)
                this.setState({players: result.data})
            })
            .catch(error => {
                console.log('Error, oh to error:', error)
            })
    }

    render() {
        const { players } = this.state;
        console.log(this.state)
        return (
            <>
                <h5>Players:</h5>
                {players.map(playing => {
                    {console.log(playing)}
                    return(
                        <div className='card-container'>
                            <div className='player-card'>
                                <p>Name: {playing.name}</p>
                                <p>Country: {playing.country} </p>
                                <p>Searches: {playing.searches} </p>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default PlayerCard;
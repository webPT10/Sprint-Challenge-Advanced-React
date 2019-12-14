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
                <h4>2019 Women's World Cup</h4>
                <p>Players ranked by search interest from Google Trends</p>
                <h5>June-July 2019, worldwide</h5>
                {players.map(playing => {
                    {console.log(playing)}
                    return(
                        <div className='player-card'>
                            <p>Name: {playing.name}</p>
                            <p>Country: {playing.country} </p>
                            <p>Searches: {playing.searches} </p>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default PlayerCard;
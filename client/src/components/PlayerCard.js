import React, { Component } from 'react';
import axios from 'axios';

class PlayerCard extends Component {
    // constructor(){
    //     super();
    //     this.state = {
                // players:[]
    //     }
    // }
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
                <h4>from PlayerCard</h4>
                {players.map(playing => {
                    {console.log(playing)}
                    return(
                        <div>
                            <p>Name: {playing.name}</p>
                            <p>Country:{playing.country} </p>
                            <p>Searches: {playing.searches} </p>
                        </div>
                    )
                })}
            </>
        )
    }
}
export default PlayerCard;
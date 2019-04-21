import React, { Component } from 'react';
import './CoinFlip.css';
import Coin from './Coin';
  
class CoinFlip extends Component {
  // static defaultProps = {
  //   face = 'heads'
  // }

  constructor() {
    super()
    this.state = {
      face: 'heads',
      totalFlips: 0,
      totalHeads: 0,
      totalTails: 0
    }
    this.flipCoinHandler = this.flipCoinHandler.bind(this);
  }

  randomize = function() {
    return Math.floor(Math.random() * 2);
  };

  flipCoinHandler = function() {
    // heads === 0, tails === 1
    const headsOrTails = this.randomize();
    
    this.setState(curState => { 
      return ({
        face: headsOrTails === 0 ? 'heads' : 'tails',
        totalFlips: curState.totalFlips + 1,
        totalHeads: headsOrTails === 0 ? curState.totalHeads + 1 : curState.totalHeads, 
        totalTails: headsOrTails === 1 ? curState.totalTails + 1 : curState.totalTails
      })
    })
  };

  render() {
    return (
      <div>
        <h1>Heads or Tails?</h1>
        <Coin face={this.state.face}/>
        <p>Out of {this.state.totalFlips} flips you've got {this.state.totalHeads} heads and {this.state.totalTails} tails</p>
        <button onClick={this.flipCoinHandler}>Flip Coin!</button>
      </div>
    )
  }
}

export default CoinFlip;
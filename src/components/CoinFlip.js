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
      totalTails: 0,
      flipping: false,
    }
    this.flipCoinHandler = this.flipCoinHandler.bind(this);
  }

  randomize = function() {
    return Math.floor(Math.random() * 2);
  };

  flipping = function() {
    this.setState({flipping: true});
    setTimeout(() => {
      this.setState({flipping: false});
    }, 400);
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
    }, this.flipping())
  };

  render() {
    return (
      <div className="CoinFlip">
        <h1>Heads or Tails?</h1>
        <Coin flipping={this.state.flipping} face={this.state.face}/>
        <p>Out of {this.state.totalFlips} flips you've gotten {this.state.totalHeads} heads and {this.state.totalTails} tails</p>
        <button onClick={this.flipCoinHandler} disabled={this.state.flipping}>Flip Coin!</button>
      </div>
    )
  }
}

export default CoinFlip;
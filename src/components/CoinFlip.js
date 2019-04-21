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
      face: 'heads'
    }
    this.flipCoinHandler = this.flipCoinHandler.bind(this);
  }

  randomize = function() {
    return Math.floor(Math.random() * 2);
  };

  flipCoinHandler = function() {
    this.setState((prevState) => { 
      return this.randomize() === 1 ? {face: 'tails'} : {face: 'heads'};
    });
  };

  render() {
    return (
      <div>
        <h1>Heads or Tails?</h1>
        <Coin face={this.state.face}/>
        <button onClick={this.flipCoinHandler}>Flip Coin!</button>
      </div>
    )
  }
}

export default CoinFlip;
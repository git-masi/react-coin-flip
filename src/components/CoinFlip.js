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
  }

  render() {
    return (
      <div>
        <Coin face={this.state.face}/>
      </div>
    )
  }
}

export default CoinFlip;
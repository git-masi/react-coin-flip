import React from 'react';
import './Coin.css';
import heads from '../assets/images/one-hundred-yen-coin-heads-removebg.png';
import tails from '../assets/images/one-hundred-yen-coin-tails-removebg.png';

const Coin = props => {
  return (
    <div className="Coin">
      <img src={props.face === 'heads' ? heads : tails} alt="Japanese 100 yen coin"/>
    </div>
  )
}

export default Coin;
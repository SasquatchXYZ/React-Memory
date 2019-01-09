import React from 'react';
import './GameCard.css';

const GameCard = props => (
  <div className="card" onClick={() => props.cardClick(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image}/>
    </div>
    {/*<div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCard(props.id)} className="remove">
      x
    </span>*/}
  </div>
);

export default GameCard;
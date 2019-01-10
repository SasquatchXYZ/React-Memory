import React from 'react';
import './Title.css';

const TitleBar = props => (
  <div className="title-bar">
    <h1 className="title">Gundam Memory Game</h1>
    <div className="board">
      <h2 className="message-board">{props.message}</h2>
      <h2 className="scoreboard">Score: {props.score}</h2>
    </div>
  </div>
);

export default TitleBar;
import React from 'react';
import './Title.css';

const TitleBar = props => (
  <div className="title-bar">
    <div className="header">
      <h2 className="title">Gundam-React</h2>
      <h2 className="scoreboard">Score: <span className="score">{props.score}</span></h2>
    </div>
    <div className="board">
      <h2 className="message-board">{props.message}</h2>
    </div>
  </div>
);

export default TitleBar;
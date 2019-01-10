import React from 'react';
import './Title.css';

const TitleBar = props => (
  <div className="title-bar">
    <h1 className="title">React Memory</h1>
    <div className="board">
      <h1 className="message-board">{props.message}</h1>
      <h1 className="scoreboard">{props.score}</h1>
    </div>
  </div>
);

export default TitleBar;
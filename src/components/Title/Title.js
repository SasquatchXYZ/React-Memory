import React from 'react';
import './Title.css';

const TitleBar = props => (
  <div className="title-bar">
    <h1 className="title">React Memory</h1>
    <p className="scoreboard">{props.score}</p>
    <p className="message-board">{props.message}</p>
  </div>
);

export default TitleBar;
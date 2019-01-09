import React, { Component } from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import cards from './cards';
import './App.css';

class App extends Component {

  state = {
    cards
  };

  removeCard = id => {
    const cards = this.state.cards.filter(card => card.id !== id);

    this.setState({cards})
  };

  render() {
    return (
      <Wrapper>
        <Title>React Memory</Title>
        {this.state.cards.map(card => (
          <GameCard
            removeCard={this.removeCard}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            occupation={card.occupation}
            location={card.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

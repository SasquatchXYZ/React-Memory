import React, {Component} from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import cards from './cards';
import './App.css';

class App extends Component {

  state = {
    cards,
    clickedCards: [],
    score: 0,
    highScore: 0
  };

  // When you click on a card... it grabs the card id
  cardClick = id => {
    console.log(id);

    // If the card that has not been clicked before, it is added to the clickedCards Array.
    if (!this.state.clickedCards.includes(id)) {
      this.state.clickedCards.push(id);

      // State is Changed to update the score.
      this.setState(
        {
          cards,
          // clickedCards: this.state.clickedCards.push(id),
          score: this.state.score + 1
        });
      console.log(this.state.clickedCards);
      console.log(this.state.score)
    }
    // If you have already clicked on a card... the score is reset to 0, and the game is over/resets
    else {
      console.log('You Already Clicked that Card...');
      this.setState(
        {
          cards,
          clickedCards: [],
          score: 0
        }
      )
    }

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
            cardClick={this.cardClick}
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

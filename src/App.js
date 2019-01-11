import React, {Component} from 'react';
import GameCard from './components/GameCard';
import Wrapper from './components/Wrapper';
import TitleBar from './components/Title';
import CardContainer from './components/CardContainer';
import cards from './cards';
import './App.css';

class App extends Component {

  state = {
    cards,
    clickedCards: [],
    score: 0,
    message: 'Click on a Card to begin playing; but don\'t select a Card more than once'
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
          cards: this.shuffleCards(this.state.cards),
          score: this.state.score + 1,
          message: 'Correct!'
        },
        () => {
          // If you have reached the end of the game (all the cards have been successfully clicked, the game
          // resets and displays a new message.
          if (this.state.score === 12) {
            console.log('Game Completed');

            this.setState(
              {
                cards: this.shuffleCards(this.state.cards),
                clickedCards: [],
                score: 0,
                message: 'Congratulations! You Won!'
              }
            )
          }
        }
      );
      // console.log(this.state.clickedCards);
      // console.log(this.state.score)
    }
    // If you have already clicked on a card... the score is reset to 0, and the game is over/resets
    else {
      console.log('You Already Clicked that Card...');
      this.setState(
        {
          cards: this.shuffleCards(this.state.cards),
          clickedCards: [],
          score: 0,
          message: 'Incorrect! You have already selected that card...'
        }
      )
    }
  };

  shuffleCards = array => {
    let i = array.length, j, temp;
    if (i === 0) return array;
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp
    }
    return array
  };

  render() {
    return (
      <Wrapper>
        <TitleBar
          score={this.state.score}
          message={this.state.message}
        />
        <CardContainer>
        {this.shuffleCards(this.state.cards).map(card => (
          <GameCard
            cardClick={this.cardClick}
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
        </CardContainer>
      </Wrapper>
    );
  }
}

export default App;

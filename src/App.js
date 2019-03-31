import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/board";
import { Card } from "./components/card";
import { Deck } from "./components/deck";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPlayerTurn: 1,
      playerSelectedCard: {
        1: "",
        2: ""
      },
      playerOneInDeck: ["Dragon", "Ball", "GT", "Z"],
      playerTwoInDeck: ["Akira", "Digimon", "Pokemon", "Pokedex"],
      playerOneInPlay: [],
      playerTwoInPlay: []
    };

    this.playCard = this.playCard.bind(this);
    
  }

  playCard = (card, playerNum) => {
    let playerSelectedCard = { ...this.state.playerSelectedCard };
    playerSelectedCard[playerNum] = card
    this.setState({
      playerSelectedCard
    })
  }

  render() {
    return (
      <div className="App">
        <button
          onClick={() => {
            this.setState({
              playerOneInPlay: this.state.playerOneInPlay.concat(2)
            })
          }}>
          Add?
        </button>
        <Board
          cards={this.state.playerOneInPlay.concat(this.state.playerTwoInPlay)}
        />
        <Card />
        <Deck cards={this.state.playerOneInDeck} playCard={this.playCard} playerNum={"1"} />
        <Deck cards={this.state.playerTwoInDeck} playCard={this.playCard} playerNum={"2"} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/board";
import { Deck } from "./components/deck";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPlayerTurn: 1,
      playerOneSelectedCard: {},
      playerTwoSelectedCard: {},
      playerOneInDeck: [
        { name: "Goku", up: 1, down: 9, left: 3, right: 4 },
        { name: "Vegeta", up: 3, down: 3, left: 3, right: 2 },
        { name: "Cell", up: 2, down: 8, left: 2, right: 1 }
      ],
      playerTwoInDeck: [
        { name: "Squall", up: 3, down: 9, left: 3, right: 4 },
        { name: "Seifer", up: 2, down: 2, left: 9, right: 9 },
        { name: "Zell", up: 3, down: 1, left: 2, right: 1 }
      ],
      playerOneCardsPlayed: [],
      playerTwoCardsPlayed: [],
      cardsInPlay: [
        [{ name: "None" }, { name: "None" }, { name: "None" }],
        [{ name: "None" }, { name: "None" }, { name: "None" }],
        [{ name: "None" }, { name: "None" }, { name: "None" }]
      ]
    };
  }

  selectCard = (card, playerNum) => {
    switch (playerNum) {
      case "1":
        this.setState({
          playerOneSelectedCard: Object.assign(
            {},
            this.state.playerOneSelectedCard,
            card
          )
        });
        break;
      case "2":
        this.setState({
          playerTwoSelectedCard: Object.assign(
            {},
            this.state.playerTwoSelectedCard,
            card
          )
        });
        break;
      default:
        break;
    }
  };

  playCard = (row, column) => {
    // need to refactor here

    let { whichPlayerTurn, cardsInPlay } = this.state;
    if (whichPlayerTurn === 1) {
      if (this.state.playerOneSelectedCard.name) {
        //insert the card
        cardsInPlay[row][column] = {
          ...this.state.playerOneSelectedCard,
          player: "player1"
        };

        this.setState({
          ...this.state,
          cardsInPlay
        });

        // remove from deck and remove from selected & next player turn
        this.setState({
          playerOneInDeck: this.state.playerOneInDeck.filter(card => {
            return card.name !== this.state.playerOneSelectedCard.name;
          }),
          playerOneSelectedCard: {},
          whichPlayerTurn: 2
        });
      } else {
        alert(`Player ${whichPlayerTurn} did not select any card to play`);
      }
    } else {
      if (this.state.playerTwoSelectedCard.name) {
        cardsInPlay[row][column] = {
          ...this.state.playerTwoSelectedCard,
          player: "player2"
        };

        this.setState({
          ...this.state,
          cardsInPlay
        });

        // remove from deck and remove from selected & next player turn
        this.setState({
          playerTwoInDeck: this.state.playerTwoInDeck.filter(card => {
            return card.name !== this.state.playerTwoSelectedCard.name;
          }),
          playerTwoSelectedCard: {},
          whichPlayerTurn: 1
        });
      } else {
        alert(`Player ${whichPlayerTurn} did not select any card to play`);
      }
    }
  };

  render() {
    return (
      <div className="App">
        <Deck
          cards={this.state.playerOneInDeck}
          selectCard={this.selectCard}
          playerNum={"1"}
        />
        <Board cards={this.state.cardsInPlay} playCard={this.playCard} />
        <Deck
          cards={this.state.playerTwoInDeck}
          selectCard={this.selectCard}
          playerNum={"2"}
        />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div className="App">
  //       <button
  //         onClick={() => {
  //           this.setState({
  //             playerOneInPlay: this.state.playerOneInPlay.concat(2)
  //           })
  //         }}>
  //         Add?
  //       </button>
  //       <Board
  //         cards={this.state.playerOneInPlay.concat(this.state.playerTwoInPlay)}
  //       />
  //       <Card />
  //       <Deck cards={this.state.playerOneInDeck} playCard={this.playCard} playerNum={"1"} />
  //       <Deck cards={this.state.playerTwoInDeck} playCard={this.playCard} playerNum={"2"} />
  //     </div>
  //   );
  // }
}

export default App;

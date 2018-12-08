import React, { Component } from "react";
import "./App.css";
import { Board } from "./components/board";
import { Card } from "./components/card";
import { Deck } from "./components/deck";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Card />
        <Deck />
      </div>
    );
  }
}

export default App;

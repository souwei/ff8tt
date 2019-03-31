import React, { Component } from "react";
import PropTypes from "prop-types";
export const Deck = ({ cards, playCard, playerNum }) => {
  return (
    <div>
      Player : {playerNum}
      {cards.map(card => {
        return <div onClick={playCard.bind(null, card, playerNum)}> {card}</div>;
      })}
    </div>
  );
};
Deck.propTypes = {
  playerNum: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  playCard: PropTypes.func.isRequired
};

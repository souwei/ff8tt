import React from "react";
import PropTypes from "prop-types";
export const Deck = ({ cards, selectCard, playerNum }) => {
  return (
    <div>
      Player : {playerNum}
      {cards.map(card => {
        return (
          <div onClick={selectCard.bind(null, card, playerNum)}>
            {card.name}
          </div>
        );
      })}
    </div>
  );
};
Deck.propTypes = {
  playerNum: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired
};

import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card";
import "./board.css";

export const Board = ({ cards, playCard }) => {
  return (
    <div>
      {cards.map((cardRow, index) => {
        return (
          <div className="some-page-wrapper">
            <div className="row">
              {cardRow.map((card, idx) => {
                return (
                  <div
                    className={`column  ${card.player ? card.player : ""}`}
                    onClick={playCard.bind(null, index, idx)}
                  >
                    {card.name}
                    {card.player && <Card details={card} />}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Board.propTypes = {
  cards: PropTypes.array.isRequired,
  playCard: PropTypes.func.isRequired
};

import React, { Component } from "react";
import PropTypes from "prop-types";

export const Board = ({ cards }) => {
  return (
    <div>
      Board!!
    {cards.map(card => {
      return <div> {card}</div>;
    })}
    </div>
  )
}

Board.propTypes = {
  cards: PropTypes.array.isRequired
};
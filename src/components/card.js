import React from "react";
import PropTypes from "prop-types";
import "./card.css";
export const Card = ({ details }) => {
  return (
    <div className="card">
      <div> {details.up} </div>
      <div>
        {details.left} {details.right}
      </div>
      <div> {details.down} </div>
    </div>
  );
};

Card.protoTypes = {
  details: PropTypes.object.isRequired
};

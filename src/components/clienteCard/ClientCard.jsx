import React from "react";
import "./ClientCard.css";

const CardComponent = ({ pic, name, id, balance, email, textButtonInfo}) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={pic} alt={id} className="round-image" />
        <h2>{name}</h2>
      </div>
      <div className="card-content">
        <button className="info-button">{textButtonInfo}</button>
      </div>
    </div>
  );
};

export default CardComponent;


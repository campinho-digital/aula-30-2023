import React from 'react';
import './Card.css'; // Certifique-se de ter um arquivo CSS para estilizar seu card

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{content}</p>
      </div>
    </div>
  );
};

export default Card;

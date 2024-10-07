// src/components/widgets/Card.jsx

import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Card;

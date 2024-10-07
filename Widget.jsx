// src/components/widgets/Widget.jsx

import React from 'react';

const Widget = ({ title, content }) => {
  return (
    <div className="widget">
      <h3 className="widget-title">{title}</h3>
      <div className="widget-content">{content}</div>
    </div>
  );
};

export default Widget;

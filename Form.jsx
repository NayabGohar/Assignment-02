// src/components/forms/Form.jsx
import React from 'react';

const Form = ({ children, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;

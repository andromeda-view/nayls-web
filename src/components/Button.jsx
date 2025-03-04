// Button.jsx
import React from "react";

const Button = ({ text, link }) => {
  return (
    <a href={link} className="btn btn-primary">
      {text}
    </a>
  );
};

export default Button;
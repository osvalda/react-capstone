import React from "react";
import "./Button.css";

const Button = ({ title, onClick, type, role }) => {
  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className="button"
      onClick={handleClick}
      role={role}
    >
      {title}
    </button>
  );
};

export default Button;
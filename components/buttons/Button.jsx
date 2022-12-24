import React from "react";

const Button = ({ children, text, type, className }) => {
  return (
    <button className={`btn  btn-${type} ${className ? className : ""}`}>
      <span className={`${children ? "mr-10" : ""} flex`}>{text}</span>{" "}
      {children}
    </button>
  );
};

export default Button;

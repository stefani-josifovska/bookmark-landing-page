import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={"button" || props.type}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

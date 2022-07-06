import React from "react";
import classes from "./BrowserCard.module.css";
import Button from "./Button";

import dots from '../../images/bg-dots.svg';

const BrowserCard = (props) => {
  return <div className={classes.container}>
    <img src={props.logo} alt="" />
    <h4>Add to {props.browserName}</h4>
    <p>Minimum version {props.browserVersion}</p>
    <img className={classes.dots} src={dots} alt="" />
    <Button className={classes.btn}>Add & Install Extension</Button>
  </div>;
};

export default BrowserCard;

import React from "react";
import classes from "./Modal.module.css";

import logoWhite from "./logoWhite";
import { iconClose } from "./iconClose";

const Modal = ({ isMenuOpen, closeModalHandler }) => {
  const exitClickHandler = () => {
    closeModalHandler();
  };

  return (
    <>
      {isMenuOpen && (
        <div className={classes.container}>
          <div className={classes["icon-container"]}>
            {logoWhite}
            <div onClick={exitClickHandler}>{iconClose}</div>
          </div>
          <ul>
            <li key="o1">FEATURES</li>
            <li key="o2">PRICING</li>
            <li key="o3">CONTACT</li>
          </ul>
          <button className={classes.btn}>LOGIN</button>
        </div>
      )}
    </>
  );
};

export default Modal;

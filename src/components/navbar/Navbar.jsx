import React, { useState } from "react";
import ReactDOM from "react-dom";
import bookmarkLogo from "./bookmarkLogo";
import iconHamburger from "./iconHamburger";
import classes from "./Navbar.module.css";

import Modal from "./Modal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setIsMenuOpen(true);
  };

  const exitClickHandler = () => {
    setIsMenuOpen(false)
  };

  return (
    <>
      <nav className={classes.navbar}>
        {!isMenuOpen && <div>{bookmarkLogo}</div>}
        {!isMenuOpen && <div onClick={menuClickHandler}>{iconHamburger}</div>}
      </nav>
      {ReactDOM.createPortal(<Modal closeModalHandler={exitClickHandler} isMenuOpen={isMenuOpen} />, document.getElementById("overlay"))}
    </>
  );
};

export default Navbar;

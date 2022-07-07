import React, { useState } from "react";
import useScreenSize from "../../hooks/use-screen-size";
import ReactDOM from "react-dom";
import bookmarkLogo from "./bookmarkLogo";
import iconHamburger from "./iconHamburger";
import classes from "./Navbar.module.css";

import Modal from "./Modal";
import Button from "../UI/Button";

const Navbar = () => {
  const isDesktopVersion = useScreenSize();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuClickHandler = () => {
    setIsMenuOpen(true);
  };

  const exitClickHandler = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {!isDesktopVersion && (
        <nav className={classes.navbar}>
          {!isMenuOpen && <div>{bookmarkLogo}</div>}
          {!isMenuOpen && <div onClick={menuClickHandler}>{iconHamburger}</div>}
        </nav>
      )}
      {isDesktopVersion && (
        <nav className={classes.navbar}>
          <div>{bookmarkLogo}</div>
          <div className={classes.menu}>
            <ul>
              <li key={Math.random().toString()}>FEATURES</li>
              <li key={Math.random().toString()}>PRICING</li>
              <li key={Math.random().toString()}>CONTACT</li>
            </ul>
            <Button className={classes['login-btn']}>LOGIN</Button>
          </div>
        </nav>
      )}
      {ReactDOM.createPortal(
        <Modal closeModalHandler={exitClickHandler} isMenuOpen={isMenuOpen} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Navbar;

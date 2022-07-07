import React from "react";
import classes from "./Footer.module.css";

import bookmarkWhite from "./bookmarkWhite";
import { facebookLogo } from "./facebookLogo";
import { twitterLogo } from "./twitterLogo";

const Footer = () => {
  return (
    <section className={classes.container}>
      <div className={classes['list-container']}>
        {bookmarkWhite}
        <ul>
          <li key="o1">FEATURES</li>
          <li key="o2">PRICING</li>
          <li key="o3">CONTACT</li>
        </ul>
      </div>
      <div className={classes["logo-container"]}>
        {facebookLogo}
        {twitterLogo}
      </div>
    </section>
  );
};

export default Footer;

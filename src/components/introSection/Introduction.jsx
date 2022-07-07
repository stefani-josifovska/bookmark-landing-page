import React from "react";
import Button from "../UI/Button";
import classes from "./Introduction.module.css";
import { heroImage } from "./heroImgSrc";

const Introduction = () => {
  return (
    <section className={classes["img-intro"]}>
      <div className={classes["hero-container"]}>{heroImage}</div>
      <section className={classes["intro-section"]}>
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={classes["button-container"]}>
          <Button className={classes["btn1"]}>Get It On Chrome</Button>
          <Button className={classes["btn2"]}>Get It On Firefox</Button>
        </div>
      </section>
    </section>
  );
};

export default Introduction;

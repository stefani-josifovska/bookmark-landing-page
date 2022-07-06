import React from "react";
import { heroImage } from "./heroImgSrc";
import classes from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <div className={classes["hero-container"]}>
      {heroImage}
      {/* <div className={classes["blue-background"]}></div> */}
    </div>
  );
};

export default HeroImage;

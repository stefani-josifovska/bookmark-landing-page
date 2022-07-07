import React from "react";
import BrowserCard from "../UI/BrowserCard";
import classes from "./DownloadExtension.module.css";

import chromeLogo from "../../images/logo-chrome.svg";
import firefoxLogo from "../../images/logo-firefox.svg";
import operaLogo from "../../images/logo-opera.svg";

const DownloadExtension = () => {
  return (
    <section className={classes["download-container"]}>
      <div className={classes['text-container']}>
        <h3>Download the extension</h3>
        <p>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </p>
      </div>
      <div className={classes['card-container']}>
        <BrowserCard
          className={classes["browser-card"]}
          logo={chromeLogo}
          browserName="Chrome"
          browserVersion="62"
        />
        <BrowserCard
          className={classes["browser-card"]}
          logo={firefoxLogo}
          browserName="Firefox"
          browserVersion="55"
        />
        <BrowserCard
          className={classes["browser-card"]}
          logo={operaLogo}
          browserName="Opera"
          browserVersion="46"
        />
      </div>
    </section>
  );
};

export default DownloadExtension;

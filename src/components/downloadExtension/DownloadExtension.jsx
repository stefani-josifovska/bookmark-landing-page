import React from "react";
import BrowserCard from "../UI/BrowserCard";
import classes from './DownloadExtension.module.css';

import chromeLogo from '../../images/logo-chrome.svg';
import firefoxLogo from '../../images/logo-firefox.svg';
import operaLogo from '../../images/logo-opera.svg';

const DownloadExtension = () => {
  return (
    <section className={classes['download-container']}>
      <h3>Download the extension</h3>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <BrowserCard logo={chromeLogo} browserName="Chrome" browserVersion="62" />
      <BrowserCard logo={firefoxLogo} browserName="Firefox" browserVersion="55" />
      <BrowserCard logo={operaLogo} browserName="Opera" browserVersion="46" />
    </section>
  );
};

export default DownloadExtension;

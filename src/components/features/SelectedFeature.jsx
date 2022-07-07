import React from "react";
import useScreenSize from "../../hooks/use-screen-size";
import Button from "../UI/Button";
import classes from "./SelectedFeature.module.css";

import illustrationFeature1 from "./illustrations/illustration1";
import illustrationFeature2 from "./illustrations/illustration2";
import illustrationFeature3 from "./illustrations/illustration3";

const SelectedFeature = ({ selectedId }) => {
  const isDesktopVersion = useScreenSize();

  let title = "";
  let text = "";
  let img = "";
  switch (selectedId) {
    case "f1":
      img = illustrationFeature1;
      title = "Bookmark in one click";
      text =
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
      break;
    case "f2":
      img = illustrationFeature2;
      title = "Intelligent search";
      text =
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
      break;
    case "f3":
      img = illustrationFeature3;
      title = "Share your bookmarks";
      text =
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
      break;
    default:
      return <p>Something went wrong</p>;
  }

  return (
    <section className={classes["selected-feature-container"]}>
      <div className={classes["image-container"]}>{img}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        {isDesktopVersion && <Button className={classes.btn}>More Info</Button>}
      </div>
    </section>
  );
};

export default SelectedFeature;

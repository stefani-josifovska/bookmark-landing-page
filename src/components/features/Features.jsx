import React, { useState } from "react";
import SelectedFeature from "./SelectedFeature";
import classes from "./Features.module.css";

const featuresOptions = [
  { id: "f1", name: "Simple Bookmarking" },
  { id: "f2", name: "Speedy Searching" },
  { id: "f3", name: "Easy Sharing" },
];

const Features = () => {
  const [featureId, setFeatureId] = useState("f1");

  const selectFeatureHandler = (e) => {
    setFeatureId(e.target.id);
  };

  return (
    <>
      <section className={classes["features-container"]}>
        <div>
          <h2>Features</h2>
          <p>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <ul>
          {featuresOptions.map((option) => {
            return (
              <li
                className={option.id === featureId ? classes.selected : ""}
                key={option.id}
                id={option.id}
                onClick={selectFeatureHandler}
              >
                <p className={classes["option-text"]}>{option.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
      <SelectedFeature selectedId={featureId} />
    </>
  );
};

export default Features;

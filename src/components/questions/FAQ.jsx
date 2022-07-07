import React, { useState } from "react";
import { questionsList } from "./questionsList";
import { arrowSymbol } from "./arrowSymbol";
import Button from "../UI/Button";
import classes from "./FAQ.module.css";

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState("");

  const seeAnswerHandler = (e) => {
    console.log(e.target.id);
    setSelectedQuestion((prev) => {
      if (prev !== e.target.id) {
        return e.target.id;
      } else {
        return "";
      }
    });
  };

  return (
    <section className={classes.container}>
      <h3>Frequently Asked Questions</h3>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul>
        {questionsList.map((item) => {
          return (
            <li key={item.id}>
              <div
                className={classes.question}
                id={item.id}
                onClick={seeAnswerHandler}
              >
                {item.question}
                <div className={item.id === selectedQuestion ? classes.open : undefined}>
                  {arrowSymbol}
                </div>
              </div>
              {item.id === selectedQuestion && (
                <div className={classes.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <Button className={classes.btn}>More Info</Button>
    </section>
  );
};

export default FAQ;

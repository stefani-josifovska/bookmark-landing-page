import React from "react";
import Button from "../UI/Button";
import classes from "./Signup.module.css";

import isEmail from "validator/lib/isEmail";
import useValidation from "../../hooks/use-validation";

const Signup = () => {
  const {
    hasError,
    enteredValue: enteredEmail,
    isValid: isEmailValid,
    changeHandler,
    blurHandler,
    resetInput,
  } = useValidation((value) => isEmail(value));

  const submitHandler = (e) => {
    e.preventDefault();

    if (!isEmailValid) {
      return;
    }

    resetInput();
  };

  return (
    <section className={classes.container}>
      <h5>35,000+ ALREADY JOINED</h5>
      <h3>Stay up-to-date with what we’re doing</h3>
      <form onSubmit={submitHandler}>
        <section>
          <div className={hasError ? classes.error : undefined}>
            <input
              type="text"
              placeholder="Enter your email address"
              onChange={changeHandler}
              onBlur={blurHandler}
              value={enteredEmail}
            />
            {hasError && <p>Whoops, make sure it's an email</p>}
          </div>
          <Button
            disabled={hasError}
            className={classes.btn}
            onClick={submitHandler}
          >
            Contact Us
          </Button>
        </section>
      </form>
    </section>
  );
};

export default Signup;

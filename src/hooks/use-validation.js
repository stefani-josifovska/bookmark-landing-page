import { useState } from "react";

const useValidation = (validationFunction) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState("");

    const changeHandler = (e) => {
        setEnteredValue(e.target.value);
    };

    const blurHandler = () => {
        setIsTouched(true);
    };

    const resetInput = (e) => {
        setEnteredValue("");
        setIsTouched(false);
    };

    let isValid = validationFunction(enteredValue);
    const hasError = !isValid && isTouched;

    return {
        hasError,
        enteredValue,
        isValid,
        changeHandler,
        blurHandler,
        resetInput
    };
};

export default useValidation;
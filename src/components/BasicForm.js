import { useState, useEffect } from "react";

const BasicForm = (props) => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [hasFirstNameInputBeenFocused, setHasFirstNameInputBeenFocused] =
    useState(false);
  const [hasLastNameInputBeenFocused, setHasLastNameInputBeenFocused] =
    useState(false);
  const [hasEmailInputBeenFocused, setHasEmailInputBeenFocused] =
    useState(false);
  const isFirstNameValid = firstNameInput.trim() !== "";
  const isLastNameValid = lastNameInput.trim() !== "";
  const isEmailValid =
    emailInput.includes("@") && emailInput.trim().length >= 3;
  let isFormValid = false;
  if(isFirstNameValid && isLastNameValid && isEmailValid){
    isFormValid = true
  }
 
  const isFirstNameInputNotValid =
    !isFirstNameValid && hasFirstNameInputBeenFocused;
  const isLastNameInputNotValid = !isLastNameValid && hasLastNameInputBeenFocused;
  const isEmailInputNotValid = !isEmailValid && hasEmailInputBeenFocused;

  const firstNameHandler = (e) => {
    setFirstNameInput(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastNameInput(e.target.value);
  };
  const emailHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setHasEmailInputBeenFocused(true);
      setHasFirstNameInputBeenFocused(true);
      setHasLastNameInputBeenFocused(true);
      return;
    }
    console.log("hola");
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setHasEmailInputBeenFocused(false);
    setHasFirstNameInputBeenFocused(false);
    setHasLastNameInputBeenFocused(false);
  };
  const firstNameBlur = (e) => {
    setHasFirstNameInputBeenFocused(true);
  };
  const lastNameBlur = (e) => {
    setHasLastNameInputBeenFocused(true);
  };
  const emailBlur = (e) => {
    setHasEmailInputBeenFocused(true);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={
            !isFirstNameInputNotValid
              ? "form-control"
              : "form-control invalid"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            value={firstNameInput}
            onBlur={firstNameBlur}
          />
        </div>
        <div
          className={
            !isLastNameInputNotValid
              ? "form-control"
              : "form-control invalid"
          }
        >
          <label htmlFor="name2">Last Name</label>
          <input
            type="text"
            id="name2"
            onChange={lastNameHandler}
            value={lastNameInput}
            onBlur={lastNameBlur}
          />
        </div>
      </div>
      <div
        className={
          !isEmailInputNotValid
            ? "form-control"
            : "form-control invalid"
        }
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailHandler}
          value={emailInput}
          onBlur={emailBlur}
        />
      </div>
      {isFirstNameInputNotValid || isLastNameInputNotValid || isEmailInputNotValid ? (
        <p>Form is invalid</p>
      ) : null}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

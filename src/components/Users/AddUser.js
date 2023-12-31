import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = ({ onAddNewUser }) => {
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setNameState(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeState(event.target.value);
  };

  const isUsernameValid = () => {
    return nameState.trim().length !== 0;
  };

  const isAgeValid = () => {
    return ageState.trim().length !== 0 && +ageState >= 1;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!isUsernameValid() || !isAgeValid()) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age.",
      });
      return;
    }

    onAddNewUser(nameState, ageState);
    setNameState("");
    setAgeState("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={nameState}
            onChange={nameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            step="1"
            value={ageState}
            onChange={ageChangeHandler}
          ></input>
          <Button buttonType="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

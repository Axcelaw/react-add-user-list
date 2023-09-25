import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const [nameState, setNameState] = useState("");
  const [ageState, setAgeState] = useState(0);

  const nameChangeHandler = (event) => {
    setNameState(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAgeState(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
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
  );
};

export default AddUser;

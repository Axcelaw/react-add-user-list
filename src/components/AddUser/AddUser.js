import Button from "../Button/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={classes.input} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text"></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" step="1"></input>
      </div>
      <Button buttonText="Add User" buttonType="submit" />
    </form>
  );
};

export default AddUser;

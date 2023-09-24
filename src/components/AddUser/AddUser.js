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
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;

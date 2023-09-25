import React from "react";
import AddUser from "./components/Users/AddUser";

function App() {
  const usersList = [];

  const newUserHandler = (user) => {
    usersList.push(user);
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onAddNewUser={newUserHandler} />
    </div>
  );
}

export default App;

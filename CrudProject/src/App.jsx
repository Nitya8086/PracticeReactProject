import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  const deleteUser = (id, key) => {
    setUsers(users.map((user, key) => user.id !== id));
    if (currentUser && currentUser.id === id) {
      setCurrentUser("");
    }
    console.log(id);
  };

  return (
    <div className="App">
      <h1>CRUD Operation</h1>
      <button
        onClick={() =>
          setCurrentUser({ id: null, name: "", email: "", phone: "" })
        }>
        Add User
      </button>
      {currentUser && (
        <UserForm
          currentUser={currentUser}
          addUser={addUser}
          updateUser={updateUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {users?.length > 0 && (
        <UserList
          key={users.id}
          users={users}
          editUser={editUser}
          deleteUser={deleteUser}
        />
      )}
    </div>
  );
};

export default App;

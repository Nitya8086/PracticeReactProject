import React, { useState, useEffect } from 'react';

const UserForm = ({ currentUser, addUser, updateUser, setCurrentUser}) => {
  const [user, setUser] = useState(currentUser);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id === null) {
      addUser(user);
    } else {
      updateUser(user);
    }
    setCurrentUser(null);
  };

  return (
    <div className="form-popup">
      <form onSubmit={handleSubmit}>
        <h2>{user.id === null ? 'Add User' : 'Update User'}</h2>
        <label>Name:</label>
        <input type="text" name="name" value={user.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
        <label>Phone:</label>
        <input type="text" name="phone" value={user.phone} onChange={handleChange} required />
        <button type="submit">{user.id === null ? 'Add' : 'Update'}</button>
        <button type="button" onClick={() => setCurrentUser(null)}>Cancel</button>
      </form>
    </div>
  );
};

export default UserForm;
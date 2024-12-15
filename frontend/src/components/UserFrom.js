import React, { useState } from 'react';
import { createUser, updateUser } from '../services/api';

const UserForm = ({ fetchUsers, currentUser, setCurrentUser }) => {
  const [formData, setFormData] = useState(
    currentUser || { name: '', email: '', age: '' }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      await updateUser(currentUser._id, formData);
    } else {
      await createUser(formData);
    }
    setFormData({ name: '', email: '', age: '' });
    setCurrentUser(null);
    fetchUsers();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{currentUser ? 'Update' : 'Create'} User</button>
    </form>
  );
};

export default UserForm;

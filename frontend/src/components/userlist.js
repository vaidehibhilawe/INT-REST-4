import React from 'react';
import { deleteUser } from '../services/api';

const UserList = ({ users, fetchUsers, setCurrentUser }) => {
  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          <span>
            {user.name} - {user.email} - {user.age}
          </span>
          <button onClick={() => setCurrentUser(user)}>Edit</button>
          <button onClick={() => handleDelete(user._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;

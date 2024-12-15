import React, { useState, useEffect } from 'react';
import { getUsers } from './services/api';
import UserForm from './components/UserForm';
import UserList from '../components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <UserForm
        fetchUsers={fetchUsers}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <UserList
        users={users}
        fetchUsers={fetchUsers}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
};

export default App;

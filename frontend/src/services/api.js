import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/users' });

// CRUD functions
export const getUsers = () => API.get('/');
export const createUser = (user) => API.post('/', user);
export const updateUser = (id, updatedUser) => API.put(`/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/${id}`);

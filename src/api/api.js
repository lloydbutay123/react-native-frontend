import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:8000/api/v1', // Replace with your Laravel API URL
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const login = (email, password) =>
  api.post('/auth/users/api/login', { email, password });

export const register = (name, email, password) =>
  api.post('/auth/users', { name, email, password });

export default api;

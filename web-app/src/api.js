import axios from 'axios';

// Create an instance of axios with the base URL
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // URL of your backend server
});

export default api;
 
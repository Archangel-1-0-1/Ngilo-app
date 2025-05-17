import axios from 'axios';

const API = axioscreate({
    baseURL: 'http://localhost:3001/api',
});

export const signup = (userData) => API.post ('/signup', userData);
export const login = (userData) => API.post ('/login', userData);
export const fetchMessages = (userId) => API.post (`/messages/${userId}`);
export const sendMessage = (userId, contact) => API.post (`/messages/${userId}`, {content});

export default API;

import axios from 'axios';

const api = axios.create({
    
    // baseURL: 'http://localhost:5000/api', // for locally work 
     baseURL: 'https://event-booking-backend-ys13.onrender.com',  // ye live project show krne ke liye hai. render ka live link hai
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

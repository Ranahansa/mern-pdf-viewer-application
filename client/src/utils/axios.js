import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
            console.log('Token attached:', token);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default instance;


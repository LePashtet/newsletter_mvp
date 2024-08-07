import axios from "axios";

const axiosInstance = axios.create({
    //TODO possibly change it in future to another url
    baseURL: 'https://api.example.com',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
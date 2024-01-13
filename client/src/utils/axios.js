import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.programmertowheed.com/projectserver/api/v1',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
});

export default axiosInstance;


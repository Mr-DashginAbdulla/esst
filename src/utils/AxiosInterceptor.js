import axios from 'axios';

const authorizedHTTPClient = axios.create({
  baseURL: 'https://localhost:7286/',
});

authorizedHTTPClient.interceptors.request.use(
  function (config) {
    
    const token = localStorage.getItem('token');
    
   
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default authorizedHTTPClient;
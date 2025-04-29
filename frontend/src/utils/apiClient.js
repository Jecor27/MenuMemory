import axios from 'axios';
import useAuthStore from '../components/store/authStore';

const API_URL = 'http://localhost:8080/api';

// Create a configured axios instance
const apiClient = axios.create({
  baseURL: API_URL,
});

// Request interceptor to add auth token to requests
apiClient.interceptors.request.use(
  (config) => {
    const user = useAuthStore.getState().user;
    
    if (user && user.token) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Unauthorized error - clear user and redirect to login
      useAuthStore.getState().logout();
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default apiClient;
import axios from 'axios';

// Create a configured instance of axios
const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:5000/api', // Your Flask API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// We no longer need the interceptor to add the auth token.

// --- API Functions ---

// The loginUser function has been removed.

// Dashboard
export const getDashboardStats = () => apiClient.get('/dashboard/stats').then(res => res.data);

// Analytics
export const getProjectAnalytics = () => apiClient.get('/analytics/project_data').then(res => res.data);

// AI Forecast (Example)
export const getAIForecast = (projectData: any) => apiClient.post('/forecast/predict', projectData).then(res => res.data);

// NOTE: You can add other public API functions here.
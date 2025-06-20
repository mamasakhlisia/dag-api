import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// Configure axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', {
        data: error.response.data,
        status: error.response.status,
        headers: error.response.headers,
      });
      
      // Handle specific status codes
      if (error.response.status === 401) {
        // Handle unauthorized access
        window.location.href = '/login';
      }
    } else if (error.request) {
      console.error('API Error: No response received', error.request);
    } else {
      console.error('API Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// ========== MASTERCLASSES ==========
export const getAllMasterclasses = () => api.get('/masterclass/list');
export const getMasterclassById = (id) => api.get(`/masterclass/${id}`);
export const createMasterclass = (data) => api.post('/masterclass/create', data);
export const updateMasterclass = (id, data) => api.put(`/masterclass/update/${id}`, data);
export const deleteMasterclass = (id) => api.delete(`/masterclass/delete/${id}`);

// ========== TEMPLATES ==========
export const getAllTemplates = () => api.get('/masterclass/templates/list');
export const getTemplateById = (id) => api.get(`/masterclass/templates/${id}`);
export const createTemplate = (data) => api.post('/masterclass/templates/create', data);
export const updateTemplate = (id, data) => api.put(`/masterclass/templates/update/${id}`, data);
export const deleteTemplate = (id) => api.delete(`/masterclass/templates/delete/${id}`);

// For file uploads
export const createTemplateWithImages = (formData) => {
  return api.post('/masterclass/templates/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  });
};

export const getTemplateImage = (filename) => {
  return api.get(`/masterclass/templates/image/${filename}`, {
    responseType: 'arraybuffer',
  });
};

export const getTemplateImageUrl = (filename) => 
  `${BASE_URL}/masterclass/templates/image/${filename}`;

// ========== DOCTORS (LECTURERS) ==========
export const getAllDoctors = () => api.get('/doctor/list');
export const getDoctorById = (id) => api.get(`/doctor/${id}`);
export const createDoctor = (data) => api.post('/doctor/create', data);
export const updateDoctor = (id, data) => api.put(`/doctor/update/${id}`, data);
export const deleteDoctor = (id) => api.delete(`/doctor/delete/${id}`);

// ========== AUTHENTICATION ==========
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const getCurrentUser = () => api.get('/auth/me');

// ========== EXPORT ALL API FUNCTIONS ==========
export default {
  // Masterclasses
  getAllMasterclasses,
  getMasterclassById,
  createMasterclass,
  updateMasterclass,
  deleteMasterclass,
  
  // Templates
  getAllTemplates,
  getTemplateById,
  createTemplate,
  updateTemplate,
  deleteTemplate,
  createTemplateWithImages,
  getTemplateImage,
  getTemplateImageUrl,
  
  // Doctors
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
  
  // Auth
  login,
  register,
  getCurrentUser,
};
import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// Configure axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to handle errors globally
api.interceptors.request.use(
  config => {
    // You can add auth tokens here if needed
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('API Error:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Error: No response received', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// ========== MASTERCLASSES ==========
export const getAllMasterclasses = () => api.get('/masterclass/list');
export const getMasterclassById = (id) => api.get(`/masterclass/${id}`);
export const createMasterclass = (data) => api.post('/masterclass/create', data);

// ========== TEMPLATES ==========
export const getAllTemplates = () => api.get('/masterclass/templates/list');
export const getTemplateById = (id) => api.get(`/masterclass/templates/${id}`);

export const createTemplateWithImages = (formData) => {
  return api.post('/masterclass/templates/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  });
};

export const getTemplateImage = (filename) => {
  return api.get(`/masterclass/templates/image/${filename}`, {
    responseType: 'arraybuffer', // Important for binary data like images
  });
};

// Helper function to get image URL
export const getTemplateImageUrl = (filename) => 
  `${BASE_URL}/masterclass/templates/image/${filename}`;

// ========== DOCTORS (LECTURERS) ==========
export const getAllDoctors = () => api.get('/doctor/list');
export const getDoctorById = (id) => api.get(`/doctor/${id}`);
export const createDoctor = (data) => api.post('/doctor/create', data);

// ========== EXPORT ALL API FUNCTIONS ==========
export default {
  // Masterclasses
  getAllMasterclasses,
  getMasterclassById,
  createMasterclass,
  
  // Templates
  getAllTemplates,
  getTemplateById,
  createTemplateWithImages,
  getTemplateImage,
  getTemplateImageUrl,
  
  // Doctors
  getAllDoctors,
  getDoctorById,
  createDoctor,
};
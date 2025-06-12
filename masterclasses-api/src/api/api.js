import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

// ========== MASTERCLASSES ==========

export const getAllMasterclasses = () =>
  axios.get(`${BASE_URL}/masterclass/list`);

export const getMasterclassById = (id) =>
  axios.get(`${BASE_URL}/masterclass/${id}`);

export const createMasterclass = (data) =>
  axios.post(`${BASE_URL}/masterclass/create`, data);

// ========== TEMPLATES ==========

export const getAllTemplates = () =>
  axios.get(`${BASE_URL}/masterclass/templates/list`);

export const getTemplateById = (id) =>
  axios.get(`${BASE_URL}/masterclass/templates/${id}`);

export const getTemplateImageUrl = (filename) =>
  `${BASE_URL}/masterclass/templates/image/${filename}`;

export const createTemplateWithImages = (formData) =>
  axios.post(`${BASE_URL}/masterclass/templates/create`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  
export const createTemplate = (templateData, files) => {
  const formData = new FormData();
  
  // Append all template data fields
  Object.entries(templateData).forEach(([key, value]) => {
    formData.append(key, value);
  });
  
  // Append all files (matching the @RequestParam("files") name)
  files.forEach(file => {
    formData.append('files', file);
  });

  return axios.post(`${BASE_URL}/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// ========== DOCTORS (LECTURERS) ==========

export const getAllDoctors = () =>
  axios.get(`${BASE_URL}/doctor/list`);

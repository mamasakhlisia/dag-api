const API_BASE_URL = 'http://localhost:8080/api/masterclass';

export const MasterclassAPI = {
  // Get all masterclasses
  getAllMasterclasses: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/list`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch masterclasses');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching masterclasses:', error);
      throw error;
    }
  },

  // Get a single masterclass by ID
  getMasterclassById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Masterclass not found');
        }
        throw new Error('Failed to fetch masterclass');
      }

      return await response.json();
    } catch (error) {
      console.error(`Error fetching masterclass with ID ${id}:`, error);
      throw error;
    }
  },

  // You can add more methods here as your API grows
  // For example:
  // updateMasterclass, deleteMasterclass, etc.
};
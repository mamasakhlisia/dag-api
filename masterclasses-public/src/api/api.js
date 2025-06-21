const API_BASE_URL = 'http://localhost:8080'; // Replace with your actual API base URL

export const api = {
  // Fetch all masterclasses
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

  // Fetch all doctors
  getAllDoctors: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/list`);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  }
};

// Note: There's a potential issue here - both endpoints use the same "/list" path.
// You might want to differentiate them with paths like "/masterclasses/list" and "/doctors/list"
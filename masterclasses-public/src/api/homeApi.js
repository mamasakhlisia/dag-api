const API_BASE_URL = 'http://localhost:8080';

// Option 1: Export a Promise that resolves to the data
export const fetchHomeContent = () => {
  return fetch(`${API_BASE_URL}/api/home-content`)
    .then(response => {
      if (!response.ok) throw new Error('Network response was not ok');
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching home content:', error);
      throw error; // Re-throw to let the caller handle it
    });
};
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

// Option 2: Export the data directly (after awaiting)
let homeContentData = null;

export const loadHomeContent = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/home-content`);
    homeContentData = await response.json();
    return homeContentData;
  } catch (error) {
    console.error('Failed to load home content:', error);
    return null;
  }
};

export { homeContentData };
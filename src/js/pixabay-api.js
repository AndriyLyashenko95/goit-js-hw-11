const API_KEY = '47394574-2a816324e728e13b0469414a4';

export async function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.hits.length === 0) {
      throw new Error('No images found');
    }
    
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showError, showLoading, hideLoading } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const query = input.value.trim();
  
  if (query === '') {
    showError('Please enter a search query.');
    return;
  }

  showLoading();
  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    showError('Sorry, there are no images matching your search query. Please try again!');
  } finally {
    hideLoading();
  }
});
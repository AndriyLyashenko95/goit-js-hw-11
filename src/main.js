import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showLoadingIndicator, hideLoadingIndicator } from './js/render-functions.js';

const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = searchInput.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'top-center',
    });
    return;
  }

  showLoadingIndicator();
  
  try {
    const images = await fetchImages(query);
    renderGallery(images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images.',
      position: 'top-center',
    });
  } finally {
    hideLoadingIndicator();
  }
  searchInput.value = '';
});
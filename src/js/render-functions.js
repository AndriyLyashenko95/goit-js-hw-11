import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const imageCard = `
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
    `;
    gallery.insertAdjacentHTML('beforeend', imageCard);
  });

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

export function showLoading() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
}

export function hideLoading() {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
}
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');

function showGallery(images) {
    const markup = images.map(image => `
        <div class="gallery-item">
           <a href="${image.largeImageURL}">
              <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}">
           </a>
              <div class="img-container">
                <div class="img-info">
                  <p class="img-stats">Likes</p>
                  <p class="img-stats-value">${image.likes}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Views</p>
                  <p class="img-stats-value">${image.views}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Comments</p>
                  <p class="img-stats-value">${image.comments}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Downloads</p>
                  <p class="img-stats-value">${image.downloads}</p>
                </div>
               </div>
        </div>
    `).join('');

    gallery.insertAdjacentHTML('beforeend', markup);
    
    const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        animationSpeed: 300,
        fadeSpeed: 300,
    });

    lightbox.refresh();
}

export { showGallery };
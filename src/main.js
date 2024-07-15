import { getImages } from "./js/pixabay-api"
import { showGallery } from "./js/render-functions"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', event => {
    event.preventDefault();
    const query = input.value.toLowerCase().trim();

    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
            position: 'topRight'
        });
        return;
    }

    loader.classList.add('visible');
    gallery.innerHTML = '';

    getImages(query)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
                return;
            }
            showGallery(images);
        })
        .finally(() => {
            loader.classList.remove('visible');
            form.reset();
        })
})
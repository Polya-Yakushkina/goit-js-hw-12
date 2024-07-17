import { getImages, resetPage } from "./js/pixabay-api"
import { showGallery, toggleLoadBtn } from "./js/render-functions"

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more');

let query = '';

form.addEventListener('submit', async event => {
    event.preventDefault();
    query = input.value.toLowerCase().trim();

    if (query === '') {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query",
            position: "topRight"
        });
        return;
    }

    resetPage();
    loader.classList.add('visible');
    toggleLoadBtn(false);
    gallery.innerHTML = '';

    await newImages();
    form.reset();
});

loadBtn.addEventListener('click', newImages);

async function newImages() {
    try {
        const { hits, totalHits } = await getImages(query);
        if (hits.length === 0) {
            iziToast.error({
                title: "Error",
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight"
            });
            toggleLoadBtn(false);
            return;
        }
        
        showGallery(hits);
        const galleryItem = document.querySelector('.gallery-item');
        if (galleryItem) {
            const { height } = galleryItem.getBoundingClientRect();
            window.scrollBy({
                top: height * 2,
                behavior: 'smooth'
            });
        }

        if (gallery.children.length < totalHits) {
            toggleLoadBtn(true);
        } else {
            toggleLoadBtn(false);
            iziToast.info({
                title: "Info",
                message: "We're sorry, but you've reached the end of search results.",
                position: "topRight"
            });
        }
    } finally {
        loader.classList.remove('visible');
    }
}
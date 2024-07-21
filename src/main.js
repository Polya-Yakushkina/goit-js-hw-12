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

async function errorHandler(fn) {
    try {
        await fn();
    } catch (error) {
        iziToast.info({
            title: "Info",
            message: "Ooops, something went wrong... Try again later.",
            position: "topRight"
        });
    }
}

form.addEventListener('submit', async event => {
    event.preventDefault();
    query = input.value;

    if (query === '') {
        iziToast.error({
            title: "Error",
            message: "Please enter a search query",
            position: "topRight"
        });
        return;
    }

    resetPage();
    toggleLoadBtn(false);
    gallery.innerHTML = '';

    await errorHandler(async () => {
        await newImages();
    }).finally(() => {
        form.reset();
    });
});

loadBtn.addEventListener('click', async () => {
    await errorHandler(async () => {
        await newImages();
        const galleryItem = document.querySelector('.gallery-item');
        if (galleryItem) {
            const { height } = galleryItem.getBoundingClientRect();
            window.scrollBy({
                top: height * 2,
                behavior: 'smooth'
            });
        }
    });
});

async function newImages() {
    loader.classList.add('visible');
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
    } catch (error) {
        iziToast.info({
            title: "Info",
            message: "Ooops, something went wrong... Try again later.",
            position: "topRight"
        });
    } finally {
        loader.classList.remove('visible');
    }
}
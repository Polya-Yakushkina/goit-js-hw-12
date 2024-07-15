import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "";
const imgType = "photo";
const orientation = "horizontal";
const safesearch = "true";
let currentPage = 1;
    
async function getImages(query) {
    const request = `${URL}?key=${API_KEY}&q=${query}&image_type=${imgType}&orientation=${orientation}&safesearch=${safesearch}`;
    
    try {
        const res = await axios.get(request);
        const data = res.data;

        if (data.hits.length === 0) {
            return [];
        }
        currentPage += 1;
        return data.hits;
    } catch(error) {
        console.error('Failed to fetch images due to error:', error);
        return [];
    }
}

function resetPage() {
    currentPage = 1;
}

export { getImages, resetPage };
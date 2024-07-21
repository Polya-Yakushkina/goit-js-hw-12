import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "44826070-b61a4388daa53572fdb07d9a3";
const imgType = "photo";
const orientation = "horizontal";
const safeSearch = "true";
let currentPage = 1;
    
async function getImages(query) {
    const request = `${URL}?key=${API_KEY}&q=${query}&image_type=${imgType}&orientation=${orientation}&safesearch=${safeSearch}&per_page=15&page=${currentPage}`;
    const res = await axios.get(request);
    const data = res.data;
    
    if (data.hits.length === 0) {
            return { hits: [], totalHits: 0 };
        }
        currentPage += 1;
        return { hits: data.hits, totalHits: data.totalHits };
}

function resetPage() {
    currentPage = 1;
}

export { getImages, resetPage };
import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "44826070-b61a4388daa53572fdb07d9a3";
const imgType = "photo";
const orientation = "horizontal";
const safesearch = "true";
    
function getImages(query) {
    const request = `${URL}?key=${API_KEY}&q=${query}&image_type=${imgType}&orientation=${orientation}&safesearch=${safesearch}`;
    
    return fetch(request).then(res => {
        console.log(res);
        if (!res.ok) {
            throw new Error(res.status);
        }
        return res.json();
    })
        .then(data => {
            if (data.hits.length === 0) {
                return [];
            }
            return data.hits;
    })
        .catch(error => {
        console.error('Failed to fetch images due to error:', error);
        return [];
    });
}

export { getImages };
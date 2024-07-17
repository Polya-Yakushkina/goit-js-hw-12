import{a as y,S as h,i as a}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function e(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const v="https://pixabay.com/api/",L="44826070-b61a4388daa53572fdb07d9a3",w="photo",b="horizontal",$="true";let c=1;async function S(r){const o=`${v}?key=${L}&q=${r}&image_type=${w}&orientation=${b}&safesearch=${$}&per_page=15&page=${c}`;try{const e=(await y.get(o)).data;return e.hits.length===0?{hits:[],totalHits:0}:(c+=1,{hits:e.hits,totalHits:e.totalHits})}catch(i){return console.error("Failed to fetch images due to error:",i),{hits:[],totalHits:0}}}function q(){c=1}const P=document.querySelector(".gallery"),u=document.querySelector(".load-more");function R(r){const o=r.map(e=>`
        <div class="gallery-item">
           <a href="${e.largeImageURL}">
              <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
           </a>
              <div class="img-container">
                <div class="img-info">
                  <p class="img-stats">Likes</p>
                  <p class="img-stats-value">${e.likes}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Views</p>
                  <p class="img-stats-value">${e.views}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Comments</p>
                  <p class="img-stats-value">${e.comments}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Downloads</p>
                  <p class="img-stats-value">${e.downloads}</p>
                </div>
               </div>
        </div>
    `).join("");P.insertAdjacentHTML("beforeend",o),new h(".gallery a",{captionDelay:250,captionsData:"alt",animationSpeed:300,fadeSpeed:300}).refresh()}function n(r){r?u.classList.remove("hidden"):u.classList.add("hidden")}const g=document.querySelector(".form"),E=document.querySelector(".input"),m=document.querySelector(".loader"),f=document.querySelector(".gallery"),H=document.querySelector(".load-more");let d="";g.addEventListener("submit",async r=>{if(r.preventDefault(),d=E.value.toLowerCase().trim(),d===""){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}q(),m.classList.add("visible"),n(!1),f.innerHTML="";try{await p()}catch{a.error({title:"Error",message:"An error occurred while fetching images. Please try again!",position:"topRight"})}finally{g.reset()}});H.addEventListener("click",async()=>{try{await p()}catch{a.error({title:"Error",message:"An error occurred while fetching images. Please try again!",position:"topRight"})}});async function p(){try{const{hits:r,totalHits:o}=await S(d);if(r.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n(!1);return}R(r);const i=document.querySelector(".gallery-item");if(i){const{height:e}=i.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}f.children.length<o?n(!0):(n(!1),a.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}finally{m.classList.remove("visible")}}
//# sourceMappingURL=commonHelpers.js.map

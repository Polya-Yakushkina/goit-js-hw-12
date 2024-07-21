import{a as h,S as v,i}from"./assets/vendor-b11e2a50.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/",L="44826070-b61a4388daa53572fdb07d9a3",b="photo",$="horizontal",S="true";let c=1;async function q(e){const o=`${w}?key=${L}&q=${e}&image_type=${b}&orientation=${$}&safesearch=${S}&per_page=15&page=${c}`,s=(await h.get(o)).data;return s.hits.length===0?{hits:[],totalHits:0}:(c+=1,{hits:s.hits,totalHits:s.totalHits})}function I(){c=1}const P=document.querySelector(".gallery"),u=document.querySelector(".load-more");function R(e){const o=e.map(s=>`
        <div class="gallery-item">
           <a href="${s.largeImageURL}">
              <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}">
           </a>
              <div class="img-container">
                <div class="img-info">
                  <p class="img-stats">Likes</p>
                  <p class="img-stats-value">${s.likes}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Views</p>
                  <p class="img-stats-value">${s.views}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Comments</p>
                  <p class="img-stats-value">${s.comments}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Downloads</p>
                  <p class="img-stats-value">${s.downloads}</p>
                </div>
               </div>
        </div>
    `).join("");P.insertAdjacentHTML("beforeend",o),new v(".gallery a",{captionDelay:250,captionsData:"alt",animationSpeed:300,fadeSpeed:300}).refresh()}function a(e){e?u.classList.remove("hidden"):u.classList.add("hidden")}const g=document.querySelector(".form"),O=document.querySelector(".input"),m=document.querySelector(".loader"),f=document.querySelector(".gallery"),H=document.querySelector(".load-more");let d="";async function p(e){try{await e()}catch{i.info({title:"Info",message:"Ooops, something went wrong... Try again later.",position:"topRight"})}}g.addEventListener("submit",async e=>{if(e.preventDefault(),d=O.value,d===""){i.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}I(),a(!1),f.innerHTML="",await p(async()=>{await y()}).finally(()=>{g.reset()})});H.addEventListener("click",async()=>{await p(async()=>{await y();const e=document.querySelector(".gallery-item");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}})});async function y(){m.classList.add("visible");try{const{hits:e,totalHits:o}=await q(d);if(e.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a(!1);return}R(e),f.children.length<o?a(!0):(a(!1),i.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{i.info({title:"Info",message:"Ooops, something went wrong... Try again later.",position:"topRight"})}finally{m.classList.remove("visible")}}
//# sourceMappingURL=commonHelpers.js.map

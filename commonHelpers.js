import{a as y,S as h,i as l}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const v="https://pixabay.com/api/",L="44826070-b61a4388daa53572fdb07d9a3",b="photo",$="horizontal",w="true";let c=1;async function S(s){const r=`${v}?key=${L}&q=${s}&image_type=${b}&orientation=${$}&safesearch=${w}&per_page=15&page=${c}`;try{const e=(await y.get(r)).data;return e.hits.length===0?{hits:[],totalHits:0}:(c+=1,{hits:e.hits,totalHits:e.totalHits})}catch(i){return console.error("Failed to fetch images due to error:",i),{hits:[],totalHits:0}}}function q(){c=1}const P=document.querySelector(".gallery"),u=document.querySelector(".load-more");function H(s){const r=s.map(e=>`
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
    `).join("");P.insertAdjacentHTML("beforeend",r),new h(".gallery a",{captionDelay:250,captionsData:"alt",animationSpeed:300,fadeSpeed:300}).refresh()}function a(s){s?u.classList.remove("hidden"):u.classList.add("hidden")}const m=document.querySelector(".form"),I=document.querySelector(".input"),f=document.querySelector(".loader"),g=document.querySelector(".gallery"),R=document.querySelector(".load-more");let d="";m.addEventListener("submit",async s=>{if(s.preventDefault(),d=I.value.toLowerCase().trim(),d===""){l.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}q(),f.classList.add("visible"),a(!1),g.innerHTML="",await p(),m.reset()});R.addEventListener("click",p);async function p(){try{const{hits:s,totalHits:r}=await S(d);if(s.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a(!1);return}H(s);const i=document.querySelector(".gallery-item");if(i){const{height:e}=i.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}g.children.length<r?a(!0):(a(!1),l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}finally{f.classList.remove("visible")}}
//# sourceMappingURL=commonHelpers.js.map

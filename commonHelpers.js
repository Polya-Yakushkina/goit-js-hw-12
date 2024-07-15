import{S as u,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const d="https://pixabay.com/api/",m="44826070-b61a4388daa53572fdb07d9a3",p="photo",f="horizontal",g="true";function y(i){const r=`${d}?key=${m}&q=${i}&image_type=${p}&orientation=${f}&safesearch=${g}`;return fetch(r).then(e=>{if(console.log(e),!e.ok)throw new Error(e.status);return e.json()}).then(e=>e.hits.length===0?[]:e.hits).catch(e=>(console.error("Failed to fetch images due to error:",e),[]))}const h=document.querySelector(".gallery");function v(i){const r=i.map(o=>`
        <div class="gallery-item">
           <a href="${o.largeImageURL}">
              <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}">
           </a>
              <div class="img-container">
                <div class="img-info">
                  <p class="img-stats">Likes</p>
                  <p class="img-stats-value">${o.likes}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Views</p>
                  <p class="img-stats-value">${o.views}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Comments</p>
                  <p class="img-stats-value">${o.comments}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Downloads</p>
                  <p class="img-stats-value">${o.downloads}</p>
                </div>
               </div>
        </div>
    `).join("");h.insertAdjacentHTML("beforeend",r),new u(".gallery a",{captionDelay:250,captionsData:"alt",animationSpeed:300,fadeSpeed:300}).refresh()}const l=document.querySelector(".form"),L=document.querySelector(".input"),c=document.querySelector(".loader"),b=document.querySelector(".gallery");l.addEventListener("submit",i=>{i.preventDefault();const r=L.value.toLowerCase().trim();if(r===""){a.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}c.classList.add("visible"),b.innerHTML="",y(r).then(e=>{if(e.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}v(e)}).finally(()=>{c.classList.remove("visible"),l.reset()})});
//# sourceMappingURL=commonHelpers.js.map

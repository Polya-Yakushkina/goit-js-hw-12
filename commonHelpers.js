import{a as u,S as d,i as n}from"./assets/vendor-b11e2a50.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const m="https://pixabay.com/api/",p="",f="photo",g="horizontal",y="true";let h=1;async function v(i){const r=`${m}?key=${p}&q=${i}&image_type=${f}&orientation=${g}&safesearch=${y}`;try{const t=(await u.get(r)).data;return t.hits.length===0?[]:(h+=1,t.hits)}catch(o){return console.error("Failed to fetch images due to error:",o),[]}}const L=document.querySelector(".gallery");function $(i){const r=i.map(t=>`
        <div class="gallery-item">
           <a href="${t.largeImageURL}">
              <img class="gallery-img" src="${t.webformatURL}" alt="${t.tags}">
           </a>
              <div class="img-container">
                <div class="img-info">
                  <p class="img-stats">Likes</p>
                  <p class="img-stats-value">${t.likes}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Views</p>
                  <p class="img-stats-value">${t.views}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Comments</p>
                  <p class="img-stats-value">${t.comments}</p>
                </div>
                <div class="img-info">
                  <p class="img-stats">Downloads</p>
                  <p class="img-stats-value">${t.downloads}</p>
                </div>
               </div>
        </div>
    `).join("");L.insertAdjacentHTML("beforeend",r),new d(".gallery a",{captionDelay:250,captionsData:"alt",animationSpeed:300,fadeSpeed:300}).refresh()}const c=document.querySelector(".form"),b=document.querySelector(".input"),l=document.querySelector(".loader"),q=document.querySelector(".gallery");c.addEventListener("submit",i=>{i.preventDefault();const r=b.value.toLowerCase().trim();if(r===""){n.error({title:"Error",message:"Please enter a search query",position:"topRight"});return}l.classList.add("visible"),q.innerHTML="",v(r).then(o=>{if(o.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}$(o)}).finally(()=>{l.classList.remove("visible"),c.reset()})});
//# sourceMappingURL=commonHelpers.js.map

(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a=document.querySelector("#app");a.querySelector(".submit-button");const c=document.querySelector("form"),d=function(){const t=document.querySelector(".overlay");t.classList.remove("hidden"),t.insertAdjacentHTML("afterbegin",`<article class="coding-content">
  <p>
    After 5 years in administration, I realized I was not fully satisfied
    with my job. Although benefits and pay were good, the job did not
    bring me joy. It had been a long aspiration of mine to become a
    developer so I made a bold move and decided to dedicate myself fully
    to this goal. I took to self-study and completed courses on html,
    css, javascript and mathematics on online-platforms such as Udemy
    and Khan Academy.
  </p>
</article>`),document.querySelector("body").classList.add("fixed")},l=function(){const t=document.querySelector(".overlay");t.classList.remove("hidden"),t.insertAdjacentHTML("afterbegin",`<article class="personal-content">
    <p>
      I am a father of 2 boys, Jeppe and Viggo, and married to Lotte. We
      live in Ghent. When I'm not learning to code or doing dad-stuff, I'm learning to play the guitar. I enjoy listening to and
      playing many styles of music.
    </p>
  </article>`),document.querySelector("body").classList.add("fixed")},u=function(){const t=document.querySelector(".overlay");t.firstElementChild.remove(),t.classList.add("hidden"),document.querySelector("body").classList.remove("fixed")};c.addEventListener("submit",function(t){t.preventDefault();const n=document.querySelector("#first-name").value;if(!n)return;a.innerHTML="",a.insertAdjacentHTML("afterbegin",`<h1>Hey <span class="name-span">${n}</span>!</h1>
  <div class="intro">
    <p>On this page you can find out some things about me.</p>
    <p>Click on the items below for more.</p>
  </div>
  <nav>
    <ul>
      <li class="nav-item coding"><div>coding</div></li>
      <li class="nav-item personal"><div>personal</div></li>
    </ul>
  </nav>
<div class="overlay hidden">
        <button class="overlay-button">X</button>
      </div>`);const s=document.querySelector(".coding"),r=document.querySelector(".personal"),e=document.querySelector(".overlay-button");s.addEventListener("click",()=>d()),r.addEventListener("click",()=>l()),e.addEventListener("click",()=>u())});

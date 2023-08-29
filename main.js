"use strict";

const app = document.querySelector("#app");
const button = app.querySelector(".submit-button");
const form = document.querySelector("form");

const openCoding = function () {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden");
  overlay.insertAdjacentHTML(
    "afterbegin",
    `<article class="coding-content">
  <p>
    After 5 years in administration, I realized I was not fully satisfied
    with my job. Although benefits and pay were good, the job did not
    bring me joy. It had been a long aspiration of mine to become a
    developer so I made a bold move and decided to dedicate myself fully
    to this goal. I took to self-study and completed courses on html,
    css, javascript and mathematics on online-platforms such as Udemy
    and Khan Academy.
  </p>
</article>`
  );
  document.querySelector("body").classList.add("fixed");
};
const openPersonal = function () {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("hidden");
  overlay.insertAdjacentHTML(
    "afterbegin",
    `<article class="personal-content">
    <p>
      I am a father of 2 boys, Jeppe and Viggo, and married to Lotte. We
      live in Ghent. When I'm not learning to code or doing dad-stuff, I'm learning to play the guitar. I enjoy listening to and
      playing many styles of music.
    </p>
  </article>`
  );
  document.querySelector("body").classList.add("fixed");
};

const closeModal = function () {
  const overlay = document.querySelector(".overlay");
  overlay.firstElementChild.remove();
  overlay.classList.add("hidden");
  document.querySelector("body").classList.remove("fixed");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.querySelector("#first-name").value;
  if (!firstName) return;
  app.innerHTML = "";
  app.insertAdjacentHTML(
    "afterbegin",
    `<h1>Hey <span class="name-span">${firstName}</span>!</h1>
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
      </div>`
  );
  const coding = document.querySelector(".coding");
  const personal = document.querySelector(".personal");
  const buttonOverlay = document.querySelector(".overlay-button");

  coding.addEventListener("click", () => openCoding());
  personal.addEventListener("click", () => openPersonal());
  buttonOverlay.addEventListener("click", () => closeModal());
});

// les elements de notre page index.html
let headerText = document.querySelector("h1");
let descripton = document.getElementById("desc");
let buttons = document.getElementsByClassName("btn");
let text =
  "Notre outil en ligne facilite l'encodage du texte en base64 ou le décodage de base64 en texte.";
let letters = text.split("");

// l'animation de text
let i = 0;
setInterval(function () {
  if (i === letters.length) {
    clearInterval(this);
  } else {
    descripton.textContent += letters[i];
    i++;
  }
}, 50);

// si la page est chargée je fais quelque animation sur les composants
window.onload = function () {
  headerText.style.opacity = "1";
  headerText.style.paddingTop = "30vh";
  descripton.style.opacity = "1";
  buttons[0].style.opacity = "1";
};

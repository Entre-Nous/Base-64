let descripton = document.getElementById("desc");
let text =
  "Notre outil en ligne facilite l'encodage du texte en base64 ou le décodage de base64 en texte.";
let letters = text.split("");
let i = 0;
setInterval(function () {
  if (i === letters.length) {
    clearInterval(this);
  } else {
    descripton.textContent += letters[i];
    i++;
  }
}, 50);
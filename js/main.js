if (document.title === "Encode-Decode Base-64") {
  // les elements de notre page index.html
  var headerText = document.querySelector(".title-index");
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
  // window.onload = function ()

  headerText.style.opacity = "1";
  headerText.style.paddingTop = "30vh";
  descripton.style.opacity = "1";
  buttons[0].style.opacity = "1";
} else if (document.title === "Encode-Base64") {
  // la page d'encodage

  let input = document.querySelector(".input-text");
  let numberChar = document.querySelector(".heder3");
  let copy = document.querySelector(".copyy-btn");
  let clr = document.querySelector(".saved-btn");
  let download = document.querySelector(".deletd-btn");
  let chooseFile = document.querySelector("#load");
  let output = document.querySelector(".input-text-2");
  let encodeBtn = document.querySelector(".one");

  // when the of encode page is load the text area is focus
  input.focus();

  // for calculating the number of character in the text area
  function calcCharacter(text, zone) {
    text.textContent = `Size: ${zone.value.length} , ${zone.value.length} Characters`;
  }
  input.oninput = function () {
    calcCharacter(numberChar, input);
  };

  // function for select the text and copy it
  function copyText(text) {
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  copy.onclick = function () {
    copyText(input);
  };

  // simple function for clear the text in the text area
  function clearText(text) {
    text.value = "";
    text.focus();
  }

  clr.onclick = function () {
    clearText(input);
    calcCharacter(numberChar, input);
  };

  // download function
  function downloadFile(text) {
    let blob = new Blob([text.value], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "file.txt";
    document.body.appendChild(a);
    a.click();
  }

  download.onclick = function () {
    downloadFile(input);
  };

  // function for choose a text file from the computer (fiha machkal)
  function loadFile(text) {
    let filRea = new FileReader();
    filRea.readAsText(this.files[0]);
    filRea.onload = function () {
      text.value = filRea.result;
    };
  }

  // function for choose a text file from the computer
  chooseFile.onchange = function () {
    let filRea = new FileReader();
    filRea.readAsText(this.files[0]);
    filRea.onload = function () {
      input.value = filRea.result;
    };
    calcCharacter(numberChar, input);
  };

  // function for encoding text to base64
  function encodeBase64(text) {
    return btoa(text.value);
  }

  //when click on button encodeBtn call function of encode
  encodeBtn.onclick = function () {
    output.value = encodeBase64(input);
  };

}

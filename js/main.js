if (document.title === "Encode-Decode Base-64") {
  let btnShow = document.querySelector(".fa-bars");
  let menu = document.querySelector(".links");
  let logo = document.querySelector(".logo");

  btnShow.onclick = () => {
    menu.classList.toggle("show-menu");
  };

  // choose the color of body
  if (localStorage.getItem("color") !== null) {
    document.body.style.backgroundColor = localStorage.getItem("color");
  }
  let divThemes = document.querySelector(".themes");

  divThemes.onclick = function (e) {
    localStorage.setItem("color", e.target.getAttribute("data-color"));
    document.body.style.backgroundColor = localStorage.getItem("color");
  };
  logo.onclick = function () {
    localStorage.setItem("color", "white");
    document.body.style.background = localStorage.getItem("color");
  };
} else if (document.title === "Encode-Base64") {
  // la page d'encodage

  let inputText = document.querySelector(".input-text");
  let numberChar = document.querySelectorAll(".counter");
  let copy = document.querySelectorAll(".fa-copy");
  let clr = document.querySelector(".fa-delete-left");
  let download = document.querySelector(".fa-file-arrow-down");
  let chooseFile = document.getElementById("load");
  let outputText = document.querySelector(".output-text");
  let encodeBtn = document.querySelector(".encode");
  let downloadDecode = document.querySelector(".fa-download");

  // when the of encode page is load the text area is focus
  inputText.focus();

  // for calculating the number of character in the text area
  function calcCharacter(text, zone) {
    text.textContent = `Size: ${zone.value.length} , ${zone.value.length} Characters`;
  }

  inputText.oninput = function () {
    calcCharacter(numberChar[0], inputText);
  };

  // function for select the text and copy it
  function copyText(text) {
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // copy the text of input area
  copy[0].onclick = function () {
    copyText(inputText);
  };

  // copy the text of output area
  copy[1].onclick = function () {
    copyText(outputText);
  };

  // simple function for clear the text in the text area
  function clearText(text) {
    text.value = "";
    text.focus();
  }

  clr.onclick = function () {
    clearText(inputText);
    clearText(outputText);
    calcCharacter(numberChar[0], inputText);
    calcCharacter(numberChar[1], outputText);
    inputText.focus();
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

  // download the text of input area
  download.onclick = function () {
    downloadFile(inputText);
  };

  // download the text of output area
  downloadDecode.onclick = function () {
    downloadFile(outputText);
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
      inputText.value = filRea.result;
      calcCharacter(numberChar[0], inputText);

    };
  };

  // function for encoding text to base64
  function encodeBase64(text) {
    return btoa(text.value);
  }

  //when click on button encodeBtn call function of encode
  encodeBtn.onclick = function () {
    outputText.value = encodeBase64(inputText);
    // calcult the number of character of decode result
    calcCharacter(numberChar[1], outputText);
  };

  // when click on button download call function downloadFile for
  // downloading result of encode
  downloadDecode.onclick = function () {
    downloadFile(outputText);
  };
}

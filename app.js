var btnTranslate = document.querySelector("#translate-Btn");
var textInput = document.querySelector("#textarea");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function serverURL(text) {
  return url + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured " + error);
}

function clickHandler() {
  var InputTxt = textInput.value;

  fetch(serverURL(InputTxt))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      if (!translatedText) {
        alert("Thers is no text to translate!");
      }
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);

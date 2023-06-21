const input = document.querySelector("#txt-area");
const btn = document.querySelector("#btn-translate");
const output = document.querySelector("#output-div");

var serverURL = "https://api.funtranslations.com/translate/sith.json";

btn.addEventListener("click",() => {
    const userInput = input.value;
    const url = generateURL(userInput);
    fetch(url)
    .then(response => response.json())
    .then(json => {
      output.innerText = json.contents.translated;
    })
    .catch(errorHandler);
           
});

function generateURL(userInput){
    const url = serverURL+"?"+"text="+userInput;
    return url;
}

function errorHandler(error){
    alert(error);
}
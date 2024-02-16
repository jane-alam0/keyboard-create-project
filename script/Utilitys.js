function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}
function HideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function getTextElementById(elementId) {
  const getId = document.getElementById(elementId);
  return getId;
}
function setInnerText(elementId, innerText) {
  const element = document.getElementById(elementId);
  element.innerText = innerText;
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-500");
}
function removeBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

function getRandomAlphabet() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const ArrAlphabet = alphabet.split("");

  const RandomNumber = Math.round(Math.random() * 25);

  const getAlphabet = ArrAlphabet[RandomNumber];
  return getAlphabet;
}

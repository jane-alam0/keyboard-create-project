document.addEventListener("keyup", handelKeyboardKeyevent);

function handelKeyboardKeyevent(event) {
  const pressKeyalphabet = event.key;
  const alphabet = getTextElementById("alphabet").innerText;
  const upperCase = alphabet.toLowerCase();

  if (pressKeyalphabet === "Escape") {
    gameOver();
  }
  if (pressKeyalphabet === upperCase) {
    continueGame();
    removeBackgroundColor(upperCase);

    const myScore = getTextElementById("myScore").innerText;
    const countUpdateScore = parseInt(myScore) + 1;
    setInnerText("myScore", countUpdateScore);
  } else {
    const myLife = getTextElementById("myLife").innerText;
    const convertNumber = parseInt(myLife);
    const myLifeCount = convertNumber - 1;
    setInnerText("myLife", myLifeCount);

    if (convertNumber === 0) {
      gameOver();
    }
  }
}

function gameOver() {
  HideElementById("play-screen");
  showElementById("final-Score");
  const totalScore = getTextElementById("myScore").innerText;
  setInnerText("score-counter", totalScore);

  const alphabet = getTextElementById("alphabet").innerText.toLowerCase();
  removeBackgroundColor(alphabet);
}

function continueGame() {
  const alphabet = getRandomAlphabet();
  setInnerText("alphabet", alphabet);

  setBackgroundColor(alphabet);
}

document.getElementById("play-btn").addEventListener("click", play);
document.getElementById("plat-again").addEventListener("click", play);
function play() {
  HideElementById("home-screen");
  HideElementById("final-Score");
  showElementById("play-screen");

  setInnerText("myScore", 0);
  setInnerText("myLife", 5);

  continueGame();
}

document.addEventListener("keyup", function (e) {
  const enter = e.key;
  if (enter === "Enter") {
    HideElementById("home-screen");
    HideElementById("final-Score");
    showElementById("play-screen");

    setInnerText("myScore", 0);
    setInnerText("myLife", 5);

    const alphabet = getTextElementById("alphabet").innerText.toLowerCase();
    setBackgroundColor(alphabet);
  }
});

const words = ["apple", "banana", "cherry", "date"];
const wordDiv = document.querySelector(".word");
const correctCount = document.querySelector(".correct-count");
const wrongCount = document.querySelector(".wrong-count");
const wordMistakes = document.querySelector(".word-mistakes");

let currentWord;
let currentIndex = 0;
let mistakes = 0;

function selectRandomWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDiv.innerHTML = "";
  currentIndex = 0;
  mistakes = 0;
  wordMistakes.textContent = mistakes;

  currentWord.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("hidden"); 
    wordDiv.appendChild(span);
  });

  wordDiv.firstChild.classList.remove("hidden");
}

function handleInput(event) {
  const char = event.key.toLowerCase(); 

  if (char === currentWord[currentIndex]) {
    const spans = wordDiv.querySelectorAll("span");
    spans[currentIndex].classList.remove("hidden"); 
    spans[currentIndex].classList.add("c"); 

    currentIndex++;

    if (currentIndex >= currentWord.length) {
      correctCount.textContent = parseInt(correctCount.textContent) + 1;
      setTimeout(() => {
        selectRandomWord(); 
      }, 1000);
    }
  } else {
    mistakes++;
    wordMistakes.textContent = mistakes;
    const spans = wordDiv.querySelectorAll("span");
    spans[currentIndex].classList.add("w"); 
  }
}

selectRandomWord();
document.addEventListener("keydown", handleInput);
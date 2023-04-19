const theWords = ["Leetcoding 💻", "playing pickup basketball with friends 🏀",
                  "eating Chipotle 🌯", "reading a fantasy novel 📖", "cooking a new dish 🍳",
                  "jogging down Northwestern's Lakefill 🏃", "walking my dog Toby 🐶",
                  "thrifting around the Chicago suburbs 🧥", "studying at the local coffee shop ☕️",
                  "spending time with family back home in Albany, NY 🍎"];
const theBox = document.getElementById("word");
let idx = 0;

const writeBox = (word) => {
  const pieces = word.split("");
  let letterIndex = 0;
  const writeLetters = () => {
    if (letterIndex===pieces.length+1) {
      setTimeout(switchWord, 1500);
    }
    else {
      theBox.innerHTML = pieces.slice(0,letterIndex).join("");
      letterIndex++;
      setTimeout(writeLetters,50);
    }
  }
  writeLetters();
};
const switchWord = () => {
  idx = idx >= theWords.length - 1 ? 0 : idx + 1;
  writeBox(theWords[idx]);
};

switchWord();

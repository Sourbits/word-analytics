const textareaE1 = document.querySelector(".textarea");
const charactersNumberE1 = document.querySelector(".stat__number--characters");
const twitterNumberE1 = document.querySelector(".stat__number--twitter");
const facebookNumberE1 = document.querySelector(".stat__number--facebook");
const wordsNumberE1 = document.querySelector(".stat__number--words");

textareaE1.addEventListener("input", function () {
  let numberOfWords = textareaE1.value.split(" ").length;
  if (textareaE1.value.length === 0) {
    numberOfWords = 0;
  }
  const numberOfCharacters = textareaE1.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  const facebookCharactersLeft = 2200 - numberOfCharacters;
  if (twitterCharactersLeft < 0) {
    twitterNumberE1.classList.add("stat__number--limit");
  } else {
    twitterNumberE1.classList.remove("stat__number--limit");
  }

  if (facebookCharactersLeft < 0) {
    facebookNumberE1.classList.add("stat__number--limit");
  } else {
    facebookNumberE1.classList.remove("stat__number--limit");
  }
  wordsNumberE1.textContent = numberOfWords;
  charactersNumberE1.textContent = numberOfCharacters;
  twitterNumberE1.textContent = twitterCharactersLeft;
  facebookNumberE1.textContent = facebookCharactersLeft;
});

const textareaE1 = document.querySelector(".textarea");
const charactersNumberE1 = document.querySelector(".stat__number--characters");
const twitterNumberE1 = document.querySelector(".stat__number--twitter");
const facebookNumberE1 = document.querySelector(".stat__number--facebook");
const wordsNumberE1 = document.querySelector(".stat__number--words");

textareaE1.addEventListener("input", function () {
  const numberOfCharacters = textareaE1.value.length;
  const twitterCharactersLeft = 280 - numberOfCharacters;
  charactersNumberE1.textContent = numberOfCharacters;
  twitterNumberE1.textContent = twitterCharactersLeft;
});

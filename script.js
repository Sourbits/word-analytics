const textareaE1 = document.querySelector(".textarea");

textareaE1.addEventListener("input", function () {
  const numberOfCharacters = textareaE1.value.length;
  const charactersNumberE1 = document.querySelector(
    ".stat__number--characters"
  );
  charactersNumberE1.textContent = numberOfCharacters;
});

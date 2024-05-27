document.getElementById("name").onmouseover = (event) => {
  const ITERATIONS_PER_LETTER = 2;
  let iterations = 0;

  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return event.target.dataset.text[index];
        }

        return randomLetter();
      })
      .join("");

    iterations += 1 / ITERATIONS_PER_LETTER;

    if (iterations > event.target.dataset.text.length) {
      clearInterval(interval);
    }
  }, 30);
};

/**
 * Generates a random integer between the minimum (inclusive) and maximum (exclusive) values
 * @param {Number} min the minimum number to generate (inclusive)
 * @param {Number} max the maximum number to generate (exclusive)
 * @returns a random integer between the min and the max
 */
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * Generates a random uppercase or lowercase letter
 * @returns a random uppercase or lowercase character
 */
function randomLetter() {
  let charCode;

  // Generate uppercase 50% of the time and lowercase 50% of the time
  if (Math.random() > 0.5) {
    charCode = randInt(65, 91);
  } else {
    charCode = randInt(97, 123);
  }

  return String.fromCharCode(charCode);
}

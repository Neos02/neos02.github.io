/**
 * Generates a random integer between the minimum (inclusive) and maximum (exclusive) values
 * @param {Number} min the minimum number to generate (inclusive)
 * @param {Number} max the maximum number to generate (exclusive)
 * @returns a random integer between the min and the max
 */
function randInt(min, max) {
  return Math.floor(rand(min, max));
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
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

/**
 * Performs a text scramble effect on the innerText of an element
 * @param {HTMLElement} element The element to perform the effect on
 * @param {Number} iterationsPerLetter the number of scrambles per letter before moving onto the next
 */
function hackerText(element, iterationsPerLetter = 2) {
  let iterations = 0;

  const interval = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((_, index) => {
        if (index < iterations) {
          return element.dataset.text[index];
        }

        return randomLetter();
      })
      .join("");

    iterations += 1 / iterationsPerLetter;

    if (iterations > element.dataset.text.length) {
      clearInterval(interval);
    }
  }, 30);
}

hackerText(document.getElementById("name"));

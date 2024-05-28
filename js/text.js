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

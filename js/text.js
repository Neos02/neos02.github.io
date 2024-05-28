const SHORT_NAME = "Nick Kennedy";
const DEFAULT_NAME = "Nicholas Kennedy";

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

/**
 * Shortens the name if the media query is matched,
 * otherwise sets it to default
 * @param {MediaQueryList} media the media query to check
 */
function shortenName(media) {
  const name = document.getElementById("name");

  if (media.matches) {
    name.dataset.text = SHORT_NAME;
    name.innerText = SHORT_NAME;
  } else {
    name.dataset.text = DEFAULT_NAME;
    name.innerText = DEFAULT_NAME;
  }
}

const media448 = window.matchMedia("(max-width: 448px)");

media448.onchange = shortenName;

shortenName(media448);
hackerText(document.getElementById("name"));

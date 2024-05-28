/**
 * Generates a random integer between the minimum (inclusive) and maximum (exclusive) values
 * @param {Number} min the minimum number to generate (inclusive)
 * @param {Number} max the maximum number to generate (exclusive)
 * @returns a random integer between the min and the max
 */
function randInt(min, max) {
  return Math.floor(rand(min, max));
}

/**
 * Generates a random float between the minimum (inclusive) and maximum (exclusive) values
 * @param {Number} min the minimum number to generate (inclusive)
 * @param {Number} max the maximum number to generate (exclusive)
 * @returns a random float between the min and the max
 */
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
 * Gets the cursor position relative to the event target, ignoring scaling due to styling
 * @param {Event} event the event triggered
 * @returns a map of the x and y values containing the cursor position
 */
function getCursorPositionRelativeToElement(event) {
  const rect = event.target.getBoundingClientRect();
  const scale = rect.width / event.target.offsetWidth;

  return {
    x: (event.clientX - rect.left) / scale,
    y: (event.clientY - rect.top) / scale,
  };
}

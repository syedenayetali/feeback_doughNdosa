/*
==========================================
 Dough N Dosa
 rating.js
==========================================
*/

let selectedRating = 0;

const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");
const continueBtn = document.getElementById("continueBtn");

/**
 * Initialize Rating Component
 */
initializeRating();

/**
 * Initialize Event Listeners
 */
function initializeRating() {
  if (!stars.length) return;

  stars.forEach((star) => {
    star.addEventListener("mouseenter", handleHover);

    star.addEventListener("mouseleave", resetHover);

    star.addEventListener("click", handleSelection);
  });
}

/**
 * Hover Effect
 */
function handleHover(event) {
  const rating = Number(event.target.dataset.rating);

  highlightStars(rating);
}

/**
 * Reset Hover
 */
function resetHover() {
  highlightStars(selectedRating);
}

/**
 * Star Selected
 */
function handleSelection(event) {
  selectedRating = Number(event.target.dataset.rating);

  saveRating(selectedRating);

  highlightStars(selectedRating);

  updateRatingMessage(selectedRating);

  enableContinueButton();
}

/**
 * Highlight Stars
 */
function highlightStars(rating) {
  stars.forEach((star) => {
    const starRating = Number(star.dataset.rating);

    if (starRating <= rating) {
      star.classList.remove("fa-regular");
      star.classList.add("fa-solid");

      star.classList.add("active");
    } else {
      star.classList.remove("fa-solid");
      star.classList.add("fa-regular");

      star.classList.remove("active");
    }
  });
}

/**
 * Update Rating Text
 */
function updateRatingMessage(rating) {
  if (!ratingText) return;

  ratingText.innerHTML = getRatingMessage(rating);
}

/**
 * Enable Continue Button
 */
function enableContinueButton() {
  if (!continueBtn) return;

  continueBtn.disabled = false;
}

/**
 * Disable Continue Button
 */
function disableContinueButton() {
  if (!continueBtn) return;

  continueBtn.disabled = true;
}

/**
 * Reset Rating
 */
function resetRating() {
  selectedRating = 0;

  clearRating();

  disableContinueButton();

  ratingText.innerHTML = "Tap a star to continue";

  stars.forEach((star) => {
    star.classList.remove("fa-solid");

    star.classList.add("fa-regular");

    star.classList.remove("active");
  });
}

/**
 * Get Current Rating
 */
function getSelectedRating() {
  return selectedRating;
}

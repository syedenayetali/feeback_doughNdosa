/*
==========================================
 Dough N Dosa
 app.js
==========================================
*/

document.addEventListener("DOMContentLoaded", init);

/**
 * Initialize Application
 */
function init() {
  console.log("🍽 Dough N Dosa App Loaded");

  applyTheme();

  initializeLoadingScreen();

  initializeButton();
}

/**
 * Apply Theme Colors
 */
function applyTheme() {
  document.documentElement.style.setProperty("--primary", CONFIG.PRIMARY_COLOR);

  document.documentElement.style.setProperty("--secondary", CONFIG.SECONDARY_COLOR);

  document.documentElement.style.setProperty("--text", CONFIG.TEXT_COLOR);
}

/**
 * Hide Loading Screen
 */
function initializeLoadingScreen() {
  const loading = document.getElementById("loadingScreen");

  if (loading) {
    loading.style.display = "none";
  }
}

/**
 * Continue Button
 */
function initializeButton() {
  const button = document.getElementById("continueBtn");

  if (!button) return;

  button.disabled = true;

  button.addEventListener("click", continueFlow);
}

/**
 * Continue Flow
 */
function continueFlow() {
  const rating = Number(getRating());

  if (!rating) {
    alert("Please select a rating.");

    return;
  }

  showLoading();

  if (rating >= 4) {
    redirectToGoogleReview();
  } else {
    redirectToPayment();
  }
}

/**
 * Show Loading Screen
 */
function showLoading() {
  const loading = document.getElementById("loadingScreen");

  if (loading) {
    loading.style.display = "flex";
  }
}

/**
 * Hide Loading Screen
 */
function hideLoading() {
  const loading = document.getElementById("loadingScreen");

  if (loading) {
    loading.style.display = "none";
  }
}

/**
 * Redirect to Google Review
 */
function redirectToGoogleReview() {
  setTimeout(() => {
    window.location.href = CONFIG.GOOGLE_REVIEW_URL;
  }, CONFIG.REDIRECT_DELAY);
}

/**
 * Redirect to Payment Page
 */
function redirectToPayment() {
  setTimeout(() => {
    window.location.href = ROUTES.PAYMENT;
  }, CONFIG.REDIRECT_DELAY);
}

function continueFlow() {
  const rating = Number(getRating());

  if (!rating) {
    alert("Please select a rating.");

    return;
  }

  showLoading();

  if (rating >= 4) {
    setTimeout(() => {
      window.location.href = CONFIG.GOOGLE_REVIEW_URL;
    }, CONFIG.REDIRECT_DELAY);
  } else {
    setTimeout(() => {
      window.location.href = ROUTES.THANK_YOU;
    }, CONFIG.REDIRECT_DELAY);
  }
}

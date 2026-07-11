/*
==========================================
 Dough N Dosa
 payment.js
==========================================
*/

document.addEventListener("DOMContentLoaded", initPaymentPage);

/**
 * Initialize Payment Page
 */
function initPaymentPage() {
  loadRestaurantInfo();

  loadQRCode();

  bindEvents();
}

/**
 * Restaurant Details
 */
function loadRestaurantInfo() {
  const restaurantName = document.getElementById("restaurantName");

  if (restaurantName) {
    restaurantName.innerText = CONFIG.RESTAURANT_NAME;
  }
}

/**
 * Load Payment QR
 */
function loadQRCode() {
  const qrImage = document.getElementById("paymentQR");

  if (!qrImage) return;

  qrImage.src = CONFIG.PAYMENT_QR;
}

/**
 * Attach Button Events
 */
function bindEvents() {
  const payButton = document.getElementById("payNowBtn");

  const homeButton = document.getElementById("homeBtn");

  if (payButton) {
    payButton.addEventListener("click", openPaymentApp);
  }

  if (homeButton) {
    homeButton.addEventListener("click", goHome);
  }
}

/**
 * Open UPI Payment
 */
function openPaymentApp() {
  if (CONFIG.UPI_LINK && CONFIG.UPI_LINK.trim() !== "") {
    window.location.href = CONFIG.UPI_LINK;

    return;
  }

  alert("UPI payment link is not configured.\n\nPlease scan the QR code below.");
}

/**
 * Return Home
 */
function goHome() {
  clearRating();

  window.location.href = ROUTES.HOME;
}

/**
 * Payment Successful
 * (Future Feature)
 */
function paymentCompleted() {
  clearRating();

  alert("Thank you for visiting Dough N Dosa ❤️");

  goHome();
}

/**
 * Utility
 */
function showMessage(message) {
  alert(message);
}

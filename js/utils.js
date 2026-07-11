/*
==========================================
 Dough N Dosa
 utils.js
==========================================
*/

/**
 * Save Rating
 */
function saveRating(rating) {
  localStorage.setItem(STORAGE_KEYS.RATING, rating);
}

/**
 * Get Rating
 */
function getRating() {
  return Number(localStorage.getItem(STORAGE_KEYS.RATING));
}

/**
 * Clear Rating
 */
function clearRating() {
  localStorage.removeItem(STORAGE_KEYS.RATING);
}

/**
 * Mark User Visited
 */
function setVisited() {
  localStorage.setItem(STORAGE_KEYS.VISITED, "true");
}

/**
 * Check User Visited
 */
function hasVisited() {
  return localStorage.getItem(STORAGE_KEYS.VISITED) === "true";
}

/**
 * Save Last Visit
 */
function saveVisitDate() {
  localStorage.setItem(STORAGE_KEYS.LAST_VISIT, new Date().toISOString());
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
 * Redirect
 */
function redirect(url, delay = 0) {
  setTimeout(() => {
    window.location.href = url;
  }, delay);
}

/**
 * Open External Link
 */
function openExternal(url) {
  window.open(url, "_blank");
}

/**
 * Enable Button
 */
function enableButton(button) {
  if (!button) return;

  button.disabled = false;
}

/**
 * Disable Button
 */
function disableButton(button) {
  if (!button) return;

  button.disabled = true;
}

/**
 * Show Alert
 */
function showMessage(message) {
  alert(message);
}

/**
 * Sleep Utility
 */
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Generate Random ID
 */
function generateId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let id = "";

  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return id;
}

/**
 * Format Date
 */
function formatDate(date = new Date()) {
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

/**
 * Log (Development Only)
 */
function log(message) {
  console.log(`[Dough N Dosa] ${message}`);
}

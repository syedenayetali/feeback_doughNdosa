/*
==========================================
 Dough N Dosa
 config.js
==========================================
*/

const CONFIG = {
  /* Restaurant Information */

  RESTAURANT_NAME: "Dough N Dosa",

  TAGLINE: "Serving Happiness, One Dosa at a Time",

  ADDRESS: "Shop No. 25 & 26, Tower 18, Purvanchal Royal City, Chi V, Greater Noida",

  PHONE: "+91-8744808747",

  /* Google Review Link */

  GOOGLE_REVIEW_URL: "https://maps.app.goo.gl/aZxFfWLD7bLvbwcHA?g_st=ic",

  /* Payment */

  UPI_LINK: "",

  PAYMENT_QR: "assets/payment-qr.png",

  /* Redirect Configuration */

  REDIRECT_DELAY: 1500,

  GOOGLE_REVIEW_DELAY: 2500,

  /* Theme */

  PRIMARY_COLOR: "#0B5D3B",

  SECONDARY_COLOR: "#F4B400",

  TEXT_COLOR: "#2F2F2F",

  WHITE: "#FFFFFF",
};

/*
==========================================
 Rating Messages
==========================================
*/

const RATING_MESSAGES = {
  1: "We're sorry to hear that 😔",

  2: "We'll strive to improve 💚",

  3: "Thank you for your feedback 😊",

  4: "Awesome! Thank you ⭐",

  5: "Fantastic! You're amazing ⭐⭐⭐⭐⭐",
};

/*
==========================================
 Local Storage Keys
==========================================
*/

const STORAGE_KEYS = {
  RATING: "dnd_rating",

  VISITED: "dnd_visited",

  LAST_VISIT: "dnd_last_visit",
};

/*
==========================================
 Application Routes
==========================================
*/

const ROUTES = {
  HOME: "index.html",

  THANK_YOU: "thankyou.html",

  PAYMENT: "payment.html",
};

/*
==========================================
 Helper Functions
==========================================
*/

function getRatingMessage(rating) {
  return RATING_MESSAGES[rating] || "";
}

function saveRating(rating) {
  localStorage.setItem(STORAGE_KEYS.RATING, rating);
}

function getRating() {
  return localStorage.getItem(STORAGE_KEYS.RATING);
}

function clearRating() {
  localStorage.removeItem(STORAGE_KEYS.RATING);
}

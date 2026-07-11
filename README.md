# 🍽️ Dough N Dosa - Customer Rating & Payment Portal

A lightweight customer experience portal for **Dough N Dosa**.

Customers scan a single QR code to:

1. Rate their experience ⭐⭐⭐⭐⭐
2. Leave a Google Review (only for 4★ & 5★)
3. Proceed to UPI Payment

---

# 📱 Customer Flow

```
Scan QR
    │
    ▼
Open Website
    │
    ▼
Rate Experience
    │
 ┌──┴─────────────┐
 │                │
 ▼                ▼
4★ / 5★       1★ / 2★ / 3★
 │                │
 ▼                ▼
Google Review   Skip Review
 │                │
 └──────┬─────────┘
        ▼
 Payment Page
        ▼
Payment Successful
```

---

# ✨ Features

- Premium Restaurant UI
- Mobile Responsive
- Pure HTML, CSS & Vanilla JavaScript
- No Framework Required
- Google Review Integration
- UPI Payment Support
- QR Payment Fallback
- Local Storage Support
- Easy Configuration
- Fast Loading
- Lightweight

---

# 📁 Project Structure

```
dough-n-dosa-review/
│
├── index.html
├── payment.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
│
├── js/
│   ├── config.js
│   ├── utils.js
│   ├── rating.js
│   ├── app.js
│   └── payment.js
│
├── assets/
│   ├── logo.png
│   └── payment-qr.png
│
└── README.md
```

---

# ⚙️ Configuration

All project settings are available inside:

```
js/config.js
```

Example:

```javascript
const CONFIG = {
  RESTAURANT_NAME: "Dough N Dosa",

  GOOGLE_REVIEW_URL: "YOUR_GOOGLE_REVIEW_URL",

  UPI_LINK: "upi://pay?...",

  PAYMENT_QR: "assets/payment-qr.png",
};
```

---

# 🚀 Running the Project

### Option 1 (Recommended)

Use **VS Code Live Server**

1. Install Live Server Extension
2. Open Project Folder
3. Right Click
4. Open with Live Server

---

### Option 2

Python

```
python -m http.server
```

Open

```
http://localhost:8000
```

---

### Option 3

Node.js

```
npx serve
```

---

# 🎨 Brand Colors

Primary Green

```
#0B5D3B
```

Secondary Gold

```
#F4B400
```

White

```
#FFFFFF
```

---

# 📷 Assets Required

Place these files inside

```
assets/
```

Required

```
logo.png

payment-qr.png
```

---

# ⭐ Rating Logic

| Rating     | Action                  |
| ---------- | ----------------------- |
| ⭐         | Payment                 |
| ⭐⭐       | Payment                 |
| ⭐⭐⭐     | Payment                 |
| ⭐⭐⭐⭐   | Google Review → Payment |
| ⭐⭐⭐⭐⭐ | Google Review → Payment |

---

# 💳 Payment

Supports

- Google Pay
- PhonePe
- Paytm
- BHIM
- Any UPI App

If no UPI app is installed, the payment QR is displayed.

---

# 🌐 Browser Support

- Google Chrome
- Safari
- Microsoft Edge
- Firefox
- Samsung Internet

---

# 📱 Mobile Support

- Android
- iPhone
- Tablets

---

# 🔧 Future Improvements

- Firebase Analytics
- Admin Dashboard
- QR Scan Counter
- Google Review Statistics
- Restaurant Dashboard
- Dark Mode
- Multiple Restaurant Branches
- Dynamic QR Management
- Push Notifications

---

# 👨‍💻 Developed For

**Dough N Dosa**

Shop No. 25 & 26

Tower 18

Purvanchal Royal City

Chi V

Greater Noida

India

---

# 📄 License

This project is developed exclusively for **Dough N Dosa**.

Unauthorized commercial redistribution is not permitted without permission.

---

# ❤️ Thank You

Thank you for visiting **Dough N Dosa**.

We truly appreciate your support.

Have a wonderful day!

🍽️❤️
# feeback_doughNdosa

# Setup & Run Instructions

[← Back to README](../README.md)

> A reviewer can get **Mysuru Macchegalu** running in under **30 seconds** without installing Node.js, Python, or Docker.

---

## Prerequisites

* Any modern web browser (Google Chrome, Microsoft Edge, Firefox, or Safari).

---

## 1. Quickest Run (No Installation)

Simply **double-click** `index.html` on any machine!

---

## 2. Running via Git Clone

```bash
# 1. Clone the repository
git clone https://github.com/iammysorechandan-maker/HM26-21B9-Nextora.git
cd HM26-21B9-Nextora

# 2. Open index.html directly in your browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

Or serve with any static web server:
```bash
npx serve .
# or
python -m http.server 8080
```

---

## 3. Seed Demo Data Loaded

The application comes pre-loaded with realistic Mysuru civic datasets:
* **Constituencies:** Krishnaraja (KR), Chamaraja, Narasimharaja (NR), Chamundeshwari.
* **Pre-mapped Representatives:** MP Yaduveer Wadiyar, MLAs (T.S. Srivatsa, K. Harish Gowda, Tanveer Sait, G.T. Devegowda), and local AEEs.
* **Pre-loaded Grievances:** 6 realistic issues (including **3 critical stale grievances > 20 days old** to demonstrate the aging alert engine).
* **Influencer Picks:** 3 civic spotlights ready for interactive upvoting.

---

## 4. Testing Offline Mode

1. Open the application in Google Chrome.
2. Open Chrome DevTools (`F12`), navigate to the **Network** tab, and toggle **Offline**.
3. File a new complaint or click **"Assign / Update Officer"** in the Officials Portal.
4. Notice that everything saves and updates immediately via `localStorage` with zero network dependency.

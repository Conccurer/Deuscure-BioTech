# Deuscure Biotech - Company Website

> **Reliable pharmaceutical distribution for healthcare providers, institutions, and businesses.**

Deuscure Biotech is a New Delhi-based pharmaceutical distribution company with 18+ years of operational experience. This repository contains the source code for the official company website - a multi-page static site built with HTML, CSS, and JavaScript.

---

## 🌐 Live Pages

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Landing page with hero, services overview, and CTA |
| About Us | `about.html` | Company background, mission, and values |
| Products | `products.html` | Product catalogue with dynamic info |
| Partners | `partners.html` | Pharmaceutical brand partners |
| Stockists | `stockits.html` | Authorised stockist locations |
| Contact | `contact.html` | Enquiry form and contact details |
| Product Info | `index-info.html` | Detailed product information view |

---

## 🛠️ Tech Stack

- **HTML5** - Semantic page structure
- **CSS3** - Custom styles (`styles.css`) with responsive layout, animations, and theming
- **Vanilla JavaScript** - Dynamic interactions (`main.js`, `products.js`, `product-info.js`, `contact.js`)
- **Google Fonts** - Inter & Playfair Display
- **No frameworks or build tools** - Pure static site, deployable anywhere

---

## 📁 Project Structure

```
Deuscure-BioTech/
├── index.html          # Home / landing page
├── about.html          # About the company
├── products.html       # Products catalogue
├── index-info.html     # Individual product detail view
├── partners.html       # Partner brands
├── stockits.html       # Stockist locations
├── contact.html        # Contact & enquiry form
├── styles.css          # Global stylesheet
├── main.js             # Core UI interactions & animations
├── products.js         # Products listing logic
├── product-info.js     # Product detail page logic
├── contact.js          # Contact form handling
└── IMAGES/             # All image and video assets
```

---

## ✨ Features

- **Animated splash screen** on page load
- **Responsive navigation** with mobile hamburger menu
- **Video service cards** - each distribution service showcased with a looping background video
- **Dynamic product catalogue** - products rendered via JavaScript from a data source
- **Embedded Google Map** showing the Karampura, New Delhi office location
- **Contact form** with client-side handling

---

## 🚀 Getting Started

No build step is required. Simply clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/Conccurer/Deuscure-BioTech.git
cd Deuscure-BioTech
open index.html   # or use Live Server in VS Code
```

For the best local experience (especially for video assets), serve the files via a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000` in your browser.

---

## 📦 Deployment

This is a static site with no backend dependencies. It can be deployed to any static hosting platform:

- **GitHub Pages** - push to `gh-pages` branch or configure from `main`
- **Netlify / Vercel** - drag and drop or connect this repository
- **Any web host** - upload all files to the root public directory

---

## 📬 Contact

**Deuscure Biotech**
- 📧 deusbiotech2020@gmail.com
- 📞 +91-9718374531
- 📍 Karampura, New Delhi, India - 110015

---

© 2026 Deuscure Biotech. All rights reserved.

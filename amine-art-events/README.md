# Amine Art Events — Website

A professional event management website built with React + Vite.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
The production files will be in the `dist/` folder — upload these to any web host.

### 4. Preview the production build locally
```bash
npm run preview
```

---

## 📁 Project Structure

```
amine-art-events/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Nav.jsx            # Navigation bar
│   │   ├── Footer.jsx         # Footer
│   │   └── ContactSection.jsx # Contact form
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── TestimonialsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── EventDetailPage.jsx
│   │   └── ServiceDetailPage.jsx
│   ├── App.jsx         # Main app + routing
│   ├── constants.js    # Colors, data (testimonials, services, nav)
│   ├── styles.js       # All CSS styles
│   ├── index.css       # Global reset + Google Fonts import
│   └── main.jsx        # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Customization

### Change content / text
Edit **`src/constants.js`** to update:
- Navigation items
- Testimonials (names + messages)
- Services (title, icon, description)

### Change colors
Also in **`src/constants.js`** — update the color variables at the top:
```js
export const GOLD = '#B8922A';
export const CREAM = '#F9F4ED';
// ...
```

### Add real images
Replace the emoji placeholders in the page files inside `src/pages/` with `<img>` tags pointing to your images placed in the `public/` folder.

Example:
```jsx
// Before (placeholder)
<div className="img-placeholder tall">
  <span>💍</span>
</div>

// After (real image)
<img src="/images/mariage.jpg" alt="Mariage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
```

### Update phone / social links
Edit **`src/components/ContactSection.jsx`** and **`src/components/Footer.jsx`**.

---

## 🌐 Deployment

After running `npm run build`, upload the `dist/` folder to:
- **cPanel hosting**: Upload to `public_html/`
- **Netlify / Vercel**: Drag and drop the `dist/` folder

---

## Requirements

- Node.js v18 or higher
- npm v8 or higher

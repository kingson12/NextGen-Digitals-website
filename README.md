# Tech Agency Website

A modern, professional Tech Agency website built with React, featuring smooth animations, responsive design, and a clean UI.

## Features

- ✨ Modern, sleek design with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🧭 React Router for navigation
- 🎯 5 complete pages (Home, About, Services, Portfolio, Contact)
- 🎭 Reusable components (Button, Card, NavBar, Footer)
- 🎪 Interactive portfolio filtering
- 📝 Contact form with validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
Tech-Website/
├── public/
│   └── index.html
├── src/
│   ├── components/      # Reusable components
│   │   ├── NavBar.js
│   │   ├── Footer.js
│   │   ├── Button.js
│   │   └── Card.js
│   ├── pages/          # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   └── Contact.js
│   ├── styles/         # Global styles
│   │   └── global.css
│   ├── assets/         # Images and static files
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
└── package.json
```

## Pages

- **Home**: Hero section, services preview, portfolio preview, testimonials
- **About**: Company introduction, mission & values, team section
- **Services**: Detailed service offerings with features
- **Portfolio**: Project showcase with category filtering
- **Contact**: Contact form and information

## Customization

### Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

### Content

Update the content in each page component file to match your needs.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Technologies Used

- React 18
- React Router DOM
- CSS3 (with CSS Variables)
- Modern JavaScript (ES6+)

## License

This project is open source and available for educational purposes.



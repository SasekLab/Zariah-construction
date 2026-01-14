# Azaria - Construction & Architecture React Template

A modern React + Vite + Tailwind CSS website for Azaria Construction. Originally built as a static HTML/CSS/JS template, this version maintains all the original functionality and design while leveraging modern React technologies.

## Project Structure

```
Azaria-Construction/
├── src/
│   ├── assets/           # Images, fonts, and icons
│   ├── components/
│   │   ├── layout/       # Header, Footer, Preloader
│   │   └── sections/     # Page sections (Hero, About, Services, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page components
│   ├── scripts/          # JavaScript initialization
│   ├── styles/           # Global CSS and Tailwind
│   ├── App.jsx           # Main app with routing
│   └── main.jsx          # Entry point
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Installation

```bash
# Navigate to the Azaria-Construction directory
cd Azaria-Construction

# Install dependencies
npm install
```

## Development

```bash
# Start the development server
npm run dev

# The app will be available at http://localhost:3000
```

## Build

```bash
# Create a production build
npm run build

# Preview the production build
npm run preview
```

## Features

- **React 18** - Latest React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Swiper** - Touch slider/carousel
- **WOW.js** - Scroll animations
- **jQuery Integration** - Preserved original jQuery plugins
- **Responsive Design** - Mobile-friendly layout

## Pages

- Home (`/`)
- About (`/about`)
- Contact (`/contact`)
- Services (`/service`, `/service-details`)
- Projects (`/project`, `/project-details`)
- Team (`/team`, `/team-details`)
- Blog (`/news`, `/news-details`, `/news-grid`)
- Shop (`/shop`, `/shop-details`, `/shop-cart`, `/shop-list`)
- Pricing (`/pricing`)
- Checkout (`/checkout`)
- Coming Soon (`/coming-soon`)
- 404 Page (`*`)

## Additional Home Pages

- Architecture (`/index-2`)
- Roofing (`/index-3`)
- Solar (`/index-4`)
- Industry (`/index-5`)

## Customization

### Tailwind Config

Edit `tailwind.config.js` to customize colors, fonts, and animations:

```javascript
theme: {
  extend: {
    colors: {
      'gt-primary': '#E63946',
      'gt-secondary': '#1D1D1D',
      // Add more custom colors
    },
    // Extend other theme properties
  }
}
```

### Component Styling

Most styles are applied using Tailwind utility classes. Custom styles that couldn't be converted to Tailwind are in `src/styles/index.css`.

### JavaScript Functionality

Original JavaScript logic is preserved in:
- `src/hooks/useMainScripts.js` - Main interactions (sticky header, cursor, scroll)
- `src/scripts/jquery-init.js` - jQuery and plugin initialization

## Notes

- Image paths use `/src/assets/...` format
- All original animations and interactions are preserved
- Bootstrap classes are preserved for backward compatibility
- jQuery dependencies are maintained for existing plugins

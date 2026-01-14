# Zariah Construction - Changelog

## 2026-01-14 - Header Navigation Updates

### File: `src/components/layout/Header.jsx`

#### Changes Made:

1. **Removed "Pages" menu item**
   - Removed the entire `<li>` element containing the "Pages" navigation link
   - Previously linked to `/news`

2. **Updated "About Us" navigation**
   - Changed from: `to="/about"`
   - Changed to: `to="/#about"`
   - Now routes to the about us section on the homepage

3. **Updated "Services" navigation**
   - Changed from: `to="/service-details"`
   - Changed to: `to="/#services"`
   - Now routes to the services section on the homepage

4. **Contact link unchanged**
   - Kept as `to="/contact"` - no changes made

5. **Hidden search button**
   - Commented out the search icon/button (magnifying glass)
   - Lines 152-159 replaced with comment

6. **Hidden hamburger/menu button**
   - Commented out the hamburger button with dot icon
   - Lines 160-166 replaced with comment

#### Current Navigation Structure:
- Home
- About Us → `/#about`
- Services → `/#services`
- Contact Us → `/contact`

---

## 2026-01-14 - Homepage Section Removals

### Files Modified: `src/pages/Home.jsx`, `src/components/layout/Header.jsx`

#### Changes Made:

1. **Removed Shop section from homepage**
   - Removed import: `import Shop from '../components/sections/Shop'`
   - Removed component usage: `<Shop />`
   - Shop section no longer displayed on homepage

2. **Removed News/Blog section from homepage**
   - Removed import: `import News from '../components/sections/News'`
   - Removed component usage: `<News />`
   - News/Blog section no longer displayed on homepage

3. **Removed Blog link from header navigation**
   - Removed `<li>` with NavLink to `/news-details`
   - "Blog" menu item no longer appears in header

#### Updated Homepage Section Order:
1. Hero
2. About
3. Services
4. Projects
5. Counter
6. Purposes
7. Brand
8. Testimonials
9. Faq
10. Cta

---

## 2026-01-14 - Fixed Smooth Scroll Navigation

### Files Modified: `src/components/sections/About.jsx`, `src/components/sections/Services.jsx`, `src/pages/Home.jsx`

#### Changes Made:

1. **Added section ID to About component**
   - Changed: `<section className="gt-about-section fix section-padding">`
   - To: `<section id="about" className="gt-about-section fix section-padding">`
   - Enables anchor navigation to `/#about`

2. **Added section ID to Services component**
   - Changed: `<section className="service-section-1 section-padding section-bg fix">`
   - To: `<section id="services" className="service-section-1 section-padding section-bg fix">`
   - Enables anchor navigation to `/#services`

3. **Added hash scroll handler to Home component**
   - Added `useLocation` hook from react-router-dom
   - Added useEffect to watch for hash changes
   - Scrolls to element with matching ID when hash changes
   - Uses `scrollIntoView({ behavior: 'smooth' })`

#### Testing Results:
- "About Us" link successfully scrolls to About section with smooth scroll
- "Services" link successfully scrolls to Services section with smooth scroll
- Both tested via Chrome DevTools MCP on localhost:3002

---

## 2026-01-14 - Favicon Placeholder (REVERTED)

### File Modified: `index.html`

#### Changes Made:

1. **Replaced favicon with placeholder** - REVERTED
   - Was changed to: Inline SVG with construction emoji (🏗️)
   - Reverted back to: `href="/src/assets/img/favicon.svg"`

---

## 2026-01-14 - FAQ Image Placeholder

### File Modified: `src/components/sections/Faq.jsx`

#### Changes Made:

1. **Replaced FAQ image with placeholder**
   - Removed import: `import faqImage from '../../assets/img/home-1/faq.jpg'`
   - Changed img src from: `{faqImage}`
   - Changed to: Inline SVG data URI (600x700, grey background #4B5563)
   - Uses "FAQ Image" text centered on grey background

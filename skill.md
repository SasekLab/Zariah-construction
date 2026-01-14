# Known Issues & Solutions - Azaria Construction Project

## WOW.js Animation Classes Causing Invisible Images

### Problem Description
When converting HTML templates to React + Vite, images with `wow` animation classes (specifically `img-custom-anim-left`, `img-custom-anim-right`, `img-custom-anim-top`) were not visible on the page. The images appeared in the DOM but had `opacity: 0`, making them invisible to users.

### Root Cause
The custom CSS animation classes set `opacity: 0` initially:
```css
.img-custom-anim-left {
  animation: img-anim-left 1.3s forwards cubic-bezier(0.645, 0.045, 0.355, 1) 0.4s;
  opacity: 0;  /* <-- This causes the issue */
}
```

The animations rely on WOW.js to trigger and set the opacity back to 1. However, when elements are already in the viewport on page load (common in SPA routing), WOW.js doesn't trigger the animation, leaving elements with `opacity: 0`.

### Affected Files
- `src/components/sections/Faq.jsx` - FAQ image
- `src/components/sections/About.jsx` - About section images (2 images)
- `src/components/sections/Purposes.jsx` - Purposes image
- `src/components/sections/Cta.jsx` - CTA image

### Solution
**Remove the problematic animation classes** from image elements:

Before:
```jsx
<div className="faq-image wow img-custom-anim-left">
  <img src={faqImage} alt="FAQ" />
</div>
```

After:
```jsx
<div className="faq-image">
  <img src={faqImage} alt="FAQ" />
</div>
```

### Alternative Solutions
If you want to keep the animations:

1. **Use different animation classes** that don't set `opacity: 0`:
   - `wow fadeInUp` (from animate.css) - only animates transform
   - These work correctly with WOW.js

2. **Manually trigger WOW.js** after component mount:
   ```jsx
   useEffect(() => {
     if (window.WOW) {
       new window.WOW().init()
     }
   }, [])
   ```

3. **Use CSS-in-JS or styled-components** to conditionally apply animations

### Additional CSS Fix for FAQ Section
The FAQ image also needed a z-index fix to appear above the orange overlay:

```css
/* In src/styles/main.css around line 3320 */
.faq-wrapper-new .faq-image {
  max-width: 570px;
  position: relative;  /* Added */
  z-index: 9;         /* Added - places image above ::before overlay */
}
```

### Testing Checklist
After fixing animation issues, verify:
- [ ] All images are visible (opacity: 1)
- [ ] Images appear above background overlays
- [ ] Images display on first page load
- [ ] Images display after navigation (SPA routing)
- [ ] No console errors related to missing assets

### Quick Verification Script
Run this in browser console to check image opacity:
```javascript
document.querySelectorAll('img').forEach(img => {
  const opacity = window.getComputedStyle(img).opacity;
  if (opacity === '0') {
    console.log('Hidden image:', img.src, img.parentElement);
  }
});
```

---

## Other Common Issues

### Image Import Path Errors
**Problem**: Images not loading - `Failed to resolve import` errors

**Solution**: Use correct relative paths from `src/components/sections/`:
```jsx
// CORRECT (2 levels up to src, then into assets)
import heroBg from '../../assets/img/home-1/hero/hero-bg.jpg'

// WRONG (only 1 level up)
import heroBg from '../assets/img/home-1/hero/hero-bg.jpg'
```

### CSS Source Map Warnings
**Problem**: `SourceMap` warnings for CSS files

**Solution**: Remove sourceMappingURL comments from CSS files:
```css
/* Remove this line: */
/*# sourceMappingURL=bootstrap.min.css.map */
```

# assets/fonts/

Currently the RDMS website loads fonts via Google Fonts CDN:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Self-Hosting Fonts (Production Optimization)

For better performance and GDPR compliance (no Google tracking), download and self-host:

1. Go to https://gwfh.mranftl.com/fonts (Google Webfonts Helper)
2. Search "Playfair Display" → select weights: 400, 600, 700, 900
3. Download zip → extract to this folder
4. Search "Plus Jakarta Sans" → select weights: 300, 400, 500, 600, 700
5. Download zip → extract to this folder

## Expected Files (after self-hosting)

```
assets/fonts/
├── playfair-display-v37-latin-regular.woff2
├── playfair-display-v37-latin-600.woff2
├── playfair-display-v37-latin-700.woff2
├── playfair-display-v37-latin-900.woff2
├── plus-jakarta-sans-v8-latin-300.woff2
├── plus-jakarta-sans-v8-latin-regular.woff2
├── plus-jakarta-sans-v8-latin-500.woff2
├── plus-jakarta-sans-v8-latin-600.woff2
└── plus-jakarta-sans-v8-latin-700.woff2
```

## @font-face CSS (add to <style> in index.html)

```css
@font-face {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('../assets/fonts/playfair-display-v37-latin-700.woff2') format('woff2');
}

@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../assets/fonts/plus-jakarta-sans-v8-latin-regular.woff2') format('woff2');
}
/* repeat for each weight */
```

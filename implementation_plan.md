# Frandy Insurance - White-Label Marketplace Implementation

This project is a high-performance, white-label insurance landing page designed to mimic the layout and lead-generation features of marketplace insurance sites while providing a more premium, modern aesthetic.

## Tech Stack
- **Framework**: Vite + React + TypeScript
- **Styling**: Vanilla CSS (CSS Variables for easy white-labeling)
- **Features**:
  - Automated lead-capture modal (3s delay)
  - Responsive design (Mobile / Tablet / Desktop)
  - Click-to-call functionality
  - Modern typography (Montserrat & Open Sans)

## Project Structure
- `src/App.tsx`: Main application structure and logic.
- `src/index.css`: Design system, global styles, and layout utilities.
- `src/assets/`: (Future) Locally stored images and logos.

## Customization (White-Labeling)
To customize the branding, update the CSS variables in `src/index.css`:

```css
:root {
  --primary-navy: #1A237E; /* Primary Brand Color */
  --secondary-orange: #FF5722; /* CTA Color */
  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;
}
```

To update the contact information, change the phone number in `src/App.tsx`:
```javascript
const phoneNumber = "(888) 576-9650";
const telHref = "tel:8885769650";
```

## Features Implemented
- [x] **Hero Section**: High-impact messaging and lead-gen CTA.
- [x] **Info Strip**: Highlighting urgency and current enrollment status.
- [x] **Service Benefits**: Informational grid explaining covered services.
- [x] **Lead Modal**: Automatic popup to drive conversions.
- [x] **Footer**: Professional disclaimer and brand reinforcement.
- [x] **Responsive Layout**: Seamless experience across all devices.

## How to Run
1. `npm install`
2. `npm run dev`

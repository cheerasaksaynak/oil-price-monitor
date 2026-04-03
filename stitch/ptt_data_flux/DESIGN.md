# Design System Document: The Fluid Authority

## 1. Overview & Creative North Star
**Creative North Star: "The Editorial Analyst"**

To track oil prices in the Thai market, we must move beyond a simple "spreadsheet" dashboard. Our goal is to create a digital experience that feels like a high-end financial journal—authoritative, precise, and sophisticated. This design system rejects the "boxed-in" nature of traditional SaaS layouts. Instead, it utilizes **Editorial Asymmetry** and **Tonal Layering** to guide the eye. 

We break the "template" look by using exaggerated typographic scales and white space as a structural element. The experience should feel like a custom-tailored suit: reliable and traditional at its core, but modern and sleek in its execution.

---

## 2. Colors & Atmospheric Depth
Our palette is rooted in professional trust (`primary: #003d7c`) and environmental clarity. We use color not just for decoration, but as a primary data carrier.

### The "No-Line" Rule
**Borders are forbidden for sectioning.** To define high-level content areas, use background shifts. A section should be defined by placing a `surface-container-low` block against a `surface` background. If you feel the need to draw a line, you haven't used your spacing scale or tonal shifts effectively.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
*   **Base Level:** `surface` (#f8f9fa) — The global canvas.
*   **Secondary Level:** `surface-container-low` (#f3f4f5) — Used for large structural sidebars or footer regions.
*   **Active Level:** `surface-container-lowest` (#ffffff) — Used for primary data cards to provide a "pop" of clarity.
*   **Interaction Level:** `surface-container-highest` (#e1e3e4) — Used for hover states and active selections.

### The "Glass & Gradient" Rule
To elevate the "Premium" feel, use **Glassmorphism** for floating navigation bars or contextual overlays. Apply a `surface` color at 80% opacity with a `20px` backdrop-blur. 
*   **Signature Textures:** For the main "Price Change" hero section, use a subtle linear gradient from `primary` (#003d7c) to `primary-container` (#0054a6). This adds "soul" and depth to the data, making numbers feel high-stakes and professional.

---

## 3. Typography: The Thai Sans-Serif Edge
We use a dual-font approach to balance international professional standards with Thai linguistic elegance.

*   **Display & Headlines (Be Vietnam Pro):** This is our "Editorial" voice. Use `display-lg` for daily price changes. The geometric nature of Be Vietnam Pro provides a "global finance" aesthetic.
*   **Body & Labels (Inter / IBM Plex Sans Thai):** For data density and Thai characters, we rely on the technical precision of Inter (and its Thai equivalent). 
*   **The Identity Shift:** Headlines should use a tighter letter-spacing (-0.02em) to feel "locked-in" and authoritative, while body text should have generous line-heights (1.6) to ensure legibility when scanning complex fuel tables.

---

## 4. Elevation & Depth
We define hierarchy through light and tone, never through heavy shadows or outlines.

*   **The Layering Principle:** Instead of a shadow, place a `surface-container-lowest` card inside a `surface-container` section. The subtle contrast creates a natural lift that feels integrated into the OS.
*   **Ambient Shadows:** If an element must float (e.g., a fuel selector dropdown), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(25, 28, 29, 0.06);`. Notice the color is a tinted version of `on-surface`, not pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a border, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components & Data Objects

### Fuel Type Chips (Signature Accents)
Fuel types are the heart of the dashboard. Do not use generic tags.
*   **Diesel:** `error` (#ba1a1a) background with `on-error` text.
*   **E20:** `on-tertiary-container` (#ffc107) modified to a green-leaning tint for the Thai market.
*   **Gasohol 95:** `tertiary_fixed` (#ffdf9e).
*   **Style:** Pill-shaped (`full` roundedness), using a subtle `0.5rem` horizontal padding to keep them compact.

### Data Cards & Lists
*   **Forbid Dividers:** Do not use 1px lines between price rows. Use `8px` of vertical white space and a `surface-container-low` hover state to separate items.
*   **Price Inputs:** Use `surface-container-lowest` with a `Ghost Border`. When focused, transition the border to `primary` (#003d7c) with a thickness of 2px for a "mechanical" feel.

### Buttons
*   **Primary:** Solid `primary` color. No border. `md` (0.375rem) roundedness. Use a subtle gradient transition on hover.
*   **Tertiary (Text-only):** Use `primary` color with `label-md` typography. These should be used for "View History" or "Details" to keep the UI clean.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Asymmetry:** Place the most important data (e.g., Current Diesel Price) in a large, off-center hero area to the left, with supporting trends to the right.
*   **Use Tonal Transitions:** Use `surface-dim` for background elements that need to recede, creating a "nested" look.
*   **Prioritize Thai Legibility:** Ensure `IBM Plex Sans Thai` has sufficient leading (line-height) to prevent Thai vowel stacking from feeling cluttered.

### Don’t:
*   **Don't use "Card Shadows":** Do not apply shadows to every data container. It creates visual "noise." Use background color shifts instead.
*   **Don't use Pure Black:** Use `on-surface` (#191c1d) for text. Pure black is too harsh for a professional dashboard and reduces readability over long periods.
*   **Don't use Dividers:** If you find yourself reaching for a `<hr>` or a border-bottom, stop. Use a `1.5rem` gap or a subtle background tint change instead.
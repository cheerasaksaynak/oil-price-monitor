# Project Specification: The Fluid Authority

## 1. Project Overview

**Project Name:** The Fluid Authority  
**Type:** Thai Fuel Price Monitoring Dashboard  
**Framework:** Next.js 14+ (App Router)  
**Language:** TypeScript  
**Target Audience:** Thai consumers and analysts tracking fuel prices

### Purpose
A sophisticated, editorial-style dashboard for monitoring and analyzing Thai fuel prices from major providers (PTT and Bangchak). The application moves beyond traditional spreadsheet-style dashboards to deliver a high-end financial journal experience.

---

## 2. Technical Stack

### Core Framework
- **Next.js 14+** - App Router with Server Components
- **TypeScript** - Strict mode enabled
- **React 18+** - Server and client components

### UI & Styling
- **Tailwind CSS** - Utility-first styling
- **Custom Design System** - Based on "Editorial Analyst" creative direction
- **Fonts:**
  - Be Vietnam Pro (Display & Headlines)
  - Inter (Body & Labels - Latin)
  - IBM Plex Sans Thai (Thai characters)
- **Icons:** Material Symbols Outlined

### Data & State Management
- **React Server Components** - Primary data fetching
- **React Query / SWR** - Client-side data fetching and caching
- **Zustand / Context API** - Client state management

### Data Sources
- PTT Station API
- Bangchak Corporation API
- CSV export functionality

### Additional Libraries
- **Chart.js / Recharts** - Data visualization
- **date-fns** - Date manipulation
- **clsx / tailwind-merge** - Dynamic class handling

---

## 3. Design System (Creative North Star: "Editorial Analyst")

### Color Palette
```typescript
const colors = {
  primary: '#003d7c',          // Professional trust
  'primary-container': '#0054a6',
  surface: '#f8f9fa',          // Base canvas
  'surface-container-low': '#f3f4f5',
  'surface-container-lowest': '#ffffff',
  'surface-container-highest': '#e1e3e4',
  'on-surface': '#191c1d',     // Text (not pure black)
  error: '#ba1a1a',            // Diesel
  'on-tertiary-container': '#ffc107',  // E20
  'tertiary_fixed': '#ffdf9e', // Gasohol 95
  // ... full palette in tailwind.config
}
```

### Typography Scale
- **Display Large:** Fuel price changes, hero numbers
- **Headlines:** Be Vietnam Pro, tight letter-spacing (-0.02em)
- **Body:** Inter/IBM Plex Sans Thai, line-height 1.6
- **Labels:** Inter, compact for data density

### Design Principles
1. **No Borders Rule** - Use background color shifts instead of lines
2. **Editorial Asymmetry** - Offset important data, avoid grid uniformity
3. **Tonal Layering** - Create depth through color, not shadows
4. **Glassmorphism** - Floating nav with 80% opacity + 20px blur
5. **Ghost Borders** - Only for accessibility, 15% opacity outline-variant

---

## 4. Feature Requirements

### 4.1 Dashboard (Home Page)
**Route:** `/`

**Features:**
- Large hero section with current day's fuel prices
- Live update indicator
- Price change cards for each fuel type:
  - Gasohol 95
  - Gasohol 91
  - E20
  - Diesel B7
- "Top Price Changes" widget
- 5-day price summary table
- Market insights section (editorial content)
- Station selector (PTT/Bangchak)

**Data Display:**
- Current price (THB/liter)
- Change from previous day (+/- with color coding)
- Last updated timestamp
- Station name and location

### 4.2 Price History
**Route:** `/price-history`

**Features:**
- Historical pricing table
- Date range selector
- Fuel type filters (multi-select checkboxes)
- Station filters
- Sorting by date/price/change
- CSV export functionality
- Last 10-150 entries display
- Price change indicators (+0.60, -0.20, 0.00)

**Data Fields:**
- Date (Thai Buddhist calendar format)
- Station name
- Fuel type (with colored chips)
- Price (THB/liter)
- Change amount
- Change percentage

### 4.3 Trends & Analytics
**Route:** `/trends`

**Features:**
- Interactive line charts (daily/monthly/quarterly views)
- Comparative analysis between fuel types
- Volatility score indicator
- Peak price indicator
- Average margin calculation
- Price prediction insights (if available)
- Global index comparison

**Visualizations:**
- Multi-line chart for fuel type comparison
- Hover tooltips with exact values
- Color-coded lines matching fuel type chips
- Date range selector
- Export chart as image

### 4.4 Navigation
- **Desktop:** Fixed left sidebar (64px width)
  - Dashboard
  - Price History
  - Trends
  - Admin Access (bottom)

- **Mobile:** Top navigation with hamburger menu
- **Search:** Fuel type search in top bar
- **Theme:** Date picker and CSV download in top right

---

## 5. Component Architecture

### Core Components
```
/components
  /ui
    - Button.tsx
    - Card.tsx
    - FuelChip.tsx
    - PriceCard.tsx
    - DataTable.tsx
    - DatePicker.tsx
    - Checkbox.tsx
  /layout
    - Sidebar.tsx
    - TopNav.tsx
    - Header.tsx
  /dashboard
    - HeroSection.tsx
    - PriceChangeCard.tsx
    - TopPriceChanges.tsx
    - PriceSummaryTable.tsx
    - MarketInsightCard.tsx
  /history
    - PriceHistoryTable.tsx
    - FilterPanel.tsx
    - ExportButton.tsx
  /trends
    - PriceTrendChart.tsx
    - ViewToggle.tsx (Daily/Monthly/Quarterly)
    - VolatilityScore.tsx
    - ComparativeAnalysis.tsx
```

### Page Structure
```
/app
  - layout.tsx (Root layout with fonts, providers)
  - page.tsx (Dashboard)
  /price-history
    - page.tsx
  /trends
    - page.tsx
  /api
    /prices
      - route.ts (API endpoint for price data)
```

---

## 6. Data Model

### Price Entry
```typescript
interface PriceEntry {
  id: string;
  date: Date;
  station: 'PTT Station' | 'Bangchak';
  fuelType: 'GASOHOL_95' | 'GASOHOL_91' | 'E20' | 'DIESEL_B7';
  price: number; // THB per liter
  change: number; // +/- from previous day
  changePercent: number;
  location?: string;
}
```

### Fuel Type Configuration
```typescript
interface FuelTypeConfig {
  id: string;
  label: string;
  labelTh: string;
  color: string;
  bgColor: string;
}
```

### Chart Data
```typescript
interface ChartDataPoint {
  date: string;
  gasohol95: number;
  gasohol91: number;
  e20: number;
  dieselB7: number;
}
```

---

## 7. API Integration

### Endpoints (To be implemented)
```
GET /api/prices/current
GET /api/prices/history?from=DATE&to=DATE&fuelType=TYPE&station=STATION
GET /api/prices/trends?period=PERIOD
GET /api/stations
```

### Response Format
```json
{
  "success": true,
  "data": [...],
  "meta": {
    "lastUpdated": "2024-05-24T05:00:00+07:00",
    "count": 10
  }
}
```

---

## 8. Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- Sidebar converts to hamburger menu
- Hero section stacks vertically
- Tables scroll horizontally
- Charts resize to single column
- Reduced padding and spacing

---

## 9. Performance Requirements

- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Lighthouse Score:** > 90
- **Bundle Size:** < 200KB (initial JS)

### Optimization Strategies
- Server-side rendering for initial page load
- Image optimization with Next.js Image component
- Code splitting by route
- Memoization of expensive calculations
- Lazy loading for charts and images

---

## 10. Internationalization

### Languages
- **Primary:** Thai (th)
- **Secondary:** English (en)

### Date Formats
- Thai Buddhist calendar (พ.ศ.)
- Buddhist year = Gregorian year + 543

### Number Formats
- Thai decimal separator: "."
- Currency: "฿" or "บาท"
- Price precision: 2 decimal places

---

## 11. Development Phases

### Phase 1: Foundation (Week 1-2)
- [ ] Initialize Next.js project with TypeScript
- [ ] Set up Tailwind CSS with custom design tokens
- [ ] Implement core layout components (Sidebar, TopNav)
- [ ] Create design system components (Button, Card, FuelChip)
- [ ] Set up font loading (Be Vietnam Pro, Inter, IBM Plex Sans Thai)

### Phase 2: Dashboard (Week 3-4)
- [ ] Build hero section with gradient
- [ ] Implement price change cards
- [ ] Create data table component
- [ ] Add fuel type filters
- [ ] Integrate mock data API

### Phase 3: Price History (Week 5)
- [ ] Build filterable table
- [ ] Add date range selector
- [ ] Implement CSV export
- [ ] Add pagination

### Phase 4: Trends & Charts (Week 6)
- [ ] Integrate charting library
- [ ] Build interactive line charts
- [ ] Add view toggles (daily/monthly/quarterly)
- [ ] Implement comparative analysis

### Phase 5: Polish & Deploy (Week 7-8)
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Mobile responsive testing
- [ ] Deploy to Vercel/production

---

## 12. File Structure

```
oil-price-monitor/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── price-history/
│   │   └── page.tsx
│   ├── trends/
│   │   └── page.tsx
│   └── api/
│       └── prices/
│           └── route.ts
├── components/
│   ├── ui/
│   ├── layout/
│   ├── dashboard/
│   ├── history/
│   └── trends/
├── lib/
│   ├── utils.ts
│   ├── constants.ts
│   └── api.ts
├── types/
│   └── index.ts
├── public/
│   └── fonts/
├── styles/
│   └── design-tokens.css
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 13. Testing Strategy

- **Unit Tests:** Jest + React Testing Library
- **E2E Tests:** Playwright
- **Visual Regression:** Chromatic
- **Accessibility:** axe-core

---

## 14. Deployment

**Platform:** Vercel (recommended) or self-hosted  
**Environment Variables:**
- `NEXT_PUBLIC_API_BASE_URL`
- `DATABASE_URL` (if applicable)
- `NEXT_PUBLIC_GTM_ID` (Google Tag Manager)

**CI/CD:**
- GitHub Actions for automated testing
- Automatic preview deployments on PR
- Production deployment on main branch merge

---

## 15. Future Enhancements

- [ ] Real-time price alerts via email/LINE notification
- [ ] Station locator map
- [ ] Price prediction ML model
- [ ] Mobile app (React Native)
- [ ] Admin dashboard for data management
- [ ] API for third-party integration
- [ ] Historical data export (PDF reports)
- [ ] Multi-currency support for international comparison

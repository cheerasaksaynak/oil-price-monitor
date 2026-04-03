# The Fluid Authority - Oil Price Monitor

A sophisticated, editorial-style dashboard for monitoring and analyzing Thai fuel prices from major providers (PTT and Bangchak).

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🎯 Project Overview

The Fluid Authority reimagines fuel price tracking as a high-end financial journal experience—authoritative, precise, and sophisticated. Built with Next.js 14+ and TypeScript, this application delivers:

- **Editorial Design System** - Custom Material Design-inspired palette
- **Thai Language Support** - Full i18n with Buddhist calendar
- **Real-time Price Tracking** - Monitor Gasohol, Diesel, and E20 prices
- **Historical Analytics** - Price trends and comparative analysis
- **Responsive Design** - Mobile-first approach

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd oil-price-monitor

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
oil-price-monitor/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Dashboard (home)
│   ├── globals.css        # Global styles
│   ├── price-history/     # Price history page
│   └── trends/            # Trends & analytics page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── layout/           # Layout components
│   └── dashboard/        # Dashboard-specific components
├── lib/                   # Utility functions
│   ├── utils.ts          # Helper functions
│   └── constants.ts      # App constants
├── types/                 # TypeScript type definitions
│   └── index.ts
├── stitch/               # Design reference files
│   └── ptt_data_flux/
│       └── DESIGN.md     # Design system documentation
├── public/               # Static assets
├── spec.md              # Full project specification
└── package.json
```

## 🎨 Design System

### Creative North Star: "The Editorial Analyst"

The design system rejects the "boxed-in" nature of traditional SaaS layouts and utilizes:

- **Editorial Asymmetry** - Off-center layouts for visual interest
- **Tonal Layering** - Color-based hierarchy instead of borders
- **Glassmorphism** - Floating navigation with backdrop blur
- **No-Line Rule** - Borders forbidden; use background shifts

### Color Palette

```css
--primary: #003d7c;          /* Professional trust */
--surface: #f8f9fa;          /* Base canvas */
--error: #ba1a1a;            /* Diesel tag */
--on-tertiary-container: #ffc107;  /* E20 tag */
--tertiary-fixed: #ffdf9e;   /* Gasohol tag */
```

### Typography

- **Be Vietnam Pro** - Headlines & display text
- **Inter** - Body text & labels (Latin)
- **IBM Plex Sans Thai** - Thai characters

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14+** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Utility-first styling |
| **Material Symbols** | Icon system |
| **React Server Components** | Performance optimization |

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🌐 Features

### Dashboard
- Live fuel price cards (Gasohol 95/91, E20, Diesel B7)
- Price change indicators
- Station comparison (PTT vs Bangchak)
- Recent price history table

### Price History (Planned)
- Filterable historical data table
- Date range selector
- CSV export functionality
- Multi-fuel type comparison

### Trends & Analytics (Planned)
- Interactive line charts
- Daily/monthly/quarterly views
- Volatility scoring
- Comparative analysis

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_API_BASE_URL=https://api.yourservice.com
DATABASE_URL=postgresql://...
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Tailwind Configuration

Custom design tokens are defined in `tailwind.config.ts` based on the Material Design system documented in `stitch/ptt_data_flux/DESIGN.md`.

## 📝 Development Roadmap

- [x] Phase 1: Project initialization
- [x] Phase 1: Design system setup
- [x] Phase 1: Dashboard layout
- [ ] Phase 2: API integration
- [ ] Phase 3: Price history page
- [ ] Phase 4: Trends & charts
- [ ] Phase 5: Production deployment

See [spec.md](./spec.md) for detailed requirements.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the project owner.

## 📜 License

Private - All rights reserved

## 📚 Documentation

- [Full Project Specification](./spec.md) - Comprehensive requirements
- [Design System](./stitch/ptt_data_flux/DESIGN.md) - Creative guidelines
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

---

**Built with ❤️ for Thai fuel price transparency**

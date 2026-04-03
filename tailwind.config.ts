import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // The Fluid Authority Design System Colors
        "tertiary": "#513b00",
        "surface": "#f8f9fa",
        "primary-fixed": "#d6e3ff",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#fabd00",
        "inverse-primary": "#a9c7ff",
        "primary-container": "#0054a6",
        "on-tertiary": "#ffffff",
        "primary": "#003d7c",
        "surface-dim": "#d9dadb",
        "secondary-container": "#cfe6f2",
        "error": "#ba1a1a",
        "inverse-on-surface": "#f0f1f2",
        "surface-container-highest": "#e1e3e4",
        "on-surface-variant": "#424751",
        "on-secondary": "#ffffff",
        "on-primary-fixed-variant": "#00468c",
        "surface-bright": "#f8f9fa",
        "primary-fixed-dim": "#a9c7ff",
        "surface-variant": "#e1e3e4",
        "on-tertiary-container": "#ffc107",
        "on-tertiary-fixed-variant": "#5b4300",
        "outline": "#727783",
        "on-primary-fixed": "#001b3d",
        "on-secondary-fixed-variant": "#354a53",
        "surface-tint": "#185eb0",
        "surface-container-low": "#f3f4f5",
        "on-surface": "#191c1d",
        "error-container": "#ffdad6",
        "on-primary": "#ffffff",
        "outline-variant": "#c2c6d3",
        "surface-container": "#edeeef",
        "background": "#f8f9fa",
        "on-primary-container": "#afcbff",
        "tertiary-container": "#6d5100",
        "secondary-fixed-dim": "#b4cad6",
        "secondary": "#4c616c",
        "inverse-surface": "#2e3132",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "on-background": "#191c1d",
        "on-tertiary-fixed": "#261a00",
        "secondary-fixed": "#cfe6f2",
        "tertiary-fixed": "#ffdf9e",
        "on-secondary-container": "#526772",
        "surface-container-high": "#e7e8e9",
        "on-secondary-fixed": "#071e27"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        "be-vietnam": ["var(--font-be-vietnam)", "sans-serif"],
        "inter": ["var(--font-inter)", "sans-serif"],
        "ibm-plex-thai": ["var(--font-ibm-plex-thai)", "sans-serif"],
      },
      letterSpacing: {
        'editorial': '-0.02em',
      },
      lineHeight: {
        'editorial': '1.6',
      },
      backdropBlur: {
        'editorial': '20px',
      },
    },
  },
  plugins: [],
};

export default config;

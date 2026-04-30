# React + Tailwind Scaffold

This scaffold provides a minimal Vite + React + Tailwind setup with a `Navbar`, `Footer`, and three pages: `Home`, `About`, and `Contact`.

You requested to handle routing yourself; this project leaves routing unconnected so you can integrate `react-router` or another router of your choice.

Quick start:

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Files of interest:

- `src/components/Navbar.jsx` — top navigation
- `src/components/Footer.jsx` — footer
- `src/pages/{Home,About,Contact}.jsx` — page placeholders
- `src/App.jsx` — app layout (replace content with your router)
- `tailwind.config.cjs`, `postcss.config.cjs`, `src/index.css` — Tailwind setup

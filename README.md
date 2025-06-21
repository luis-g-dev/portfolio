# 🖱️ Mousefulness ⌨️ Portfolio Website 

This is the portfolio website for the Mousefulness project, built with Next.js, React, and Tailwind CSS. It showcases modern web development skills and best practices, including:

- **App Directory Routing:** 🗂️ Utilizes Next.js' app directory for file-based routing, enabling clean and scalable navigation between pages and sections.
- **Dynamic Theme Switching:** 🎨 Implements a custom context and provider for switching between multiple "vibe" backgrounds (coffee, cozy, code), allowing users to personalize the look and feel in real time.
- **Reusable UI Components:** 🧩 Features a library of modular, accessible UI components (cards, tabs, buttons, dialogs, etc.) designed for consistency and maintainability.
- **Responsive Design:** 📱 Fully responsive layout and components, ensuring a great experience across devices.
- **Static Export & GitHub Pages Deployment:** 🌍 The site is statically exported and configured for deployment to GitHub Pages, with all routing and asset paths adjusted for subpath hosting so everything works from the correct URL.
- **TypeScript & Modern Tooling:** 🛠️ Built with TypeScript for type safety, and leverages modern tools like Tailwind CSS, PostCSS, and pnpm for efficient development.
- **Turbopack for Blazingly Fast Development:** ⚡ Uses Next.js with Turbopack for rapid local development and optimized builds.

> **Note:** This repository contains only the portfolio website. The main Mousefulness application and its source code are available in a separate repository.

## 🥾 Getting Started 🥾

1. **Install dependencies:**
   ```sh
   pnpm install
   ```
2. **Run locally:**
   ```sh
   pnpm dev
   ```
3. **Build for GitHub Pages:**
   ```sh
   pnpm build && pnpm export
   ```
   The static site will be output to the `out/` directory, ready for deployment.

## Features ✨

- Next.js app directory routing
- Custom theme context and backgrounds
- Turbopack for fast local development
- Modular, accessible UI components
- Responsive and modern design
- Static export for GitHub Pages
- TypeScript, Tailwind CSS, and PostCSS integration

---

For more information about the Mousefulness project itself, including the main application and its features, please refer to the main project repository.

# Henry's Top Notch | Premium HVAC Digital Solutions

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css)
![AWS](https://img.shields.io/badge/AWS_SES-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)

> **Elevate your company's digital presence with a high-performance platform built on the cutting-edge Next.js 16 and React 19 architecture.**

---

## What is Henry's Top Notch?

**Henry's Top Notch** is an enterprise-grade web solution specifically engineered for the **HVAC (Heating, Ventilation, and Air Conditioning)** industry. By leveraging the latest releases of the React ecosystem, we provide a platform that is not just modern, but future-proof.

Our focus: **Ultra-fast performance, elite UI/UX via HeroUI, and high-conversion lead generation.**

---

## Software Features

- **Bleeding-Edge Stack:** Powered by **Next.js 16** and **React 19** (Concurrent Mode) for unparalleled speed.
- **HeroUI & Design System:** Utilizing premium, accessible UI components for a polished, professional look.
- **Advanced i18n System:** Custom-built translation builder (`i118builder`) for seamless multilingual management and SEO across regions.
- **Enterprise Lead Generation:** Integrated **AWS SESv2** support for reliable, scalable transactional emails.
- **Visual Excellence:** Optimized image processing via **Sharp** and interactive, touch-ready sliders via **Swiper 12**.
- **Performance First:** Optimized for Core Web Vitals with advanced caching and streaming strategies.

---

## Technical Specifications

| Technology       | Version    | Purpose                                                         |
| :--------------- | :--------- | :-------------------------------------------------------------- |
| **Next.js**      | 16.1.x     | App Router, Server Actions, and advanced hybrid rendering.      |
| **React**        | 19.2.x     | Latest features including improved Hooks and hydration.         |
| **Tailwind CSS** | 4.1.x      | Next-gen utility-first styling engine with PostCSS integration. |
| **HeroUI**       | 3.0 (Beta) | Modern, high-performance accessible component library.          |
| **TypeScript**   | 5.7.x      | Strict type-safety for enterprise-level maintainability.        |
| **AWS SDK**      | 3.9x       | High-deliverability email infrastructure.                       |

---

## Project Architecture

The project is organized for scalability and clear separation of concerns:

- `src/app/`: Application entry point, routing, and locale-based layouts.
- `src/common/`: Shared UI components and global modules.
- `src/features/`: Business-specific modules (Services, Testimonials, Hero sections).
- `src/i18n/`: Internationalization utilities and routing helpers.
- `i118builder/`: Specialized TypeScript tool for compiling localized messages.
- `messages/`: Centralized JSON translation files for global reach.

---

## Development & Workflow

This project enforces high code quality through an automated pipeline:

- **Parallel Execution:** `npm run dev` uses `concurrently` to watch translation changes and run the Next.js server.
- **Strict Linting:** Enforced via **ESLint 10** and **Prettier 3**.
- **Git Safety:** **Husky** and **Lint-staged** ensure only valid, formatted code is committed.
- **Type Integrity:** Continuous background type-checking via `tsc`.

### Key Commands

```bash
# Install dependencies
npm install

# Start development (with i18n watcher)
npm run dev

# Build for production
npm run build
```

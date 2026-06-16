# 3d_portfolio

Interactive 3D developer portfolio built with Three.js and React. All sections — hero, skills, projects, timeline, contact — are rendered inside a WebGL scene with smooth camera animations between them.

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white)

---

## Features

- **3D hero scene** — interactive computer model rendered in WebGL, responds to mouse movement
- **Skill cards** — tilt effect on hover (`react-tilt`), each technology has its own 3D ball
- **Vertical timeline** — work and education history with scroll-triggered animations
- **Project showcase** — each card opens a 3D planet model with GitHub and live demo links
- **Contact form** — sends email directly from the browser via EmailJS (no backend)
- **Smooth transitions** — section entrances animated with Framer Motion

## Stack

| | Technology |
|---|---|
| 3D renderer | Three.js, `@react-three/fiber`, `@react-three/drei` |
| UI | React 18, React Router v6 |
| Styling | Tailwind CSS |
| Animations | Framer Motion, `maath` (Three.js math utils) |
| 3D interaction | `react-tilt` |
| Email | `@emailjs/browser` |
| Bundler | Vite |

## Project structure

```
src/
├── components/
│   ├── canvas/          Three.js scenes
│   │   ├── Computers.jsx    Hero — interactive computer model
│   │   ├── Ball.jsx         Skill spheres (takes texture prop)
│   │   └── Earth.jsx        Contact section globe
│   ├── Hero.jsx
│   ├── About.jsx         Skills grid with tilt cards
│   ├── Experience.jsx    Vertical timeline
│   ├── Tech.jsx          Technology balls
│   ├── Works.jsx         Project cards with planet models
│   └── Contact.jsx       EmailJS form + Earth canvas
│
├── constants/index.js   All content — experience, projects, skills, social links
├── hoc/SectionWrapper.jsx  HOC — adds scroll animation to any section
└── utils/motion.js      Framer Motion variant presets
```

## Run locally

```bash
npm install
npm run dev
# → http://localhost:5173
```

To enable the contact form, create a free account at [emailjs.com](https://emailjs.com) and add your credentials to `src/constants/index.js`:

```js
export const emailjsConfig = {
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY",
}
```

## Architecture note

All page content lives in `src/constants/index.js` — adding a new project, skill, or job means editing only that file. Canvas components are decoupled from content: `Ball.jsx` accepts a texture prop, scenes mount into any parent via `<Canvas>`. This makes the portfolio easy to customize without touching the 3D code.

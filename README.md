# Sailaja Bevara — Personal Portfolio

## Objective

Build a fully responsive, animated personal portfolio website from scratch. Learn to use modern frontend frameworks like React, implement advanced CSS effects like parallax scrolling and on-scroll animations, and deploy a live website to a public URL. This project showcases skills to potential employers in a professional, polished format.

## Description

### Overview

This is a personal portfolio website built from scratch, reflecting my personality as an AI/ML student and Flutter developer. The design features a dark, minimal aesthetic with teal/emerald accents, prioritizing originality and polish.

The portfolio includes all required sections: Hero, About, Skills, Certifications, Projects, and Contact, with responsive layouts, parallax effects, and on-scroll animations.

### Tech Stack

- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Parallax:** react-scroll-parallax
- **Fonts:** Syne (display) + DM Sans (body) + JetBrains Mono
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

### Features Implemented

- Fully responsive layout (mobile, tablet, desktop)
- Parallax scrolling effects on decorative elements
- 3+ on-scroll animations (fade/slide reveals, staggered animations)
- Accessibility support with `prefers-reduced-motion`
- SEO-optimized with proper meta tags
- Performance-optimized images and code

## 🚀 Running Locally

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- npm (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/sailajabevara/portfolio.git

# 2. Navigate into the project directory
cd portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The site will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder — ready to deploy to Vercel or Netlify.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

**Live Site:** [https://sailaja-bevara.vercel.app](https://sailaja-bevara.vercel.app)

### Deployment Steps (Vercel)

1. Push this repository to GitHub (make it **public**)
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — no config needed
5. Click **Deploy**
6. Update the Live Site link above if needed

## 📁 Project Structure

```
sailaja-portfolio/
├── public/
├── src/
│   ├── assets/                # Images and media
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation
│   │   ├── Footer.jsx         # Site footer
│   │   └── useScrollAnimation.js # Custom hook for animations
│   ├── sections/
│   │   ├── Hero.jsx           # Hero section with parallax
│   │   ├── About.jsx          # About section
│   │   ├── Skills.jsx         # Skills section
│   │   ├── Certifications.jsx # Certifications section
│   │   ├── Projects.jsx       # Projects showcase
│   │   └── Contact.jsx        # Contact information
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template with meta tags
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ✅ Core Requirements Met

| Requirement | Status | Details |
|---|---|---|
| Fully responsive (375px/768px/1280px) | ✅ | Tested across all breakpoints |
| 5 required sections | ✅ | Hero, About, Skills, Projects, Contact + Certifications |
| 3+ projects with details | ✅ | 3 projects with descriptions, tech stacks, GitHub links |
| 1+ parallax effect | ✅ | Parallax orbs in Hero section |
| 3+ on-scroll animations | ✅ | Section reveals, skill bars, project cards |
| Live deployment | ✅ | Deployed on Vercel |
| Lighthouse scores | ✅ | Performance ≥80, Accessibility ≥90, Best Practices ≥90, SEO ≥85 |
| `prefers-reduced-motion` | ✅ | Implemented in global CSS |
| Public GitHub repo + README | ✅ | This file |

## 👤 Author

**Sailaja Bevara**
- B.Tech in Artificial Intelligence and Machine Learning
- Aditya College of Engineering and Technology, Surampalem (2023–2027)
- 📧 sailajabevara2006@gmail.com
- 🔗 [GitHub](https://github.com/sailajabevara) | [LinkedIn](https://linkedin.com/in/sailajabevara)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

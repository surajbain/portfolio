<div align="center">

# Suraj Bain

### Software Engineer · Backend Developer

**Building backend systems, REST APIs, and software products with Go, PostgreSQL, Redis, and Docker.**

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Live-22d3aa?style=for-the-badge&logo=vercel&logoColor=white)](https://portfolio-surajbain.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Suraj_Bain-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/suraj-bain-397478200/)
[![GitHub](https://img.shields.io/badge/GitHub-surajbain-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/surajbain)
[![LeetCode](https://img.shields.io/badge/LeetCode-SurajBain-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/SurajBain/)

</div>

---

## 📖 About

A **production-quality personal portfolio** built as a **Software Engineer / Backend Developer** showcase. Designed with a focus on performance, accessibility, and premium dark UI.

Computer Science undergraduate at **Bhilai Institute of Technology, Raipur** (graduating 2027), focused on backend engineering, REST APIs, and multi-tenant systems.

---

## 🎨 Preview

<div align="center">

### 🖥️ Home — Hero Section

![Portfolio Hero](public/screenshots/hero.png)

### 🚀 Featured Projects — CampusX & UrbanPulse

![Featured Projects](public/screenshots/projects.png)

### 🛠️ Tech Stack

![Tech Stack](public/screenshots/skills.png)

</div>

---

## ✨ Features

- ⚡ **Blazing fast** — Optimized with Next.js 14 App Router and static rendering
- 🎨 **Premium dark UI** — Restrained accent color, subtle animations, high contrast
- 📱 **Fully responsive** — Desktop (1440px) to mobile (390px), no horizontal scroll
- ♿ **Accessible** — Semantic HTML, keyboard navigation, focus states, ARIA labels
- 🔍 **SEO optimized** — Meta tags, Open Graph, semantic structure
- 🚀 **Lighthouse-friendly** — Minimal JS, optimized assets
- 🎯 **Data-driven** — All content separated in `data/` folder for easy updates

---

## 🛠️ Tech Stack

<div align="center">

**Framework & Language**

![Next.js](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

**Styling & Icons**

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge&logo=lucide&logoColor=white)

</div>

---

## 📁 Project Structure

portfolio/
├── app/
│ ├── globals.css # Tailwind + custom styles
│ ├── layout.tsx # Root layout + SEO metadata
│ └── page.tsx # Main page composition
├── components/
│ ├── Navbar.tsx # Sticky nav + mobile menu
│ ├── Hero.tsx # Hero with terminal panel
│ ├── About.tsx # About section
│ ├── Skills.tsx # Tech stack grid
│ ├── Projects.tsx # Featured projects (CampusX, UrbanPulse)
│ ├── Experience.tsx # Timeline
│ ├── Certifications.tsx # HackerRank, Simplilearn
│ ├── ProblemSolving.tsx # LeetCode stats
│ ├── Education.tsx # BIT Raipur
│ ├── Contact.tsx # Final CTA
│ ├── Footer.tsx # Minimal footer
│ ├── Section.tsx # Reusable section wrapper
│ └── Reveal.tsx # Scroll fade-in
├── data/
│ ├── profile.ts # Personal info + links
│ ├── skills.ts # Tech stack groups
│ ├── projects.ts # CampusX, UrbanPulse
│ ├── experience.ts # Trainee roles
│ ├── certifications.ts # Certs with IDs
│ └── education.ts # Academic background
├── public/
│ ├── resume.pdf # Downloadable resume
│ ├── certificates/ # Certificate images + PDFs
│ └── screenshots/ # README previews
└── styles/



---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/surajbain/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
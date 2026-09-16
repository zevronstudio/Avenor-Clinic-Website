# 🏥 Avenor Medical Clinic Website

A modern, responsive, and elegant medical clinic web application built with **Next.js**, **React 19**, **TypeScript**, and **Tailwind CSS**. Designed for healthcare providers to showcase their services, introduce their doctors, answer frequently asked questions, and allow patients to request appointments online.

---

## 🌟 Key Features

- **Hero & Value Proposition**: Engaging hero section with instant appointment booking CTAs and trust badges.
- **Medical Services Showcase**: Comprehensive overview of clinic services (Primary Care, Preventive Health, Specialty Medicine).
- **About & Statistics**: Highlights clinic credentials, experience ratings (4.9/5), and patient community reach.
- **Doctor Profiles**: Clean cards introducing specialists and department doctors.
- **Interactive Appointment Booking Form**:
  - Filter doctors based on selected department.
  - Date and contact details validation.
  - Interactive submission confirmation state.
- **Interactive FAQs**: Accordion-style FAQ section for quick patient inquiries.
- **Responsive Navigation**: Mobile-first responsive header with mobile drawer menu and fast anchor links.
- **SEO & Performance Ready**: Includes OpenGraph metadata, theme color configuration, `robots.txt`, and `sitemap.xml`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Package Manager**: [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (Node `v20+` recommended)
- **Package Manager**: `npm` (bundled with Node.js) or `pnpm`

---

## 🚀 How to Run the Project

Follow these simple steps to run the project locally on your machine:

### 1. Open Terminal & Navigate to Project Directory
Make sure your terminal is opened in the project root folder:
```bash
cd "d:/Zevron Projects/Clinic Website"
```

### 2. Install Dependencies
Install the required packages using **npm**:
```bash
npm install
```
*(Or if you use `pnpm`: `pnpm install`)*

### 3. Run Development Server
Start the local Next.js development server:
```bash
npm run dev
```
*(Or if you use `pnpm`: `pnpm dev`)*

### 4. Open in Browser
Once the server starts, open your browser and navigate to:
```
http://localhost:3000
```

---

## 📦 Available Scripts

In the project directory, you can run:

| Command (npm) | Command (pnpm) | Description |
| :--- | :--- | :--- |
| `npm run dev` | `pnpm dev` | Starts the development server at `http://localhost:3000` with hot-reloading |
| `npm run build` | `pnpm build` | Compiles and builds the production application |
| `npm run start` | `pnpm start` | Runs the built production server |

---

## 📁 Project Structure

```text
├── app/
│   ├── globals.css        # Global CSS styles & Tailwind configuration
│   ├── layout.tsx         # Root layout with HTML headers and metadata
│   └── page.tsx           # Main clinic landing page & appointment form
├── components/            # Reusable UI components
├── lib/
│   └── utils.ts           # Helper utilities (clsx, tailwind-merge)
├── public/                # Static assets (images, icons, robots.txt, sitemap.xml)
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies & scripts
├── pnpm-lock.yaml         # Dependency lockfile
└── tsconfig.json          # TypeScript configuration
```

---

## 📄 License & Credits

Created for **Avenor Medical Clinic**. All rights reserved.

# Portfolio

[🔗 Live Preview](https://ayush-devx.vercel.app/)


Welcome to my personal portfolio repository! This project showcases my work, skills, and experience through a modern, responsive, and dynamic web application built with Next.js and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **UI Components**: shadcn
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Code Formatting**: Prettier
- **Deployment**: Vercel
- **Linting**: ESLint

## 📁 Project Structure

```ts
.
├── .env.sample                 # Sample environment variables
├── .gitignore                  # Git ignored files and directories
├── .prettierignore             # Files ignored by Prettier
├── .prettierrc                 # Prettier configuration
├── README.md                   # Project documentation
├── components.json             # Component metadata for shadcn
├── eslint.config.mjs           # ESLint configuration
├── next-env.d.ts               # TypeScript definitions for Next.js
├── next.config.ts              # Next.js custom configuration
├── package.json                # Project metadata and dependencies
├── postcss.config.mjs          # PostCSS plugins configuration
├── public
│   └── robots.txt              # SEO configuration for search engine crawlers
├── src                         # Source code directory
│   ├── app                     # Application routes and layout
│   │   ├── data.ts             # Data used across the app (e.g., projects list)
│   │   ├── favicon.ico         # Favicon icon
│   │   ├── globals.css         # Global CSS styles
│   │   ├── layout.tsx          # Root layout wrapper
│   │   ├── not-found.tsx       # Custom 404 Not Found page
│   │   ├── opengraph-image.png    # Image used for Open Graph meta tags
│   │   ├── page.tsx            # Home page component
│   │   ├── projects            # Dynamic project pages
│   │   │   └── [slug]          # Route for individual project page
│   │   │       ├── layout.tsx     # Layout for individual project
│   │   │       └── page.tsx       # Project detail page
│   │   └── sitemap.ts          # Generates sitemap for SEO
│   ├── assets                  # Static image assets
│   ├── components              # Reusable and modular UI components
│   │   ├── navbar              # Components related to navigation bar
│   │   ├── sections            # Sections for main pages (about, projects, etc.)
│   │   └── ui                  # Base UI components
│   └── lib                     # Utility and helper functions
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json               # TypeScript compiler options
```

## 🌟 Features

- **Dynamic Project Pages**: Uses Next.js dynamic routing for individual project pages.
- **Responsive Design**: Optimized for all screen sizes using Tailwind CSS.
- **Smooth Animations**: Framer Motion provides fluid animations for a better user experience.
- **Modular Components**: Organized UI components with shadcn for better maintainability.
- **SEO Optimized**: Implements best practices for SEO and performance.

## 📦 Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/its-ayush543/portfolio-Ayush.git
   cd portfolio-Ayush
   ```

2. Install dependencies:

   ```sh
   yarn
   ```

3. Run the development server:

   ```sh
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📌 Deployment

This portfolio can be easily deployed using **Vercel**.

To deploy on Vercel:

1. Install Vercel CLI:
   ```sh
   npm install -g vercel
   ```
2. Run:
   ```sh
   vercel
   ```
3. Follow the CLI instructions to deploy!

---

Feel free to reach out if you have any questions or suggestions. 🚀

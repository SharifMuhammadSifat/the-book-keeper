# 📚 TheBookKeeper

A modern, full-stack web application designed for book lovers to explore, borrow, and manage book collections with secure authentication and dynamic user profiles.

---

## 🚀 Live Demo
- **Production URL:** [https://the-book-keeper-fawn.vercel.app](https://the-book-keeper-fawn.vercel.app)

---

## 📦 NPM Packages Used

### 🔹 Core Framework & Runtime
- **[next](https://www.npmjs.com/package/next)** (`v16.2.7`) - React framework for server-side rendering, static site generation, routing proxy, and API routes.
- **[react](https://www.npmjs.com/package/react)** (`v19.2.4`) - Core library for building user interfaces with React 19.
- **[react-dom](https://www.npmjs.com/package/react-dom)** (`v19.2.4`) - DOM-specific methods for React.

### 🔹 Authentication & Database
- **[better-auth](https://www.npmjs.com/package/better-auth)** (`v1.6.26`) - Comprehensive, type-safe authentication framework supporting Email/Password and Google OAuth.
- **[@better-auth/mongo-adapter](https://www.npmjs.com/package/@better-auth/mongo-adapter)** (`v1.6.23`) - MongoDB database adapter for Better Auth.
- **[mongodb](https://www.npmjs.com/package/mongodb)** (`v7.3.0`) - Official MongoDB driver for Node.js.

### 🔹 UI Components, Styling & Icons
- **[tailwindcss](https://www.npmjs.com/package/tailwindcss)** (`v4.x`) - Utility-first CSS framework for custom styling.
- **[@tailwindcss/postcss](https://www.npmjs.com/package/@tailwindcss/postcss)** (`v4.x`) - PostCSS plugin integration for Tailwind CSS v4.
- **[daisyui](https://www.npmjs.com/package/daisyui)** (`v5.5.23`) - Component library plugin for Tailwind CSS.
- **[@heroui/react](https://www.npmjs.com/package/@heroui/react)** (`v3.1.0`) - Modern React UI component library.
- **[@heroui/styles](https://www.npmjs.com/package/@heroui/styles)** (`v3.1.0`) - Core styling modules for HeroUI.
- **[react-icons](https://www.npmjs.com/package/react-icons)** (`v5.7.0`) - Popular icon pack including FontAwesome, Material Icons, and more.

### 🔹 Forms, Animations & Notifications
- **[react-hook-form](https://www.npmjs.com/package/react-hook-form)** (`v7.85.0`) - Performant, flexible form validation and state management.
- **[react-toastify](https://www.npmjs.com/package/react-toastify)** (`v11.1.0`) - Customizable toast notifications for user actions and alerts.
- **[react-fast-marquee](https://www.npmjs.com/package/react-fast-marquee)** (`v1.6.5`) - Lightweight marquee component for scrolling text and announcements.
- **[animate.css](https://www.npmjs.com/package/animate.css)** (`v4.1.1`) - Cross-browser CSS animation library.

### 🔹 Developer Tools & Compilers
- **[babel-plugin-react-compiler](https://www.npmjs.com/package/babel-plugin-react-compiler)** (`v1.0.0`) - React Compiler plugin for automatic memoization and optimization.
- **[eslint](https://www.npmjs.com/package/eslint)** (`v9.x`) - JavaScript/React linter for code quality.
- **[eslint-config-next](https://www.npmjs.com/package/eslint-config-next)** (`v16.2.7`) - ESLint configuration rules for Next.js applications.

---

## 🛠️ Getting Started

### 1. Prerequisites
- Node.js (v18.17.0 or higher)
- npm / yarn / pnpm

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/SharifMuhammadSifat/the-book-keeper.git
cd the-book-keeper
npm install
```

### 3. Environment Variables Setup
Create a `.env` file in the root directory and add the following:

```env
# Better Auth
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Production Build
```bash
npm run build
npm run start
```

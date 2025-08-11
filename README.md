# 🌍 EthicBizz — Building Ethical Innovators of Tomorrow

Welcome to the official repository for **EthicBizz**, a futuristic ed-tech platform equipping school students (Grades 9–12) with real-world skills, ethical frameworks, and career-aligned exposure. Built with love, code, and mission — this website showcases everything that makes EthicBizz a new standard in value-driven education.

---

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

1. **Node.js** (version 18.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

3. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

4. **VS Code** (recommended editor)
   - Download from: https://code.visualstudio.com/

---

## 📥 Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/ethicbizz-website.git

# Navigate to the project directory
cd ethicbizz-website
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

This will install all dependencies listed in `package.json` including:
- React 18.3.1
- TypeScript
- Tailwind CSS
- Vite (build tool)
- React Router DOM
- Lucide React (icons)

### Step 3: Environment Setup (Optional)

If you need environment variables, create a `.env` file in the root directory:

```bash
# Create environment file
touch .env
```

Add any required environment variables:
```env
VITE_API_URL=your_api_url_here
VITE_CONTACT_EMAIL=hello@ethicbizz.org
```

---

## 🏃‍♂️ Running the Project

### Development Mode

```bash
# Start the development server
npm run dev
```

This will:
- Start the Vite development server
- Open your browser to `http://localhost:5173`
- Enable hot module replacement (HMR)
- Show real-time changes as you edit files

### Production Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

### Linting

```bash
# Check for code quality issues
npm run lint
```

---

## 🛠️ VS Code Setup

### Recommended Extensions

Install these VS Code extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets**
   - Extension ID: `dsznajder.es7-react-js-snippets`

2. **Tailwind CSS IntelliSense**
   - Extension ID: `bradlc.vscode-tailwindcss`

3. **TypeScript Importer**
   - Extension ID: `pmneo.tsimporter`

4. **Auto Rename Tag**
   - Extension ID: `formulahendry.auto-rename-tag`

5. **Prettier - Code formatter**
   - Extension ID: `esbenp.prettier-vscode`

6. **GitLens**
   - Extension ID: `eamodio.gitlens`

### VS Code Settings

Create `.vscode/settings.json` in your project root:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["className\\s*=\\s*[\"'`]([^\"'`]*)[\"'`]", "([a-zA-Z0-9\\-:]+)"]
  ]
}
```

### VS Code Tasks

Create `.vscode/tasks.json` for quick commands:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Dev Server",
      "type": "shell",
      "command": "npm run dev",
      "group": "build",
      "presentation": {
        "echo": true,
        "reveal": "always",
        "focus": false,
        "panel": "new"
      }
    },
    {
      "label": "Build Production",
      "type": "shell",
      "command": "npm run build",
      "group": "build"
    },
    {
      "label": "Run Linter",
      "type": "shell",
      "command": "npm run lint",
      "group": "test"
    }
  ]
}
```

---

## 📁 Project Structure

```
ethicbizz-website/
├── public/                 # Static assets
│   ├── Screenshot*.png     # Logo and images
│   └── _redirects         # Netlify redirects
├── src/                   # Source code
│   ├── components/        # Reusable components
│   │   ├── Layout.tsx     # Main layout wrapper
│   │   ├── LiveChat.tsx   # AI chatbot component
│   │   └── QuoteRotator.tsx
│   ├── pages/            # Page components
│   │   ├── Home.tsx      # Homepage
│   │   ├── About.tsx     # About page
│   │   ├── programs/     # Program pages
│   │   │   ├── YDP.tsx   # Youth Development Program
│   │   │   ├── SSP.tsx   # Senior Secondary Program
│   │   │   └── ...       # Other programs
│   │   └── ...           # Other pages
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

---

## 🎨 Development Workflow

### 1. Making Changes

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Edit files** in VS Code - changes will appear instantly in the browser

4. **Test your changes** thoroughly

### 2. Adding New Pages

1. Create a new file in `src/pages/`:
   ```tsx
   // src/pages/NewPage.tsx
   import React from 'react';
   
   const NewPage: React.FC = () => {
     return (
       <div className="min-h-screen bg-white">
         <h1>New Page</h1>
       </div>
     );
   };
   
   export default NewPage;
   ```

2. Add the route in `src/App.tsx`:
   ```tsx
   import NewPage from './pages/NewPage';
   
   // Add to Routes
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Update navigation in `src/components/Layout.tsx`

### 3. Styling Guidelines

- Use **Tailwind CSS** classes for styling
- Follow the **glass morphism** design system
- Use **responsive design** principles
- Maintain **consistent spacing** (8px system)

### 4. Component Guidelines

- Use **TypeScript** for all components
- Follow **React hooks** patterns
- Use **Lucide React** for icons
- Keep components **modular** and **reusable**

---

## 🔧 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   # Or use a different port
   npm run dev -- --port 3000
   ```

2. **Node modules issues**:
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript errors**:
   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

4. **Build errors**:
   ```bash
   # Clear Vite cache
   rm -rf dist .vite
   npm run build
   ```

### Getting Help

- Check the browser console for errors
- Use VS Code's integrated terminal
- Check the Network tab for API issues
- Review the Vite documentation: https://vitejs.dev/

---

## 🚀 Deployment

### Local Preview

```bash
# Build and preview locally
npm run build
npm run preview
```

### Production Deployment

The project is configured for deployment on:
- **Netlify** (recommended)
- **Vercel**
- **GitHub Pages**

Build command: `npm run build`
Publish directory: `dist`

---

## 🧠 What Is EthicBizz?

**EthicBizz** is not just a learning platform — it's a **movement for ethical innovation**. We enable high school students to explore cutting-edge domains like AI, Design, Entrepreneurship, Cybersecurity, and Ethics — with real mentors, real projects, and real-world impact.

---

## 🎯 Core Offerings

The site highlights the complete EthicBizz ecosystem:

- 🎓 **YDP, SSP, ECP, ERWA, EPC** — Flagship student programs for skill and mindset development
- 🧭 **Find Your Program** — Psychometric-style AI quiz to help students discover their ideal pathway
- 💡 **Mentor Spotlights** — Featuring industry experts shaping future minds
- 📚 **Resource Rooms** — AI-powered ethical dilemma simulator, alumni case studies, reading lounge
- 🧠 **AI Assistant** — Smart live chatbot trained on EthicBizz content for intelligent support
- 📝 **Web3Forms Integration** — Seamless contact, demo, volunteer & partnership forms
- 📰 **Dynamic Blog System** — Driven by MDX/Ghost CMS for deep educational content
- 📽 **Video Learning Library** — Bite-sized content organized by skill level, topic & purpose (Coming soon)

---

## 🛠️ Tech Stack

This site is fully production-ready and built on modern tooling:

- ⚛️ **React 18** + **TypeScript** + **TailwindCSS**
- 🚀 **Vite** – Lightning-fast build tool and dev server
- 🎨 **Glass Morphism** – Modern design system with glassmorphic effects
- 🌐 **Web3Forms** – Serverless secure forms (mentor, volunteer, school requests)
- 🔄 **React Router** – Client-side routing for SPA experience
- 🎯 **Lucide React** – Beautiful, customizable icons
- 📱 **Responsive Design** – Mobile-first approach with Tailwind breakpoints
- 🎭 **Custom Animations** – CSS animations and transitions
- 💬 **AI Chatbot** – Advanced conversational AI with context awareness

---

## 👨‍💻 Developer & Maintainer

> Passionately designed and coded by:

**Aftab Alam**  
Product Developer  
📧 thechillpixel.care@gmail.com  
🌐 [https://www.ethicbizz.org](https://www.ethicbizz.org)

---

## 🧾 Copyright & Usage

© 2025 **EthicBizz. All Rights Reserved.**  
All source code, design assets, educational material, and interactive components are the exclusive intellectual property of **EthicBizz**.

Unauthorized reproduction, redistribution, or reuse of this platform's material — in full or part — is strictly prohibited without express written permission.

---

## 🚧 Disclaimer

> This is a **live and authentic ed-tech platform**.  
> No fake stats. No placeholders. No demos.  
> All content reflects real progress, real people, and a real mission.

---

## ✅ Key Features (v2.0 Rollout)

- [x] AI chatbot trained on full website content
- [x] Psychometric logic in "Find Your Program"
- [x] Interactive dropdown-based nav UX
- [x] Glass morphism design system
- [x] Footer FAQ engine (AI-aware)
- [x] Full legal suite (Privacy Policy, Terms, Cookies)
- [x] Fully responsive, futuristic UI
- [x] Ready for production + SEO optimized
- [x] Comprehensive local development setup

---

## 🔐 Legal Pages

- [Privacy Policy](https://www.ethicbizz.org/legal)
- [Terms of Service](https://www.ethicbizz.org/legal)
- [Cookie Policy](https://www.ethicbizz.org/legal)
- [Code of Conduct](https://www.ethicbizz.org/legal)

---

## 🧭 Navigation Tree (Dropdown Logic)

- 🔍 `Find Your Program`  
  └── Career Simulator (Psychometric AI Test)

- 📚 `Resources`  
  ├── AI Dilemma Simulator  
  └── Reading Room (Alumni & Case Studies)

- 💼 `About`  
  └── Internships & Alumni Portal

- 🤖 `AI Assistant`  
  └── Fixed floating button (site-wide logic)

---

## 🤝 Contribution & Future Roadmap

This is a closed-source product meant for impact delivery, not open collaboration.  
However, partnerships, mentorships, and volunteer interest are always welcome via our contact form.

Coming Soon:

- Admin dashboard (external) for content & stats control
- Program-specific CMS
- Voice-based learning AI assistant
- Internship tracking dashboard

---

> ✨** Built with intention. Driven by values.**  
> **EthicBizz is here to make education meaningful again.**
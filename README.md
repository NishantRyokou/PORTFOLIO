# Portfolio

A modern, responsive full-stack developer portfolio built with React, Tailwind CSS, Vite, and Motion animations.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- ⚡ Fast development with Vite
- 🎬 Smooth animations with Motion library
- 📱 Fully responsive design
- 🔥 Live GitHub projects integration
- ✉️ Contact form functionality
- 📊 Showcase of skills and experience

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/NishantRyokou/PORTFOLIO.git
   cd PORTFOLIO
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Deploy to Vercel

The easiest way to deploy this portfolio is with [Vercel](https://vercel.com).

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New" → "Project"
4. Select this repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

Your portfolio will be live with automatic deployments on every git push!

**Environment Variables on Vercel:**
- Add `VITE_GEMINI_API_KEY` in Vercel project settings if using Gemini AI features

## Tech Stack

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Build Tool:** Vite
- **Animations:** Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run TypeScript type checking
- `npm run clean` - Remove dist folder

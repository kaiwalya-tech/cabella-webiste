# Cabella Pizzeria Website - Project Structure & Documentation

## 📋 Project Overview

A responsive React + Tailwind CSS website for Cabella Pizzeria built with Vite, TypeScript, and modern web standards.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Navigation.tsx       # Top navigation bar component
│   ├── sections/
│   │   └── HeroSection.tsx      # Hero section with pizza imagery & text
│   └── common/                   # Common reusable components (for future)
├── constants/                    # Constants & configuration (for future)
├── types/                        # TypeScript type definitions (for future)
├── assets/
│   ├── logo.png
│   ├── hero_section_pizza_slice.png
│   ├── icons/
│   │   ├── character1.png
│   │   ├── character2.png
│   │   ├── character3.png
│   │   ├── text_3_lines_left.png
│   │   └── text_3_lines_right.png
│   ├── images/                  # Product images
│   ├── combos/                  # Combo images
│   └── menu items/              # Menu item images
├── App.tsx                       # Main app component
├── main.tsx                      # React entry point
└── index.css                     # Tailwind CSS & global styles
```

## 🎨 Design System

### Colors
- **Primary**: `#F78022` (Orange - for highlighting text)
- **Text Border**: `#521717` (Dark brown - for text outlines)
- **Text Color**: `#000000` (Black - main text)
- **Background**: `#ffffff` (White)

### Typography
- **Headlines**: Impact (Regular)
- **Body Text**: Lexend Deca (Regular, Semi Bold, Extra Bold)

### Tailwind Configuration
The project includes custom Tailwind configuration with:
- Extended color palette with `primary`, `textBorder`, and `dark` colors
- Custom font families (`impact`, `lexend`)
- Custom spacing scale
- Custom font size scale

## 🚀 Running the Project

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:5173/` in your browser.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: Default styles
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px), `xl:` (1280px)

All components use Tailwind's responsive utilities for proper scaling across devices.

## 🎯 Components

### Navigation Component (`Navigation.tsx`)
- Sticky top navigation with logo
- Navigation links: Our Story, Menu, Order Online, Reserve Table
- Mobile-responsive with hamburger menu placeholder
- Hover effects with primary color transition

### Hero Section Component (`HeroSection.tsx`)
- Featured pizza slice image with drop shadow
- Responsive text layout with Impact and Lexend Deca fonts
- Three character design elements for visual appeal
- Decorative text border elements
- Highlighted text with primary color background
- Fully responsive grid layout

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 3.4.1** - Utility-first CSS
- **Vite 7.2.4** - Fast build tool
- **PostCSS & Autoprefixer** - CSS processing

## 📝 Styling Guidelines

### Utility Classes
1. **Text Outline** (`.text-outline`) - Creates outlined text effect
2. **Text Highlight Primary** (`.text-highlight-primary`) - Highlights text with primary color and black background

### Font Usage
- Use `font-impact` for headlines and large text
- Use `font-lexend` for body text and descriptions
- Adjust weight with `font-semibold` (600), `font-bold` (700), `font-extrablack` (800)

## 🔄 Next Steps

The project is set up for easy expansion:
1. Create additional section components in `src/components/sections/`
2. Add common reusable components in `src/components/common/`
3. Define shared types in `src/types/`
4. Store constants and configuration in `src/constants/`

## 📦 Dependencies

### Runtime
- react
- react-dom

### Development
- typescript
- tailwindcss
- postcss
- autoprefixer
- vite
- eslint
- @types/react
- @types/react-dom
- @vitejs/plugin-react

## ✅ Code Quality

- Follows React best practices
- TypeScript for type safety
- ESLint for code consistency
- Responsive design with Tailwind utilities
- Semantic HTML structure
- Accessible navigation

---

**Last Updated**: January 9, 2026
**Status**: Hero Section & Navigation Complete - Ready for Expansion

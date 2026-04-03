# DevBlog Design System

## Overview
Simple, professional full-stack developer blog with Swiss Modernism 2.0 influence.

## Color Palette

### Light Mode
- **Primary**: `#2563EB` (Blue 600)
- **Secondary**: `#3B82F6` (Blue 500)
- **Accent/CTA**: `#F97316` (Orange 500)
- **Background**: `#F8FAFC` (Slate 50)
- **Surface**: `#FFFFFF` (White)
- **Text Primary**: `#1E293B` (Slate 800)
- **Text Secondary**: `#64748B` (Slate 500)
- **Border**: `#E2E8F0` (Slate 200)

### Dark Mode
- **Primary**: `#3B82F6` (Blue 500)
- **Secondary**: `#60A5FA` (Blue 400)
- **Accent/CTA**: `#FB923C` (Orange 400)
- **Background**: `#0F172A` (Slate 900)
- **Surface**: `#1E293B` (Slate 800)
- **Text Primary**: `#F1F5F9` (Slate 100)
- **Text Secondary**: `#94A3B8` (Slate 400)
- **Border**: `#334155` (Slate 700)

## Typography

### Font Stack
- **Sans-serif**: `Inter, system-ui, -apple-system, sans-serif`
- **Monospace**: `JetBrains Mono, IBM Plex Mono, Menlo, monospace`

### Type Scale
- **Display**: 3rem (48px), font-weight: 700
- **H1**: 2.25rem (36px), font-weight: 700
- **H2**: 1.5rem (24px), font-weight: 600
- **H3**: 1.25rem (20px), font-weight: 600
- **Body**: 1rem (16px), font-weight: 400, line-height: 1.75
- **Small**: 0.875rem (14px), font-weight: 400
- **Code**: 0.875rem (14px), monospace

## Spacing
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Container max-width: 1280px (7xl)
- Content max-width: 768px (md)

## Border Radius
- **Small**: 6px
- **Medium**: 8px
- **Large**: 12px
- **Full**: 9999px (pills)

## Shadows
- **sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1)`
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1)`

## Motion
- **Duration**: 150-300ms
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover**: scale(1.02) on cards
- **Focus**: ring-2 ring-primary ring-offset-2

## Layout
- Grid system: 12 columns
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile-first approach

## Components

### Button
- Height: 40px (default), 48px (lg)
- Padding: 12px 20px
- Border-radius: 8px
- Font-weight: 500
- Hover: brightness increase
- Focus: ring-2

### Card
- Background: surface color
- Border: 1px solid border color
- Border-radius: 12px
- Padding: 24px
- Hover: subtle shadow elevation

### Badge
- Height: 24px
- Padding: 4px 10px
- Border-radius: 9999px
- Font-size: 12px
- Font-weight: 500

### Input
- Height: 40px
- Border-radius: 8px
- Border: 1px solid border color
- Focus: ring-2 ring-primary

## Anti-patterns to Avoid
- No emojis as icons (use Lucide icons)
- No gradient backgrounds on large areas
- No heavy shadows or glows
- No decorative animations
- No horizontal scroll
- Minimum touch target: 44x44px

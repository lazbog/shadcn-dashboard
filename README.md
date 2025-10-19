# shadcn-dashboard

A modern dashboard built with Next.js 14, TypeScript, and Tailwind CSS, featuring shadcn/ui components.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3003](http://localhost:3003) with your browser to see the result.

## Features

- Beautifully designed UI components from shadcn/ui
- Dark mode support with smooth transitions
- Fully responsive design
- TypeScript for type safety
- Modern stack with Next.js 14 App Router
- Tailwind CSS for styling
- Interactive stats dashboard
- Feature cards showcasing capabilities

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide React (icons)
- next-themes (dark mode)

## Project Structure

```
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── feature-card.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
├── public/
├── .gitignore
├── components.json
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Components

This project includes several reusable components:

- **Button**: Animated button with multiple variants
- **Card**: Interactive card component with header, content, and footer
- **FeatureCard**: Custom card for displaying features
- **ThemeToggle**: Button to toggle between light and dark themes

## API

The project includes a health check endpoint at `/api/ping` that returns a JSON response with the current status and timestamp.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
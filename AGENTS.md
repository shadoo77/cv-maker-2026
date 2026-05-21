# AGENTS.md

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck then build (`tsc -b && vite build`)
- `npm run lint` — ESLint (flat config)
- `npm run preview` — preview production build

Run `lint` before `build`. There are no tests.

## Architecture

Single-page CV builder. Entry point: `src/main.tsx` → `src/App.tsx`.

- `src/components/templates/` — three CV template components (NeoMinimal, DarkTech, CreativeGlass)
- `src/components/shared/` — reusable UI cards, icons, tags
- `src/data/cvData.ts` — hardcoded CV content (bilingual: en/nl)
- `src/hooks/usePrint.ts` — print/export logic
- `src/utils/colorMap.ts` — accent color definitions
- `dist/` — build output, do not edit

## Key quirks

- **Path alias**: `@/` resolves to `src/` (configured in `vite.config.ts` and `tsconfig.app.json`)
- **Tailwind v4** via `@tailwindcss/vite` plugin — no `tailwind.config.js` or PostCSS
- **TypeScript strictness**: `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `verbatimModuleSyntax` — avoid enums, unused imports, or non-erasable syntax
- **Prettier**: single quotes, semicolons, 2-space tabs, `prettier-plugin-tailwindcss` active

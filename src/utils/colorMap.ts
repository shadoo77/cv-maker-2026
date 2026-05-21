import type { AccentColor, ColorClasses } from '../types/cv';

export const colorMap: Record<AccentColor, ColorClasses> = {
  cyan: {
    primary: 'text-cyan-500 dark:text-cyan-400',
    bg: 'bg-cyan-500',
    border: 'border-cyan-500',
    accentLight: 'bg-cyan-500/10 text-cyan-500 dark:text-cyan-400',
    textHover: 'hover:text-cyan-500 dark:hover:text-cyan-400',
    gradient: 'from-cyan-500 to-blue-600',
  },
  violet: {
    primary: 'text-violet-500 dark:text-violet-400',
    bg: 'bg-violet-500',
    border: 'border-violet-500',
    accentLight: 'bg-violet-500/10 text-violet-500 dark:text-violet-400',
    textHover: 'hover:text-violet-500 dark:hover:text-violet-400',
    gradient: 'from-violet-500 to-fuchsia-600',
  },
  emerald: {
    primary: 'text-emerald-500 dark:text-emerald-400',
    bg: 'bg-emerald-500',
    border: 'border-emerald-500',
    accentLight: 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400',
    textHover: 'hover:text-emerald-500 dark:hover:text-emerald-400',
    gradient: 'from-emerald-500 to-teal-600',
  },
  amber: {
    primary: 'text-amber-500 dark:text-amber-400',
    bg: 'bg-amber-500',
    border: 'border-amber-500',
    accentLight: 'bg-amber-500/10 text-amber-500 dark:text-amber-400',
    textHover: 'hover:text-amber-500 dark:hover:text-amber-400',
    gradient: 'from-amber-500 to-orange-600',
  },
  rose: {
    primary: 'text-rose-500 dark:text-rose-400',
    bg: 'bg-rose-500',
    border: 'border-rose-500',
    accentLight: 'bg-rose-500/10 text-rose-500 dark:text-rose-400',
    textHover: 'hover:text-rose-500 dark:hover:text-rose-400',
    gradient: 'from-rose-500 to-pink-600',
  },
};

import { Sparkles, Sun, Moon, Printer, Languages } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';
import type { AccentColor, Template } from '@/types/cv';

type ControlPanelProps = ComponentPropsWithoutRef<'header'> & {
  darkMode: boolean;
  onDarkModeChange: (dark: boolean) => void;
  accentColor: AccentColor;
  onAccentColorChange: (color: AccentColor) => void;
  activeTemplate: Template;
  onTemplateChange: (template: Template) => void;
  cvLanguage: 'en' | 'nl';
  onLanguageChange: (lang: 'en' | 'nl') => void;
  onPrint: () => void;
};

const colorOptions: { key: AccentColor; bg: string }[] = [
  { key: 'cyan', bg: 'bg-cyan-400' },
  { key: 'violet', bg: 'bg-violet-400' },
  { key: 'emerald', bg: 'bg-emerald-400' },
  { key: 'amber', bg: 'bg-amber-400' },
  { key: 'rose', bg: 'bg-rose-400' },
];

const templateOptions: { key: Template; label: string }[] = [
  { key: 'neo-minimal', label: 'الحد الأدنى (Minimal)' },
  { key: 'dark-tech', label: 'المظهر المظلم (Dark)' },
  { key: 'creative-glass', label: 'الإبداعي (Glass)' },
  { key: 'ats', label: 'ATS (نص بسيط)' },
];

export function ControlPanel({
  darkMode,
  onDarkModeChange,
  accentColor,
  onAccentColorChange,
  activeTemplate,
  onTemplateChange,
  cvLanguage,
  onLanguageChange,
  onPrint,
  className,
  ...props
}: ControlPanelProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-20 border-b border-slate-200 bg-white shadow-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-900 print:hidden',
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 xl:flex-row">
        <div className="flex w-full items-center justify-between gap-3 xl:w-auto xl:justify-start">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 p-2 text-white shadow-lg shadow-cyan-500/20">
              <Sparkles className="h-6 w-6 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
                مستعرض السير الذاتية الفائقة
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                تحكم باللغات والسمات الداكنة/الفاتحة، ثم صدّر لصفحة واحدة A4
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-950">
          <button
            onClick={() => onDarkModeChange(false)}
            className={`rounded-lg p-2 transition-all ${
              !darkMode
                ? 'bg-white text-amber-500 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            title="السمة المضيئة"
          >
            <Sun className="h-4 w-4" />
          </button>
          <button
            onClick={() => onDarkModeChange(true)}
            className={`rounded-lg p-2 transition-all ${
              darkMode
                ? 'bg-slate-900 text-cyan-400 shadow-md'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            title="السمة المظلمة"
          >
            <Moon className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-100 p-1 dark:border-slate-800 dark:bg-slate-950">
          <Languages className="mr-1 ml-2 h-4 w-4 text-slate-500 dark:text-slate-400" />
          <button
            onClick={() => onLanguageChange('nl')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              cvLanguage === 'nl'
                ? 'bg-cyan-500 font-black text-slate-950 shadow-md'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            Nederlands 🇳🇱
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
              cvLanguage === 'en'
                ? 'bg-cyan-500 font-black text-slate-950 shadow-md'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            English 🇬🇧
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {templateOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onTemplateChange(key)}
              className={`rounded-lg px-3.5 py-2 text-xs font-bold transition-all ${
                activeTemplate === key
                  ? 'border border-slate-700 bg-slate-800 font-black text-white shadow-md dark:bg-slate-200 dark:text-slate-950'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-400 dark:hover:bg-slate-800'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-100 px-3 py-1.5 dark:border-slate-700 dark:bg-slate-800/80">
            <div className="flex gap-1.5">
              {colorOptions.map(({ key, bg }) => (
                <button
                  key={key}
                  onClick={() => onAccentColorChange(key)}
                  className={`h-4 w-4 rounded-full border-2 transition-transform ${bg} ${
                    accentColor === key
                      ? 'scale-125 border-slate-900 dark:border-white'
                      : 'border-transparent hover:scale-110'
                  }`}
                  title={key}
                />
              ))}
            </div>
          </div>

          <button
            onClick={onPrint}
            className="flex transform items-center gap-2 rounded-lg bg-linear-to-r from-emerald-500 to-teal-600 px-4 py-2 text-xs font-black text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-400 hover:to-teal-500 active:scale-95"
          >
            <Printer className="h-4 w-4" />
            تصدير وحفظ PDF
          </button>
        </div>
      </div>
    </header>
  );
}

import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ExperienceItemProps = ComponentPropsWithoutRef<'div'> & {
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  accentBgClass: string;
  isTimeline?: boolean;
};

export function ExperienceItem({
  role,
  company,
  duration,
  bullets,
  accentBgClass,
  isTimeline = false,
  className,
  ...props
}: ExperienceItemProps) {
  const content = (
    <>
      <div className="mb-0.5 flex flex-wrap items-start justify-between gap-1">
        <div>
          <h5 className="text-xs font-bold text-slate-950 dark:text-white print:text-slate-900">
            {role}
          </h5>
          <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 print:text-slate-600">
            {company}
          </p>
        </div>
        <span className="rounded border border-slate-100 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500 dark:border-slate-800 dark:bg-slate-950 print:border-slate-200 print:bg-slate-100 print:text-slate-700">
          {duration}
        </span>
      </div>
      <ul className="mt-1 list-none space-y-0.5 text-[11px] text-slate-600 dark:text-slate-400">
        {bullets.map((bullet, bIdx) => (
          <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
            <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full ${accentBgClass}`} />
            <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </>
  );

  const baseClassName = isTimeline
    ? 'relative border-l border-slate-200 pl-3 transition-colors hover:border-cyan-500 dark:border-slate-800 dark:hover:border-cyan-400 print:border-slate-200'
    : 'border-l border-slate-200 pl-3 transition-colors hover:border-cyan-400 dark:border-slate-800 print:border-slate-200';

  return (
    <div className={cn(baseClassName, className)} {...props}>
      {content}
    </div>
  );
}

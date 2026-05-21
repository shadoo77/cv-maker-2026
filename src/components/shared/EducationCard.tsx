import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type EducationCardProps = ComponentPropsWithoutRef<'div'> & {
  degree: string;
  institution: string;
  year: string;
  variant?: 'card' | 'inline';
};

export function EducationCard({
  degree,
  institution,
  year,
  variant = 'card',
  className,
  ...props
}: EducationCardProps) {
  if (variant === 'inline') {
    return (
      <div className={cn('flex gap-2', className)} {...props}>
        <span className="block text-[9px] font-bold text-slate-400 dark:text-slate-500">
          {year}
        </span>
        <div>
          <h5 className="mt-0.5 text-[11px] font-bold text-slate-900 dark:text-white print:text-slate-900">
            {degree}
          </h5>
          <p className="mt-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-400 print:text-slate-600">
            {institution}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'rounded-md border border-slate-100 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950 print:border-none print:bg-transparent print:p-0',
        className,
      )}
      {...props}
    >
      <span className="block text-[9px] font-bold text-slate-400 dark:text-slate-500">{year}</span>
      <h5 className="mt-0.5 text-[11px] font-bold text-slate-900 dark:text-white print:text-slate-900">
        {degree}
      </h5>
      <p className="mt-0.5 text-[10px] font-medium text-slate-600 dark:text-slate-400 print:text-slate-600">
        {institution}
      </p>
    </div>
  );
}

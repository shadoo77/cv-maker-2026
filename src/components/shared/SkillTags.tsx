import { cn } from '@/lib/utils';
import type { ComponentPropsWithRef } from 'react';

type SkillTagsProps = ComponentPropsWithRef<'div'> & {
  items: string[];
};

export function SkillTags({ items, ref, className, ...props }: SkillTagsProps) {
  return (
    <div className="flex flex-wrap gap-1" ref={ref} {...props}>
      {items.map((item, i) => (
        <span
          key={i}
          className={cn(
            'tag-element rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] font-bold text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400',
            className,
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = ComponentPropsWithoutRef<'h4'> & {
  title: string;
  accentClass: string;
};

export function SectionHeader({ title, accentClass, className, ...props }: SectionHeaderProps) {
  return (
    <h4
      className={cn(
        'mb-2 text-[10px] font-black tracking-widest uppercase',
        accentClass,
        className,
      )}
      {...props}
    >
      {title}
    </h4>
  );
}

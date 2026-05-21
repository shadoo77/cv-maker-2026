import { useRef } from 'react';
import { Upload, X, User } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ProfileImageProps = ComponentPropsWithoutRef<'div'> & {
  image: string | null;
  onImageChange: (url: string) => void;
  onImageRemove: () => void;
  shape?: 'rounded-xl' | 'rounded-full';
  size?: 'sm' | 'md';
};

export function ProfileImage({
  image,
  onImageChange,
  onImageRemove,
  shape = 'rounded-xl',
  size = 'md',
  className,
  ...props
}: ProfileImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = size === 'sm' ? 'h-20 w-20' : 'h-24 w-24';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      onImageChange(imageUrl);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onImageRemove();
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <div
        onClick={triggerFileInput}
        className={cn(
          `group relative ${sizeClasses} flex shrink-0 cursor-pointer flex-col items-center justify-center overflow-hidden border-2 border-slate-200 bg-slate-50 transition-all dark:border-slate-700 dark:bg-slate-800 print:border-transparent`,
          shape,
          className,
        )}
        {...props}
      >
        {image ? (
          <>
            <img
              src={image}
              alt="Profile"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="text-[10px] font-bold text-white">تغيير</span>
            </div>
            <button
              onClick={handleRemove}
              className="absolute top-1 right-1 rounded-full bg-rose-500 p-0.5 text-white hover:bg-rose-600 print:hidden"
              title="حذف الصورة"
            >
              <X className="h-3 w-3" />
            </button>
          </>
        ) : (
          <div className="p-1 text-center print:hidden">
            {size === 'sm' ? (
              <User className="mx-auto mb-0.5 h-5 w-5 text-slate-400 dark:text-slate-500" />
            ) : (
              <Upload className="mx-auto mb-0.5 h-4 w-4 text-slate-400 dark:text-slate-500" />
            )}
            <span className="block text-[8px] font-bold text-slate-500 dark:text-slate-400">
              {size === 'sm' ? 'رفع صورة' : 'إضافة صورة'}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

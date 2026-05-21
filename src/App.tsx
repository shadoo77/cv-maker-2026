import { useState, useRef, useCallback } from 'react';
import { cvDataTranslations } from '@/data/cvData';
import { colorMap } from '@/utils/colorMap';
import { ControlPanel } from '@/components/ControlPanel';
import {
  NeoMinimalTemplate,
  DarkTechTemplate,
  CreativeGlassTemplate,
} from '@/components/templates';
import { useCvPrint } from '@/hooks/usePrint';
import type { AccentColor, Template, FontFamily } from '@/types/cv';

const fontClasses: Record<FontFamily, string> = {
  sans: 'font-sans',
  serif: 'font-serif',
  mono: 'font-mono',
};

export default function App() {
  const [activeTemplate, setActiveTemplate] = useState<Template>('neo-minimal');
  const [accentColor, setAccentColor] = useState<AccentColor>('cyan');
  const [fontFamily] = useState<FontFamily>('sans');
  const [cvLanguage, setCvLanguage] = useState<'en' | 'nl'>('nl');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(true);

  const contentRef = useRef<HTMLDivElement>(null);
  const triggerPrint = useCvPrint(contentRef);

  const cvData = cvDataTranslations[cvLanguage];
  const activeColors = colorMap[accentColor];
  const fontClass = fontClasses[fontFamily];

  const handleImageChange = useCallback((url: string) => {
    setProfileImage(url);
  }, []);

  const handleImageRemove = useCallback(() => {
    setProfileImage(null);
  }, []);

  const handlePrint = useCallback(() => {
    triggerPrint();
  }, [triggerPrint]);

  const renderTemplate = () => {
    const templateProps = {
      cvData,
      colors: activeColors,
      fontClass,
      profileImage,
      onImageChange: handleImageChange,
      onImageRemove: handleImageRemove,
    };

    switch (activeTemplate) {
      case 'neo-minimal':
        return <NeoMinimalTemplate {...templateProps} />;
      case 'dark-tech':
        return <DarkTechTemplate {...templateProps} />;
      case 'creative-glass':
        return <CreativeGlassTemplate {...templateProps} />;
    }
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'} ${fontClass} flex flex-col pb-16 antialiased transition-colors duration-300`}
    >
      <ControlPanel
        darkMode={darkMode}
        onDarkModeChange={setDarkMode}
        accentColor={accentColor}
        onAccentColorChange={setAccentColor}
        activeTemplate={activeTemplate}
        onTemplateChange={setActiveTemplate}
        cvLanguage={cvLanguage}
        onLanguageChange={setCvLanguage}
        onPrint={handlePrint}
      />

      <div className="flex items-center justify-center gap-2 border-b border-cyan-500/10 bg-gradient-to-r from-cyan-950/25 to-blue-950/25 px-4 py-2 text-center text-xs text-cyan-600 dark:text-cyan-300 print:hidden">
        <span>✨</span>
        <span>
          <strong>تم حل مشكلة تصدير الـ PDF بالكامل!</strong> السيرة الذاتية
          الآن تناسب صفحة واحدة ومكتملة بجميع السمات الفاتحة والداكنة وبدون حواف
          منقطة.
        </span>
      </div>

      <main className="cv-sheet-container flex grow justify-center px-4 py-6 print:p-0">
        <div ref={contentRef} className="cv-container-print">
          {renderTemplate()}
        </div>
      </main>
    </div>
  );
}

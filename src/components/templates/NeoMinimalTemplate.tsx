import { Phone, Mail } from 'lucide-react';
import type { CvData, ColorClasses } from '@/types/cv';
import {
  SectionHeader,
  SkillTags,
  ExperienceItem,
  EducationCard,
  ProfileImage,
  LinkedinIcon,
  GithubIcon,
} from '@/components/shared';

type NeoMinimalTemplateProps = {
  cvData: CvData;
  colors: ColorClasses;
  fontClass: string;
  profileImage: string | null;
  onImageChange: (url: string) => void;
  onImageRemove: () => void;
};

export function NeoMinimalTemplate({
  cvData,
  colors,
  fontClass,
  profileImage,
  onImageChange,
  onImageRemove,
}: NeoMinimalTemplateProps) {
  return (
    <div
      className={`cv-card w-full max-w-[820px] rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 md:p-8 dark:border-slate-800 dark:bg-slate-900 print:rounded-none print:border-none print:bg-white print:p-0 print:shadow-none ${fontClass}`}
    >
      <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-4 md:flex-row dark:border-slate-800 print:flex-row print:border-slate-200">
        <div className="flex items-center gap-4">
          <ProfileImage
            image={profileImage}
            onImageChange={onImageChange}
            onImageRemove={onImageRemove}
            shape="rounded-xl"
            size="md"
          />
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white print:text-slate-900">
              {cvData.personalInfo.name}
            </h2>
            <h3 className={`mt-0.5 text-xs font-black tracking-widest uppercase ${colors.primary}`}>
              {cvData.personalInfo.title}
            </h3>
            <p className="mt-1 max-w-md text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600">
              {cvData.personalInfo.location}
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-1 rounded-lg border border-slate-100 bg-slate-50 p-3 text-[11px] font-medium text-slate-600 md:w-auto dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 print:border-none print:bg-transparent print:p-0">
          <span className="flex items-center gap-1.5">
            <Phone className="h-3 w-3 text-slate-400" /> {cvData.personalInfo.phone}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="h-3 w-3 text-slate-400" /> {cvData.personalInfo.email}
          </span>

          <div className="mt-1 flex flex-col gap-0.5 border-t border-slate-200 pt-1.5 dark:border-slate-800/80 print:border-slate-200">
            <a
              href={cvData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${colors.textHover}`}
            >
              <LinkedinIcon className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
              <span className="hover:underline">
                linkedin.com/in/{cvData.personalInfo.linkedinUsername}
              </span>
            </a>
            <a
              href={cvData.personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 transition-colors ${colors.textHover}`}
            >
              <GithubIcon className="h-3 w-3 text-slate-500 dark:text-slate-400" />
              <span className="hover:underline">
                github.com/{cvData.personalInfo.githubUsername}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 py-3 dark:border-slate-800 print:border-slate-200">
        <SectionHeader title="Executive Abstract" accentClass={colors.primary} />
        <p className="text-justify text-xs leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-700">
          {cvData.profile}
        </p>
      </div>

      <div className="border-b border-slate-200 py-3 dark:border-slate-800 print:border-slate-200">
        <SectionHeader title={cvData.skillsHeader} accentClass={colors.primary} />
        <div className="grid grid-cols-1 gap-2 text-[11px] md:grid-cols-2">
          {Object.entries(cvData.skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-md border border-slate-100 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-950 print:border-none print:bg-transparent print:p-0"
            >
              <span className="mb-1 block text-[10px] font-extrabold text-slate-800 capitalize dark:text-slate-300 print:text-slate-900">
                {category === 'aiWorkflows' ? 'AI & Agentic Workflows' : category}:
              </span>
              <SkillTags items={items} />
            </div>
          ))}
        </div>
      </div>

      <div className="border-b border-slate-200 py-3 dark:border-slate-800 print:border-slate-200">
        <SectionHeader title={cvData.experienceHeader} accentClass={colors.primary} />
        <div className="space-y-3">
          {cvData.experience.slice(0, 4).map((job) => (
            <ExperienceItem
              key={job.company + job.duration}
              role={job.role}
              company={job.company}
              duration={job.duration}
              bullets={job.bullets}
              accentBgClass={colors.bg}
              isTimeline
            />
          ))}
        </div>
      </div>

      <div className="py-3">
        <SectionHeader title={cvData.educationHeader} accentClass={colors.primary} />
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
          {cvData.education.map((edu) => (
            <EducationCard
              key={edu.degree + edu.year}
              degree={edu.degree}
              institution={edu.institution}
              year={edu.year}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-3 text-[11px] dark:border-slate-800 print:border-slate-200">
        <div>
          <h5 className={`mb-1 font-bold ${colors.primary}`}>{cvData.languagesHeader}</h5>
          <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
            {cvData.languages.map((l) => `${l.lang} (${l.level.split(' / ')[0]})`).join(' • ')}
          </p>
        </div>
        <div>
          <h5 className={`mb-1 font-bold ${colors.primary}`}>{cvData.interestsHeader}</h5>
          <p className="text-slate-600 dark:text-slate-400 print:text-slate-700">
            {cvData.interests.join(' • ')}
          </p>
        </div>
      </div>
    </div>
  );
}

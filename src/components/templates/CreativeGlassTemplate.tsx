import { MapPin, Phone, Mail, GraduationCap } from 'lucide-react';
import type { CvData, ColorClasses } from '@/types/cv';
import {
  SectionHeader,
  SkillTags,
  ProfileImage,
  LinkedinIcon,
} from '@/components/shared';

type CreativeGlassTemplateProps = {
  cvData: CvData;
  colors: ColorClasses;
  fontClass: string;
  profileImage: string | null;
  onImageChange: (url: string) => void;
  onImageRemove: () => void;
};

export function CreativeGlassTemplate({
  cvData,
  colors,
  fontClass,
  profileImage,
  onImageChange,
  onImageRemove,
}: CreativeGlassTemplateProps) {
  return (
    <div
      className={`cv-card relative w-full max-w-205 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xl transition-all duration-300 md:p-8 dark:border-slate-800 dark:bg-slate-900 print:p-0 print:shadow-none ${fontClass}`}
    >
      <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-linear-to-br from-cyan-500/10 to-transparent blur-3xl print:hidden" />
      <div className="absolute right-10 bottom-10 -z-10 h-60 w-60 rounded-full bg-linear-to-br from-violet-500/10 to-transparent blur-3xl print:hidden" />

      <div className="border-b border-slate-200 pb-4 text-center dark:border-slate-800">
        <ProfileImage
          image={profileImage}
          onImageChange={onImageChange}
          onImageRemove={onImageRemove}
          shape="rounded-full"
          size="sm"
        />

        <span className={`text-[9px] font-black tracking-widest uppercase ${colors.primary}`}>
          Professional Portfolio
        </span>
        <h2 className="mt-1 text-3xl font-extrabold text-slate-950 dark:text-white">
          {cvData.personalInfo.name}
        </h2>
        <p className="mt-0.5 text-[11px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
          {cvData.personalInfo.title}
        </p>

        <div className="mt-3 flex flex-wrap justify-center gap-2.5 text-[11px] text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 dark:border-slate-800 dark:bg-slate-950">
            <MapPin className="h-3 w-3" /> {cvData.personalInfo.location}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 dark:border-slate-800 dark:bg-slate-950">
            <Phone className="h-3 w-3" /> {cvData.personalInfo.phone}
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 dark:border-slate-800 dark:bg-slate-950">
            <Mail className="h-3 w-3" /> {cvData.personalInfo.email}
          </span>
          <a
            href={cvData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 transition-all hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:text-white"
          >
            <LinkedinIcon className="h-3 w-3 text-cyan-500 dark:text-cyan-400" />
            <span>{cvData.personalInfo.linkedinUsername}</span>
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-xl border-b border-slate-200 py-4 text-center dark:border-slate-800">
        <p className="text-xs leading-relaxed text-slate-700 italic dark:text-slate-300">
          "{cvData.profile}"
        </p>
      </div>

      <div className="py-4">
        <SectionHeader title="Career Narrative" accentClass={colors.primary} />

        <div className="relative space-y-4 before:absolute before:inset-y-0 before:left-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {cvData.experience.slice(0, 4).map((job) => (
            <div key={job.company + job.duration} className="group relative pl-8">
              <div
                className={`absolute top-1 left-1.5 h-2.5 w-2.5 rounded-full border-2 border-white dark:border-slate-950 ${colors.bg} transition-transform group-hover:scale-125`}
              />

              <div className="mb-1 flex flex-col justify-between gap-1 md:flex-row md:items-center">
                <div>
                  <span className="block text-[9px] font-bold tracking-widest text-slate-400 uppercase dark:text-slate-500">
                    {job.duration}
                  </span>
                  <h4 className="inline-block text-xs font-bold text-slate-950 dark:text-white">
                    {job.role}
                  </h4>
                  <span className="px-1.5 text-xs text-slate-400">•</span>
                  <span className={`text-[11px] font-bold ${colors.primary}`}>{job.company}</span>
                </div>
              </div>

              <ul className="list-inside list-disc space-y-0.5 pl-1 text-[11px] text-slate-600 dark:text-slate-400">
                {job.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="leading-relaxed text-slate-700 dark:text-slate-300"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 border-t border-slate-200 pt-4 md:grid-cols-2 dark:border-slate-800 print:grid-cols-2">
        <div>
          <SectionHeader title={cvData.educationHeader} accentClass={colors.primary} />
          <div className="space-y-3">
            {cvData.education.slice(0, 2).map((edu) => (
              <div key={edu.degree + edu.year} className="flex gap-2">
                <GraduationCap className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                <div>
                  <h4 className="text-[11px] font-bold text-slate-950 dark:text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-[10px] text-slate-500">
                    {edu.institution} | {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Communication & Personal" accentClass={colors.primary} />

          <div className="mb-3">
            <h4 className="mb-1 text-[9px] font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
              AI Copilots & LLMs
            </h4>
            <SkillTags
              items={cvData.skills.aiWorkflows.slice(0, 4)}
              className="border-slate-250 rounded-full border bg-slate-50 px-2 py-0.5 text-[9px] font-bold text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
            />
          </div>

          <div className="mb-3">
            <h4 className="mb-1 text-[9px] font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
              Languages
            </h4>
            <div className="flex flex-col gap-0.5">
              {cvData.languages.map((l) => (
                <div key={l.lang} className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {l.lang}
                  </span>
                  <span className="text-[10px] text-slate-500">{l.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

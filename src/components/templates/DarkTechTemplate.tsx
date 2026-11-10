import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import type { CvData, ColorClasses } from '@/types/cv';
import {
  SectionHeader,
  SkillTags,
  ExperienceItem,
  ProfileImage,
  LinkedinIcon,
  GithubIcon,
} from '@/components/shared';

type DarkTechTemplateProps = {
  cvData: CvData;
  colors: ColorClasses;
  fontClass: string;
  profileImage: string | null;
  onImageChange: (url: string) => void;
  onImageRemove: () => void;
};

export function DarkTechTemplate({
  cvData,
  colors,
  fontClass,
  profileImage,
  onImageChange,
  onImageRemove,
}: DarkTechTemplateProps) {
  return (
    <div
      className={`cv-card flex w-full max-w-[820px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 md:flex-row dark:border-slate-800 dark:bg-slate-950 print:flex-row print:shadow-none ${fontClass}`}
    >
      <div className="cv-dark-sidebar flex w-full flex-col justify-between border-r border-slate-200 bg-slate-50 p-6 md:w-1/3 dark:border-slate-800 dark:bg-slate-900 print:w-1/3">
        <div>
          <div className="mb-4 flex flex-col items-center text-center">
            <ProfileImage
              image={profileImage}
              onImageChange={onImageChange}
              onImageRemove={onImageRemove}
              shape="rounded-full"
              size="sm"
            />
            <h2 className="text-base font-black tracking-wide text-slate-950 dark:text-white">
              {cvData.personalInfo.name}
            </h2>
            <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">
              {cvData.personalInfo.title}
            </p>
          </div>

          <div className="mb-6 space-y-2.5 border-t border-slate-200 pt-4 text-[11px] dark:border-slate-800">
            <h3 className="text-[9px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
              Contact
            </h3>

            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <MapPin className="h-3 w-3 flex-shrink-0 text-slate-400" />
              <span>{cvData.personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Phone className="h-3 w-3 flex-shrink-0 text-slate-400" />
              <span>{cvData.personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <Mail className="h-3 w-3 flex-shrink-0 text-slate-400" />
              <span className="truncate">{cvData.personalInfo.email}</span>
            </div>

            <div className="flex flex-col gap-1.5 border-t border-slate-200 pt-2 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <LinkedinIcon className="h-3 w-3 flex-shrink-0 text-cyan-500 dark:text-cyan-400" />
                <a
                  href={cvData.personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate hover:underline"
                >
                  {cvData.personalInfo.linkedinUsername}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <GithubIcon className="h-3 w-3 flex-shrink-0 text-slate-500 dark:text-slate-400" />
                <a
                  href={cvData.personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="truncate hover:underline"
                >
                  {cvData.personalInfo.githubUsername}
                </a>
              </div>
              {cvData.personalInfo.portfolio && (
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Globe className="h-3 w-3 flex-shrink-0 text-slate-500 dark:text-slate-400" />
                  <a
                    href={cvData.personalInfo.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="truncate hover:underline"
                  >
                    {cvData.personalInfo.portfolio}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
            <h3 className="text-[9px] font-black tracking-widest text-slate-900 uppercase dark:text-white">
              Skills
            </h3>

            <div>
              <h4 className="mb-1 text-[10px] font-bold text-slate-950 dark:text-white">
                Languages & Core
              </h4>
              <SkillTags items={cvData.skills.languages} />
            </div>

            <div>
              <h4 className="mb-1 text-[10px] font-bold text-slate-950 dark:text-white">
                Frontend Web
              </h4>
              <SkillTags items={cvData.skills.frontend} />
            </div>

            <div>
              <h4 className="mb-1 text-[10px] font-bold text-slate-950 dark:text-white">
                AI & Agentic
              </h4>
              <SkillTags
                items={cvData.skills.aiWorkflows}
                className="border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[9px] text-cyan-600 dark:border-slate-800 dark:bg-slate-950 dark:text-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white p-6 md:w-2/3 md:p-8 dark:bg-slate-950/40 print:w-2/3">
        <section className="mb-4">
          <SectionHeader title="Summary" accentClass={colors.primary} />
          <p className="text-justify text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            {cvData.profile}
          </p>
        </section>

        <section className="mb-4">
          <SectionHeader
            title={cvData.experienceHeader}
            accentClass={colors.primary}
          />
          <div className="space-y-4">
            {cvData.experience.slice(0, 4).map((job, index, jobs) => (
              <ExperienceItem
                key={job.company + job.duration}
                role={job.role}
                company={job.company}
                duration={job.duration}
                bullets={job.bullets}
                accentBgClass={colors.bg}
                groupHeader={
                  job.group && job.group !== jobs[index - 1]?.group
                    ? job.group
                    : undefined
                }
              />
            ))}
          </div>
        </section>

        <section className="border-t border-slate-200 pt-4 dark:border-slate-800">
          <SectionHeader
            title={cvData.educationHeader}
            accentClass={colors.primary}
          />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {cvData.education.slice(0, 2).map((edu) => (
              <div key={edu.degree + edu.year} className="text-xs">
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                  {edu.year}
                </span>
                <h4 className="text-[11px] font-bold text-slate-950 dark:text-white">
                  {edu.degree}
                </h4>
                <p className="text-[10px] text-slate-500">{edu.institution}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

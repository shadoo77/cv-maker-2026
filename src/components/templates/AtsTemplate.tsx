import type { CvData, ColorClasses } from '@/types/cv';

type AtsTemplateProps = {
  cvData: CvData;
  colors: ColorClasses;
  fontClass: string;
  profileImage: string | null;
  onImageChange: (url: string) => void;
  onImageRemove: () => void;
};

const skillLabels: Record<string, string> = {
  languages: 'Languages',
  frontend: 'Frontend',
  aiWorkflows: 'AI & Automation',
  backend: 'Backend',
  databases: 'Databases',
  tools: 'Tools',
};

export function AtsTemplate({ cvData, fontClass }: AtsTemplateProps) {
  const { personalInfo } = cvData;

  return (
    <div
      className={`cv-card w-full max-w-[210mm] bg-white p-8 text-slate-900 ${fontClass}`}
    >
      <header className="border-b-2 border-slate-900 pb-3">
        <h1 className="text-2xl font-bold tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="mt-0.5 text-sm font-semibold text-slate-700">
          {personalInfo.title}
        </p>
        <p className="mt-2 text-xs text-slate-700">
          {personalInfo.location} · {personalInfo.phone} · {personalInfo.email}
        </p>
        <p className="text-xs text-slate-700">
          linkedin.com/in/{personalInfo.linkedinUsername} · github.com/
          {personalInfo.githubUsername}
          {personalInfo.portfolio ? ` · ${personalInfo.portfolio}` : ''}
        </p>
      </header>

      <section className="mt-4">
        <h2 className="border-b border-slate-300 pb-0.5 text-sm font-bold uppercase">
          Summary
        </h2>
        <p className="mt-1.5 text-xs leading-relaxed text-slate-800">
          {cvData.profile}
        </p>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-300 pb-0.5 text-sm font-bold uppercase">
          Skills
        </h2>
        <div className="mt-1.5 space-y-0.5">
          {Object.entries(cvData.skills).map(([category, items]) => (
            <p
              key={category}
              className="text-xs leading-relaxed text-slate-800"
            >
              <span className="font-semibold">
                {skillLabels[category] ?? category}:{' '}
              </span>
              {items.join(', ')}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-300 pb-0.5 text-sm font-bold uppercase">
          {cvData.experienceHeader}
        </h2>
        <div className="mt-2 space-y-3">
          {cvData.experience.map((job, index, jobs) => (
            <div key={job.company + job.duration}>
              {job.group && job.group !== jobs[index - 1]?.group && (
                <p className="mb-1.5 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {job.group}
                </p>
              )}
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p className="text-sm font-bold">{job.role}</p>
                <p className="text-xs text-slate-600">{job.duration}</p>
              </div>
              <p className="text-xs font-semibold text-slate-700">
                {job.company} — {job.location}
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs leading-relaxed text-slate-800">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-300 pb-0.5 text-sm font-bold uppercase">
          {cvData.educationHeader}
        </h2>
        <div className="mt-1.5 space-y-1">
          {cvData.education.map((edu) => (
            <p key={edu.degree + edu.year} className="text-xs text-slate-800">
              <span className="font-semibold">{edu.degree}</span> —{' '}
              {edu.institution}, {edu.location} ({edu.year})
            </p>
          ))}
        </div>
      </section>

      <section className="mt-4">
        <h2 className="border-b border-slate-300 pb-0.5 text-sm font-bold uppercase">
          {cvData.languagesHeader}
        </h2>
        <p className="mt-1.5 text-xs text-slate-800">
          {cvData.languages
            .map((l) => `${l.lang} (${l.level.split(' / ')[0]})`)
            .join(' · ')}
        </p>
      </section>
    </div>
  );
}

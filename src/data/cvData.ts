import type { CvData } from '../types/cv';

// NOTE: Only verifiable figures belong here. The 40% delivery metric and the
// 4-year tenure are real; add more scope numbers (projects, components,
// team size, traffic/conversion deltas) only when you can defend them.
export const cvDataTranslations: Record<'en' | 'nl', CvData> = {
  en: {
    personalInfo: {
      name: 'Mohamad Shadi Omar',
      title: 'Senior Frontend / Fullstack Developer',
      phone: '+31 6140 62 887',
      email: 'shadi.omar077@gmail.com',
      location: 'Zeist, Utrecht, Netherlands',
      linkedin: 'https://www.linkedin.com/in/shadi-amr/',
      linkedinUsername: 'shadi-amr',
      github: 'https://github.com/shadoo77',
      githubUsername: 'shadoo77',
      portfolio: '',
    },
    profile:
      'Frontend and full-stack developer with 6+ years building React and Next.js products. At This is Development I own frontend architecture for client platforms built on Next.js, TypeScript and Tailwind, with Laravel/Inertia back ends. I introduced AI-assisted workflows that cut feature delivery time by roughly 40%, and led technical SEO and performance work that improved organic visibility and conversion. I work end-to-end from design handoff to production and own the technical decisions that keep those platforms fast and maintainable.',
    skillsHeader: 'Skills',
    skills: {
      languages: [
        'JavaScript (7 yrs)',
        'TypeScript (5 yrs)',
        'PHP',
        'HTML5 / CSS3',
        'Sass / SCSS',
      ],
      frontend: [
        'React (7 yrs)',
        'Next.js (5+ yrs)',
        'Redux Toolkit',
        'Material-UI',
        'Tailwind CSS',
        'Inertia.js',
        'Vite',
      ],
      aiWorkflows: [
        'Claude Code',
        'OpenCode',
        'LLM Prompting',
        'GitHub Copilot',
        'AI Agents & Automation',
      ],
      backend: ['Node.js (5 yrs)', 'Laravel Framework'],
      databases: ['MySQL (4 yrs)', 'PostgreSQL (2 yrs)', 'MongoDB (2 yrs)'],
      tools: [
        'Git & GitHub',
        'GitLab CI/CD',
        'Jira / Scrum',
        'Cypress E2E Testing',
      ],
    },
    experienceHeader: 'Experience',
    experience: [
      {
        company: 'This is Development B.V.',
        role: 'Frontend Developer',
        duration: 'Oct 2022 - Present',
        location: 'Utrecht, NL',
        bullets: [
          'Own frontend architecture for client platforms in Next.js, Vite and Tailwind, and set the component and code-review standards the team follows.',
          'Deliver full-stack features by integrating Laravel and Inertia.js into a single React codebase.',
          'Led technical SEO and performance audits that improved organic visibility and conversion.',
          'Introduced AI-assisted workflows (Claude Code, LLMs) that cut feature delivery time by roughly 40%.',
        ],
      },
      {
        company: 'Gofilex Film B.V.',
        role: 'Frontend Developer',
        duration: 'Mar 2022 - Sep 2022',
        location: 'Zeist, NL',
        group: 'Fixed-term roles · 2021–2022',
        bullets: [
          'Rebuilt legacy React components and modular Sass into a faster, more maintainable media delivery platform.',
        ],
      },
      {
        company: '4net Interactive (Conclusion)',
        role: 'Frontend Developer',
        duration: 'Nov 2021 - Mar 2022',
        location: 'Driebergen-Rijsenburg, NL',
        group: 'Fixed-term roles · 2021–2022',
        bullets: [
          'Built complex React interfaces and a reusable Material-UI component library to WCAG accessibility standards.',
        ],
      },
      {
        company: 'We Are Eves',
        role: 'Fullstack Developer',
        duration: 'Apr 2020 - Nov 2021',
        location: 'Amsterdam, NL',
        bullets: [
          'Scaled a social-commerce platform with React/Next.js and built Node.js/TypeScript REST APIs and microservices.',
        ],
      },
    ],
    educationHeader: 'Education',
    education: [
      {
        degree: 'Web Development Immersion',
        institution: 'Hack Your Future',
        location: 'Amsterdam, NL',
        year: '2018 - 2019',
      },
      {
        degree: 'Web Design Certification',
        institution: 'New Horizons',
        location: 'Damascus, Syria',
        year: '2011',
      },
      {
        degree: 'Associate Degree in Computer Engineering',
        institution: 'Institute of Computer Engineering',
        location: 'Damascus, Syria',
        year: '2001 - 2005',
      },
    ],
    languagesHeader: 'Languages',
    languages: [
      { lang: 'English', level: 'Professional / Fluent' },
      { lang: 'Dutch', level: 'Intermediate / Good' },
      { lang: 'Arabic', level: 'Native' },
    ],
    interestsHeader: 'Interests',
    interests: [
      'Football & Strategy',
      'Fitness & Weightlifting',
      'Tech Communities',
      'Traveling',
    ],
  },
  nl: {
    personalInfo: {
      name: 'Mohamad Shadi Omar',
      title: 'Senior Frontend / Fullstack Developer',
      phone: '+31 6140 62 887',
      email: 'shadi.omar077@gmail.com',
      location: 'Zeist, Utrecht, Nederland',
      linkedin: 'https://www.linkedin.com/in/shadi-amr/',
      linkedinUsername: 'shadi-amr',
      github: 'https://github.com/shadoo77',
      githubUsername: 'shadoo77',
      portfolio: '',
    },
    profile:
      'Frontend- en full-stack developer met 6+ jaar ervaring in React en Next.js. Bij This is Development ben ik verantwoordelijk voor de frontend-architectuur van klantplatformen op Next.js, TypeScript en Tailwind, met Laravel/Inertia back-ends. Ik introduceerde AI-ondersteunde workflows die de featurelevertijd met circa 40% verkortten, en leidde technische SEO- en performance-trajecten die de organische zichtbaarheid en conversie verbeterden. Ik werk end-to-end van designoplevering tot productie en neem de technische beslissingen die deze platformen snel en onderhoudbaar houden.',
    skillsHeader: 'Vaardigheden',
    skills: {
      languages: [
        'JavaScript (7 jr)',
        'TypeScript (5 jr)',
        'PHP',
        'HTML5 / CSS3',
        'Sass / SCSS',
      ],
      frontend: [
        'React (7 jr)',
        'Next.js (5+ jr)',
        'Redux Toolkit',
        'Material-UI',
        'Tailwind CSS',
        'Inertia.js',
        'Vite',
      ],
      aiWorkflows: [
        'Claude Code',
        'OpenCode',
        'LLM Prompting',
        'GitHub Copilot',
        'AI Agents & Automatisering',
      ],
      backend: ['Node.js (5 jr)', 'Laravel Framework'],
      databases: ['MySQL (4 jr)', 'PostgreSQL (2 jr)', 'MongoDB (2 jr)'],
      tools: [
        'Git & GitHub',
        'GitLab CI/CD',
        'Jira / Scrum',
        'Cypress E2E Testing',
      ],
    },
    experienceHeader: 'Werkervaring',
    experience: [
      {
        company: 'This is Development B.V.',
        role: 'Frontend Developer',
        duration: 'okt 2022 - heden',
        location: 'Utrecht, NL',
        bullets: [
          'Verantwoordelijk voor de frontend-architectuur van klantplatformen in Next.js, Vite en Tailwind; stelt de component- en code review-standaarden voor het team vast.',
          'Levert full-stack features door Laravel en Inertia.js te integreren in één React-codebase.',
          'Leidde technische SEO- en performance-audits die de organische zichtbaarheid en conversie verbeterden.',
          "Introduceerde AI-ondersteunde workflows (Claude Code, LLM's) die de featurelevertijd met circa 40% verkortten.",
        ],
      },
      {
        company: 'Gofilex Film B.V.',
        role: 'Frontend Developer',
        duration: 'mrt 2022 - sep 2022',
        location: 'Zeist, NL',
        group: 'Tijdelijke contracten · 2021–2022',
        bullets: [
          'Herschreef legacy React-componenten en modulaire Sass tot een sneller en beter onderhoudbaar mediaplatform.',
        ],
      },
      {
        company: '4net Interactive (Conclusion)',
        role: 'Frontend Developer',
        duration: 'nov 2021 - mrt 2022',
        location: 'Driebergen-Rijsenburg, NL',
        group: 'Tijdelijke contracten · 2021–2022',
        bullets: [
          'Bouwde complexe React-interfaces en een herbruikbare Material-UI componentbibliotheek volgens WCAG-toegankelijkheidsrichtlijnen.',
        ],
      },
      {
        company: 'We Are Eves',
        role: 'Fullstack Developer',
        duration: 'apr 2020 - nov 2021',
        location: 'Amsterdam, NL',
        bullets: [
          "Schaalde een social-commerceplatform met React/Next.js en bouwde Node.js/TypeScript REST-API's en microservices.",
        ],
      },
    ],
    educationHeader: 'Opleidingen',
    education: [
      {
        degree: 'Web Development Immersion',
        institution: 'Hack Your Future',
        location: 'Amsterdam, NL',
        year: '2018 - 2019',
      },
      {
        degree: 'Web Design Certificaat',
        institution: 'New Horizons',
        location: 'Damascus, Syrië',
        year: '2011',
      },
      {
        degree: 'Associate Degree in Computer Engineering',
        institution: 'Institute of Computer Engineering',
        location: 'Damascus, Syrië',
        year: '2001 - 2005',
      },
    ],
    languagesHeader: 'Talen',
    languages: [
      { lang: 'Engels', level: 'Vloeiend / Professioneel' },
      { lang: 'Nederlands', level: 'Goed / Werkervaring' },
      { lang: 'Arabisch', level: 'Moedertaal' },
    ],
    interestsHeader: 'Interesses',
    interests: [
      'Voetbal & Tactiek',
      'Fitness & Krachttraining',
      'Tech Communities',
      'Reizen',
    ],
  },
};

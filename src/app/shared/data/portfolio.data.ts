import { Language, PortfolioCopy, SkillTechnology } from '../models/portfolio.models';

export const SKILL_TECHNOLOGIES: readonly SkillTechnology[] = [
  { id: 'html5', name: 'HTML' },
  { id: 'css3', name: 'CSS' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'material-design', name: 'Material Design' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'angular', name: 'Angular' },
  { id: 'supabase', name: 'Supabase' },
  { id: 'git', name: 'Git' },
  { id: 'rest-api', name: 'REST-API' },
  { id: 'scrum', name: 'Scrum' },
  { id: 'growth-mindset', name: 'Growth mindset', highlighted: true },
];

export const PORTFOLIO_CONTENT: Readonly<Record<Language, PortfolioCopy>> = {
  de: {
    navigation: [
      { label: 'Über mich', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projekte', fragment: 'projects' },
    ],
    hero: {
      role: 'Frontend-Entwickler',
      name: 'Ahmad Ataya',
      projectsCta: 'Meine Projekte',
      contactCta: 'Kontakt',
      scrollLabel: 'Zum Abschnitt Über mich',
      contactLabel: 'Kontakt',
      ticker: [
        'Remote verfügbar',
        'Frontend-Entwickler',
        'Standort: Ludwigshafen am Rhein',
        'Offen für neue Projekte',
      ],
    },
    about: {
      label: 'Wer ich bin',
      title: 'Über mich',
      intro:
        'Hey, ich bin Ahmad – angehender Full-Stack-Entwickler mit aktuellem Schwerpunkt auf Frontend-Entwicklung. Mich begeistert es, Ideen in moderne und benutzerfreundliche Weblösungen zu verwandeln.',
      photoAlt: 'Porträt von Ahmad Ataya',
      points: [
        {
          icon: 'location',
          text: 'Ich lebe in Ludwigshafen am Rhein und bin offen für Remote-Arbeit und neue Projekte.',
        },
        {
          icon: 'learning',
          text: 'Ich lerne schnell und lege Wert auf neue Technologien, sauberen Code, klare Strukturen und eine gute Nutzererfahrung.',
        },
        {
          icon: 'quality',
          text: 'Aus Projektmanagement, technischem Support und Unternehmensführung bringe ich Verantwortung, Kommunikationsstärke und Verständnis für Kundenwünsche mit.',
        },
      ],
    },
    skills: {
      label: 'Technologien',
      title: 'Skill Set',
      intro:
        'In meiner Weiterbildung zum Full-Stack-Entwickler sammle ich praktische Erfahrung mit modernen Frontend-Technologien. Ich arbeite strukturiert, lerne neue Werkzeuge schnell und entwickle mein Wissen kontinuierlich weiter.',
      prompt: 'Du suchst ',
      promptHighlight: 'weitere Skills?',
      support:
        'Ich bin offen für neue Technologien und freue mich darauf, mein Wissen für künftige Projekte zu erweitern.',
      cta: 'Kontakt',
    },
    projects: [],
    testimonials: [],
  },
  en: {
    navigation: [
      { label: 'About me', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projects', fragment: 'projects' },
    ],
    hero: {
      role: 'Frontend Developer',
      name: 'Ahmad Ataya',
      projectsCta: 'Check my work',
      contactCta: 'Contact me',
      scrollLabel: 'Scroll to About me',
      contactLabel: 'Contact',
      ticker: [
        'Available for remote work',
        'Frontend Developer',
        'Based in Ludwigshafen am Rhein',
        'Open to new projects',
      ],
    },
    about: {
      label: 'Who I Am',
      title: 'About me',
      intro:
        'Hey, I’m Ahmad – an aspiring full-stack developer currently focused on frontend development. I enjoy turning ideas into modern, engaging and user-friendly web solutions.',
      photoAlt: 'Portrait of Ahmad Ataya',
      points: [
        {
          icon: 'location',
          text: 'I’m based in Ludwigshafen, Germany, and open to remote work and new projects.',
        },
        {
          icon: 'learning',
          text: 'I learn quickly and value new technologies, clean code, clear structures and a strong user experience.',
        },
        {
          icon: 'quality',
          text: 'Experience in project management, technical support and business management has strengthened my sense of responsibility, communication skills and understanding of client needs.',
        },
      ],
    },
    skills: {
      label: 'Technologies',
      title: 'Skill Set',
      intro:
        'During my full-stack development training, I gain practical experience with modern frontend technologies. I work with clear structures, learn new tools quickly and continuously expand my knowledge.',
      prompt: 'You need ',
      promptHighlight: 'another skill?',
      support:
        'I am open to new technologies and look forward to expanding my knowledge for future projects.',
      cta: "Let's Talk",
    },
    projects: [],
    testimonials: [],
  },
};

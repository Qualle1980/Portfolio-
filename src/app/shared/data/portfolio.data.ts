import { Language, PortfolioCopy } from '../models/portfolio.models';

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
    projects: [],
    testimonials: [],
  },
};

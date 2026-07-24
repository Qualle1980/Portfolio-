import { Language, PortfolioCopy } from '../models/portfolio.models';

export const PORTFOLIO_CONTENT: Readonly<Record<Language, PortfolioCopy>> = {
  de: {
    navigation: [
      { label: 'Über mich', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projekte', fragment: 'projects' },
    ],
    projects: [],
    testimonials: [],
  },
  en: {
    navigation: [
      { label: 'About me', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projects', fragment: 'projects' },
    ],
    projects: [],
    testimonials: [],
  },
};

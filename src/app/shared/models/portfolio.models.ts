export type Language = 'de' | 'en';

export interface NavigationItem {
  readonly label: string;
  readonly fragment: string;
}

export interface HeroCopy {
  readonly role: string;
  readonly name: string;
  readonly projectsCta: string;
  readonly contactCta: string;
  readonly scrollLabel: string;
  readonly contactLabel: string;
  readonly ticker: readonly string[];
}

export type AboutIcon = 'location' | 'learning' | 'quality';

export interface AboutPoint {
  readonly icon: AboutIcon;
  readonly text: string;
}

export interface AboutCopy {
  readonly label: string;
  readonly title: string;
  readonly intro: string;
  readonly photoAlt: string;
  readonly points: readonly AboutPoint[];
}

export type SkillIcon =
  | 'html5'
  | 'css3'
  | 'javascript'
  | 'material-design'
  | 'typescript'
  | 'angular'
  | 'supabase'
  | 'git'
  | 'rest-api'
  | 'scrum'
  | 'growth-mindset';

export interface SkillTechnology {
  readonly id: SkillIcon;
  readonly name: string;
  readonly highlighted?: boolean;
}

export interface SkillsCopy {
  readonly label: string;
  readonly title: string;
  readonly intro: string;
  readonly prompt: string;
  readonly promptHighlight: string;
  readonly support: string;
  readonly cta: string;
}

export interface Project {
  readonly title: string;
  readonly technologies: readonly string[];
  readonly url?: string;
}

export interface Testimonial {
  readonly author: string;
  readonly role: string;
  readonly quote: string;
}

export interface PortfolioCopy {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroCopy;
  readonly about: AboutCopy;
  readonly skills: SkillsCopy;
  readonly projects: readonly Project[];
  readonly testimonials: readonly Testimonial[];
}

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
  readonly number: string;
  readonly title: string;
  readonly description: string;
  readonly learned: string;
  readonly technologies: readonly string[];
  readonly summaryTechnologies?: readonly string[];
  readonly liveUrl?: string;
  readonly githubUrl?: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly imagePosition?: 'center' | 'top';
}

export interface ProjectsCopy {
  readonly label: string;
  readonly title: string;
  readonly intro: string;
  readonly aboutLabel: string;
  readonly technologiesLabel: string;
  readonly learnedLabel: string;
  readonly liveLabel: string;
  readonly githubLabel: string;
  readonly closeLabel: string;
  readonly comingSoonLabel: string;
  readonly nextLabel: string;
  readonly items: readonly Project[];
}

export interface Testimonial {
  readonly author: string;
  readonly role: string;
  readonly quote: string;
}

export interface TestimonialsCopy {
  readonly title: string;
  readonly previousLabel: string;
  readonly nextLabel: string;
  readonly items: readonly Testimonial[];
}

export interface ContactCopy {
  readonly label: string;
  readonly title: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly prompt: string;
  readonly promptLink: string;
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly nameError: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly emailError: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly messageError: string;
  readonly privacyPrefix: string;
  readonly privacyLink: string;
  readonly privacySuffix: string;
  readonly privacyError: string;
  readonly submitLabel: string;
  readonly readyMessage: string;
}

export interface FooterCopy {
  readonly role: string;
  readonly location: string;
  readonly emailLabel: string;
  readonly legalLabel: string;
}

export interface PortfolioCopy {
  readonly navigation: readonly NavigationItem[];
  readonly hero: HeroCopy;
  readonly about: AboutCopy;
  readonly skills: SkillsCopy;
  readonly projects: ProjectsCopy;
  readonly testimonials: TestimonialsCopy;
  readonly contact: ContactCopy;
  readonly footer: FooterCopy;
}

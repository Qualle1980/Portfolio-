/** Languages supported by the portfolio. */
export type Language = 'de' | 'en';

/** Label and target section used by the main navigation. */
export interface NavigationItem {
  readonly label: string;
  readonly fragment: string;
}

/** Localized copy displayed in the landing-page hero. */
export interface HeroCopy {
  readonly role: string;
  readonly name: string;
  readonly projectsCta: string;
  readonly contactCta: string;
  readonly scrollLabel: string;
  readonly contactLabel: string;
  readonly ticker: readonly string[];
}

/** Identifier for an icon shown beside an about-section highlight. */
export type AboutIcon = 'location' | 'learning' | 'quality';

/** One icon-and-text highlight in the about section. */
export interface AboutPoint {
  readonly icon: AboutIcon;
  readonly text: string;
}

/** Localized text and highlights displayed in the about section. */
export interface AboutCopy {
  readonly label: string;
  readonly title: string;
  readonly intro: string;
  readonly photoAlt: string;
  readonly points: readonly AboutPoint[];
}

/** Identifier for a technology icon displayed in the skills grid. */
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

/** One technology displayed in the skills grid. */
export interface SkillTechnology {
  readonly id: SkillIcon;
  readonly name: string;
  readonly highlighted?: boolean;
}

/** Localized copy displayed beside the skills grid. */
export interface SkillsCopy {
  readonly label: string;
  readonly title: string;
  readonly intro: string;
  readonly prompt: string;
  readonly promptHighlight: string;
  readonly support: string;
  readonly cta: string;
}

/** Portfolio project metadata used by the list, preview and detail dialog. */
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

/** Localized project-section labels and project entries. */
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

/** One colleague reference displayed in the testimonial carousel. */
export interface Testimonial {
  readonly author: string;
  readonly role: string;
  readonly quote: string;
}

/** Localized controls and entries for the testimonial carousel. */
export interface TestimonialsCopy {
  readonly title: string;
  readonly previousLabel: string;
  readonly nextLabel: string;
  readonly items: readonly Testimonial[];
}

/** Localized labels, validation messages and feedback for the contact section. */
export interface ContactCopy {
  readonly label: string;
  readonly title: string;
  readonly subtitle: string;
  readonly intro: string;
  readonly prompt: string;
  readonly promptLink: string;
  readonly nameLabel: string;
  readonly namePlaceholder: string;
  readonly nameRequiredError: string;
  readonly nameLengthError: string;
  readonly nameFormatError: string;
  readonly emailLabel: string;
  readonly emailPlaceholder: string;
  readonly emailRequiredError: string;
  readonly emailFormatError: string;
  readonly messageLabel: string;
  readonly messagePlaceholder: string;
  readonly messageRequiredError: string;
  readonly messageLengthError: string;
  readonly privacyPrefix: string;
  readonly privacyLink: string;
  readonly privacySuffix: string;
  readonly privacyError: string;
  readonly submitLabel: string;
  readonly sendingMessage: string;
  readonly readyMessage: string;
  readonly sendErrorMessage: string;
}

/** Localized role, location and navigation labels displayed in the footer. */
export interface FooterCopy {
  readonly role: string;
  readonly location: string;
  readonly emailLabel: string;
  readonly legalLabel: string;
}

/** Complete language-specific content used by the portfolio home page. */
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

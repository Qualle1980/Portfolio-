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
  readonly projects: readonly Project[];
  readonly testimonials: readonly Testimonial[];
}

export type Language = 'de' | 'en';

export interface NavigationItem {
  readonly label: string;
  readonly fragment: string;
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
  readonly projects: readonly Project[];
  readonly testimonials: readonly Testimonial[];
}

/** One titled block of localized legal content. */
export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly address?: boolean;
}

/** Complete localized content required by the legal-notice page. */
export interface LegalNoticeCopy {
  readonly title: string;
  readonly backLabel: string;
  readonly sections: readonly LegalSection[];
  readonly contactNote: string;
  readonly date: string;
}

/** External resource referenced by a privacy-policy section. */
export interface PrivacyLink {
  readonly label: string;
  readonly url: string;
}

/** Privacy-policy section that may additionally contain external links. */
export interface PrivacySection extends LegalSection {
  readonly links?: readonly PrivacyLink[];
}

/** Complete localized content required by the privacy-policy page. */
export interface PrivacyPolicyCopy {
  readonly title: string;
  readonly backLabel: string;
  readonly sections: readonly PrivacySection[];
  readonly date: string;
}

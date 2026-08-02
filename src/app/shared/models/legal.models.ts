export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly address?: boolean;
}

export interface LegalNoticeCopy {
  readonly title: string;
  readonly backLabel: string;
  readonly sections: readonly LegalSection[];
  readonly contactNote: string;
  readonly date: string;
}

export interface PrivacyLink {
  readonly label: string;
  readonly url: string;
}

export interface PrivacySection extends LegalSection {
  readonly links?: readonly PrivacyLink[];
}

export interface PrivacyPolicyCopy {
  readonly title: string;
  readonly backLabel: string;
  readonly sections: readonly PrivacySection[];
  readonly date: string;
}

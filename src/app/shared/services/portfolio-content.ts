import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';
import { LEGAL_NOTICE_COPY, PRIVACY_POLICY_COPY } from '../data/legal.data';
import { PORTFOLIO_CONTENT } from '../data/portfolio.data';
import { Language } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioContent {
  private readonly document = inject(DOCUMENT);
  private readonly languageStorageKey = 'portfolio-language';

  readonly language = signal<Language>(this.getInitialLanguage());
  readonly content = PORTFOLIO_CONTENT;
  readonly currentContent = computed(() => this.content[this.language()]);
  readonly legalNotice = computed(() => LEGAL_NOTICE_COPY[this.language()]);
  readonly privacyPolicy = computed(() => PRIVACY_POLICY_COPY[this.language()]);

  constructor() {
    this.document.documentElement.lang = this.language();
  }

  setLanguage(language: Language, persist = false): void {
    this.language.set(language);
    this.document.documentElement.lang = language;
    if (persist) this.storeLanguage(language);
  }

  private getInitialLanguage(): Language {
    try {
      const storedLanguage = this.document.defaultView?.localStorage.getItem(
        this.languageStorageKey,
      );
      return storedLanguage === 'de' || storedLanguage === 'en' ? storedLanguage : 'en';
    } catch {
      return 'en';
    }
  }

  private storeLanguage(language: Language): void {
    try {
      this.document.defaultView?.localStorage.setItem(this.languageStorageKey, language);
    } catch {
      // Local storage can be unavailable in restricted browser contexts.
    }
  }
}

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnDestroy,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../../../shared/models/portfolio.models';
import { PortfolioContent } from '../../../shared/services/portfolio-content';

/** Controls the responsive header, language selection and section navigation. */
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeMenu()',
    '(window:scroll)': 'updateScrollState()',
  },
})
export class Header implements AfterViewInit, OnDestroy {
  private readonly portfolioContent = inject(PortfolioContent);
  private sectionObserver?: IntersectionObserver;

  protected readonly language = this.portfolioContent.language;
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected readonly activeSection = signal('');
  protected readonly navigation = computed(() => this.portfolioContent.currentContent().navigation);
  protected readonly menuLabel = computed(() =>
    this.language() === 'de' ? 'Menü öffnen' : 'Open menu',
  );

  /**
   * Activates a language and optionally persists the selection through the content service.
   * @param language - Language to display.
   */
  protected setLanguage(language: Language): void {
    this.portfolioContent.setLanguage(language, true);
    this.closeMenu();
  }

  /** Opens or closes the mobile navigation menu. */
  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  /** Closes the mobile navigation menu. */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /** Updates the header appearance to reflect the current scroll position. */
  protected updateScrollState(): void {
    this.isScrolled.set(window.scrollY > 0);
  }

  /**
   * Scrolls to a page section while accounting for the fixed header.
   * @param fragment - Target section id without the hash prefix.
   */
  protected navigateTo(fragment: string): void {
    this.activeSection.set(fragment);
    this.closeMenu();
    window.setTimeout(() => {
      const section = document.getElementById(fragment);
      if (!section) return;

      const sectionOffsets: Record<string, number> = {
        about: 0,
        skills: 98,
        projects: 0,
      };
      const headerOffset = sectionOffsets[fragment] ?? 114;
      const sectionTop = section.offsetTop;
      window.scrollTo({ top: sectionTop - headerOffset, behavior: 'smooth' });
    }, 50);
  }

  /** Starts observing page sections after the header view has initialized. */
  ngAfterViewInit(): void {
    this.observeSections();
  }

  /** Disconnects the section observer before the component is destroyed. */
  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private observeSections(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    this.sectionObserver = new IntersectionObserver(this.updateActiveSection, {
      rootMargin: '-98px 0px -70% 0px',
    });
    document.querySelectorAll<HTMLElement>('.section[id]').forEach((section) => {
      this.sectionObserver?.observe(section);
    });
  }

  private readonly updateActiveSection = (entries: IntersectionObserverEntry[]): void => {
    const activeEntry = entries.find((entry) => entry.isIntersecting);
    if (activeEntry?.target.id) this.activeSection.set(activeEntry.target.id);
  };
}

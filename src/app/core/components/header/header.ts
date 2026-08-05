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

  protected setLanguage(language: Language): void {
    this.portfolioContent.setLanguage(language, true);
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => !isOpen);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected updateScrollState(): void {
    this.isScrolled.set(window.scrollY > 0);
  }

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

  ngAfterViewInit(): void {
    this.observeSections();
  }

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

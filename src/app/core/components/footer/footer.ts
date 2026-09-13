import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContent } from '../../../shared/services/portfolio-content';

/** Renders the localized site footer and its external contact links. */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly footer = computed(() => this.portfolioContent.currentContent().footer);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly githubUrl = 'https://github.com/Qualle1980';
  protected readonly linkedinUrl = 'https://de.linkedin.com/in/ahmad-ataya-b82b69a0';
  protected readonly emailUrl = 'mailto:contact@ahmad-ataya.de';
}

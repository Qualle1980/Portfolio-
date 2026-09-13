import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

/** Displays the landing-page introduction, calls to action and social links. */
@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly hero = computed(() => this.portfolioContent.currentContent().hero);
  protected readonly githubUrl = 'https://github.com/Qualle1980';
  protected readonly linkedinUrl = 'https://de.linkedin.com/in/ahmad-ataya-b82b69a0';
  protected readonly emailUrl = 'mailto:contact@ahmad-ataya.de';
}

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SKILL_TECHNOLOGIES } from '../../../../shared/data/portfolio.data';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

/** Presents the localized skill summary and technology collection. */
@Component({
  selector: 'app-skills',
  imports: [RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  host: { id: 'skills', class: 'section' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly skills = computed(() => this.portfolioContent.currentContent().skills);
  protected readonly technologies = SKILL_TECHNOLOGIES;
}

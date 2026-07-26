import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  host: { id: 'about', class: 'section' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly about = computed(() => this.portfolioContent.currentContent().about);
}

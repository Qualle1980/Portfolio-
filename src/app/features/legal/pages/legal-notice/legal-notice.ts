import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalNotice {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly copy = this.portfolioContent.legalNotice;
}

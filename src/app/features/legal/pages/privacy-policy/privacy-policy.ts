import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPolicy {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly copy = this.portfolioContent.privacyPolicy;
}

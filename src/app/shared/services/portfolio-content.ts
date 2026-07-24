import { Injectable, signal } from '@angular/core';
import { PORTFOLIO_CONTENT } from '../data/portfolio.data';
import { Language } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioContent {
  readonly language = signal<Language>('de');
  readonly content = PORTFOLIO_CONTENT;
}

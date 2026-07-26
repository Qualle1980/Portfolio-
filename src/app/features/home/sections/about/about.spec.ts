import { TestBed } from '@angular/core/testing';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { About } from './about';

describe('About', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();
  });

  it('renders the English personal content and profile photo', () => {
    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const photo = element.querySelector('img');

    expect(element.textContent).toContain('About me');
    expect(element.textContent).toContain('Ludwigshafen, Germany');
    expect(photo?.getAttribute('src')).toBe('assets/images/ahmad-ataya-profile.jpeg');
    expect(photo?.getAttribute('alt')).toBe('Portrait of Ahmad Ataya');
    const iconSources = [...element.querySelectorAll<HTMLImageElement>('.about__icon img')].map(
      (icon) => icon.getAttribute('src'),
    );
    expect(iconSources).toEqual([
      'assets/icons/about-location.svg',
      'assets/icons/about-learning.svg',
      'assets/icons/about-quality.svg',
    ]);
  });

  it('renders the German personal content after changing the language', () => {
    const contentService = TestBed.inject(PortfolioContent);
    contentService.setLanguage('de');

    const fixture = TestBed.createComponent(About);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Über mich');
    expect(fixture.nativeElement.textContent).toContain('Ludwigshafen am Rhein');
  });
});

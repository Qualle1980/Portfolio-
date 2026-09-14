import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { Hero } from './hero';

describe('Hero', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders Ahmad Ataya and the English calls to action', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent as string;
    expect(content).toContain('Ahmad Ataya');
    expect(content).toContain('Check my work');
    expect(content).toContain('Contact me');
    expect(content).toContain('Based in Ludwigshafen am Rhein');
  });

  it('renders the German hero copy after changing the language', () => {
    const contentService = TestBed.inject(PortfolioContent);
    contentService.setLanguage('de');

    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Meine Projekte');
    expect(fixture.nativeElement.textContent).toContain('Frontend-Entwickler');
  });

  it('does not render a vertical contact label beside the social links', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.hero__vertical-contact')).toBeNull();
  });

  it('links the calls to action to projects and contact', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    const links = fixture.nativeElement.querySelectorAll(
      '.hero__button',
    ) as NodeListOf<HTMLAnchorElement>;
    expect(links[0].getAttribute('href')).toBe('/#projects');
    expect(links[1].getAttribute('href')).toBe('/#contact');
  });

  it('uses Ahmad Ataya social profile links', () => {
    const fixture = TestBed.createComponent(Hero);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('[aria-label="GitHub"]')?.getAttribute('href')).toBe(
      'https://github.com/Qualle1980',
    );
    expect(element.querySelector('[aria-label="LinkedIn"]')?.getAttribute('href')).toBe(
      'https://de.linkedin.com/in/ahmad-ataya-b82b69a0',
    );
    expect(element.querySelector('[aria-label="E-Mail"]')?.getAttribute('href')).toBe(
      'mailto:contact@ahmad-ataya.de',
    );
  });
});

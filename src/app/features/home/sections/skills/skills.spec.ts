import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { Skills } from './skills';

describe('Skills', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Skills],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders Ahmad skill copy and all technology icons', () => {
    const fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const technologies = element.querySelectorAll('.skills__technology');

    expect(element.textContent).toContain('Skill Set');
    expect(element.textContent).toContain('full-stack development training');
    expect(technologies).toHaveLength(11);
    expect(element.textContent).toContain('Angular');
    expect(element.textContent).toContain('Supabase');
    expect(element.textContent).toContain('Growth mindset');
  });

  it('renders the German skill copy after changing the language', () => {
    const contentService = TestBed.inject(PortfolioContent);
    contentService.setLanguage('de');

    const fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Technologien');
    expect(fixture.nativeElement.textContent).toContain('Weiterbildung zum Full-Stack-Entwickler');
    expect(fixture.nativeElement.textContent).toContain('weitere Skills?');
  });

  it('links the call to action to the contact section', () => {
    const fixture = TestBed.createComponent(Skills);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('.skills__button') as HTMLAnchorElement;
    expect(link.getAttribute('href')).toBe('/#contact');
  });
});

import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { PrivacyPolicy } from './privacy-policy';

describe('PrivacyPolicy', () => {
  it('renders the English privacy policy and the controller data', async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicy],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(PrivacyPolicy);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Privacy Policy');
    expect(content).toContain('Ahmad Ataya');
    expect(content).toContain('Gabelsberger Str. 49');
    expect(content).toContain('contact@ahmad-ataya.de');
    expect(content).toContain('does not set cookies');
  });

  it('reacts to a language change through the shared signal', async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicy],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(PrivacyPolicy);
    TestBed.inject(PortfolioContent).setLanguage('de');
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Datenschutz');
    expect(content).toContain('Hosting und Server-Logfiles');
    expect(content).toContain('keine Cookies');
  });

  it('opens external information links safely in a new tab', async () => {
    await TestBed.configureTestingModule({
      imports: [PrivacyPolicy],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(PrivacyPolicy);
    fixture.detectChanges();

    const externalLinks = Array.from(
      fixture.nativeElement.querySelectorAll('.privacy-policy__links a'),
    ) as HTMLAnchorElement[];

    expect(externalLinks.length).toBe(2);
    expect(externalLinks.every((link) => link.target === '_blank')).toBe(true);
    expect(externalLinks.every((link) => link.rel === 'noopener noreferrer')).toBe(true);
  });
});

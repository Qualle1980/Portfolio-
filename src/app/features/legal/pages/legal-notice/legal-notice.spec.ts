import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { LegalNotice } from './legal-notice';

describe('LegalNotice', () => {
  it('renders the English legal notice and the known personal data', async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(LegalNotice);
    fixture.detectChanges();

    const content = fixture.nativeElement.textContent;
    expect(content).toContain('Legal Notice');
    expect(content).toContain('Ahmad Ataya');
    expect(content).toContain('Gabelsberger Str. 49');
    expect(content).toContain('67069 Ludwigshafen am Rhein');
    expect(content).toContain('ahmad-ataya@hotmail.de');
  });

  it('reacts to a language change through the shared signal', async () => {
    await TestBed.configureTestingModule({
      imports: [LegalNotice],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(LegalNotice);
    TestBed.inject(PortfolioContent).setLanguage('de');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Impressum');
    expect(fixture.nativeElement.textContent).toContain('Haftungsausschluss');
  });
});

import { TestBed } from '@angular/core/testing';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();
  });

  it('opens El Pollo Loco in a fixed project dialog with its links', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectButtons =
      element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

    expect(projectButtons.length).toBe(2);
    expect(element.textContent).toContain('El Pollo Loco');
    expect(element.textContent).toContain('Join');

    projectButtons[0].click();
    fixture.detectChanges();

    const dialog = element.querySelector<HTMLElement>('[role="dialog"]');
    const links = dialog?.querySelectorAll<HTMLAnchorElement>('.project-dialog__links a');

    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('What is this project about?');
    expect(links?.[0].href).toBe('https://github.com/Qualle1980/El-Pollo-Loco');
    expect(links?.[1].href).toContain('ahmadataya.developerakademie.net');
  });

  it('opens Join as an empty placeholder dialog', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectButtons =
      element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

    projectButtons[1].click();
    fixture.detectChanges();

    const dialog = element.querySelector<HTMLElement>('[role="dialog"]');
    expect(dialog?.getAttribute('aria-label')).toBe('Join');
    expect(dialog?.textContent).toContain('02');
    expect(dialog?.textContent).toContain('What is this project about?');
    expect(dialog?.querySelector('img')).toBeNull();
    expect(dialog?.querySelector('.project-dialog__section p')).toBeNull();
    expect(dialog?.querySelectorAll('a').length).toBe(0);
  });

  it('closes an open project dialog with the Escape key', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('.projects__trigger')?.click();
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(element.querySelector('[role="dialog"]')).toBeNull();
  });

  it('renders the German project copy after changing the language', () => {
    const contentService = TestBed.inject(PortfolioContent);
    contentService.setLanguage('de');

    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('.projects__trigger')?.click();
    fixture.detectChanges();

    expect(element.textContent).toContain('Ausgewählte Projekte');
    expect(element.textContent).toContain('Worum geht es bei diesem Projekt?');
  });
});

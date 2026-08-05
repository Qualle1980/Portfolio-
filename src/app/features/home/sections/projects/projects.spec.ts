import { TestBed } from '@angular/core/testing';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { Projects } from './projects';

describe('Projects', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projects],
    }).compileComponents();
  });

  it('renders the projects in the Figma order and opens El Pollo Loco with its links', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectButtons = element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

    expect(projectButtons.length).toBe(3);
    expect(element.textContent).toContain('El Pollo Loco');
    expect(element.textContent).toContain('Join');
    expect(element.textContent).toContain('DA Bubble');
    expect(projectButtons[0].textContent).toContain('Join');
    expect(projectButtons[1].textContent).toContain('El Pollo Loco');
    expect(projectButtons[2].textContent).toContain('DA Bubble');

    projectButtons[1].click();
    fixture.detectChanges();

    const dialog = element.querySelector<HTMLElement>('[role="dialog"]');
    const links = dialog?.querySelectorAll<HTMLAnchorElement>('.project-dialog__links a');

    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('What is this project about?');
    expect(links?.[0].href).toBe('https://github.com/Qualle1980/El-Pollo-Loco');
    expect(links?.[1].href).toContain('ahmadataya.developerakademie.net');
  });

  it('opens Join with its Figma copy, preview and inactive project buttons', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectButtons = element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

    projectButtons[0].click();
    fixture.detectChanges();

    const dialog = element.querySelector<HTMLElement>('[role="dialog"]');
    expect(dialog?.getAttribute('aria-label')).toBe('Join');
    expect(dialog?.textContent).toContain('01');
    expect(dialog?.textContent).toContain('What is this project about?');
    expect(dialog?.textContent).toContain('Task manager inspired by the Kanban System');
    expect(dialog?.querySelector<HTMLImageElement>('.project-dialog__media img')?.src).toContain(
      'assets/images/projects/join.jpg',
    );
    expect(
      dialog?.querySelectorAll<HTMLButtonElement>('.project-dialog__links button').length,
    ).toBe(2);
    expect(dialog?.querySelectorAll('a').length).toBe(0);
  });

  it('renders a matching hover preview for every project', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const previews = element.querySelectorAll<HTMLImageElement>('.projects__preview img');

    expect(previews.length).toBe(3);
    expect(previews[0].src).toContain('assets/images/projects/join.jpg');
    expect(previews[1].src).toContain('assets/images/projects/el-pollo-loco.png');
    expect(previews[2].src).toContain('assets/images/projects/da-bubble.png');
  });

  it('keeps the hover preview closed after Escape until the project is left', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectItem = element.querySelector<HTMLElement>('.projects__item');
    const preview = projectItem?.querySelector<HTMLElement>('.projects__preview');

    projectItem?.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(preview?.classList.contains('projects__preview--visible')).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(preview?.classList.contains('projects__preview--visible')).toBe(false);

    projectItem?.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(preview?.classList.contains('projects__preview--visible')).toBe(false);

    projectItem?.dispatchEvent(new MouseEvent('mouseleave'));
    projectItem?.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(preview?.classList.contains('projects__preview--visible')).toBe(true);
  });

  it('opens DA Bubble as the third project with its preview and inactive buttons', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const projectButtons = element.querySelectorAll<HTMLButtonElement>('.projects__trigger');

    projectButtons[2].click();
    fixture.detectChanges();

    const dialog = element.querySelector<HTMLElement>('[role="dialog"]');

    expect(dialog?.getAttribute('aria-label')).toBe('DA Bubble');
    expect(dialog?.textContent).toContain('03');
    expect(dialog?.textContent).toContain('real-time messaging');
    expect(dialog?.querySelector<HTMLImageElement>('.project-dialog__media img')?.src).toContain(
      'assets/images/projects/da-bubble.png',
    );
    expect(
      dialog?.querySelectorAll<HTMLButtonElement>('.project-dialog__links button').length,
    ).toBe(2);
    expect(dialog?.querySelectorAll('a').length).toBe(0);
  });

  it('closes an open project dialog with the Escape key', () => {
    const fixture = TestBed.createComponent(Projects);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    element.querySelector<HTMLButtonElement>('.projects__trigger')?.click();
    fixture.detectChanges();

    expect(document.documentElement.style.overflow).toBe('hidden');
    expect(document.body.style.overflow).toBe('hidden');
    expect(document.body.classList.contains('project-dialog-open')).toBe(true);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(element.querySelector('[role="dialog"]')).toBeNull();
    expect(document.documentElement.style.overflow).toBe('');
    expect(document.body.style.overflow).toBe('');
    expect(document.body.classList.contains('project-dialog-open')).toBe(false);
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

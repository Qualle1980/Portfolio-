import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  beforeEach(async () => {
    window.localStorage.removeItem('portfolio-language');
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the English Figma navigation by default', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('About me');
    expect(compiled.textContent).toContain('Projects');
    expect(document.documentElement.lang).toBe('en');
  });

  it('switches the navigation to German', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    getLanguageButton(fixture.nativeElement, 'DE').click();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Über mich');
    expect(compiled.textContent).toContain('Projekte');
    expect(document.documentElement.lang).toBe('de');
    expect(window.localStorage.getItem('portfolio-language')).toBe('de');
  });

  it('closes the mobile menu after changing the language', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    getMenuButton(fixture.nativeElement).click();
    getLanguageButton(fixture.nativeElement, 'DE').click();
    fixture.detectChanges();

    expect(getMenuButton(fixture.nativeElement).getAttribute('aria-expanded')).toBe('false');
  });

  it('closes the mobile menu with Escape', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    getMenuButton(fixture.nativeElement).click();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(getMenuButton(fixture.nativeElement).getAttribute('aria-expanded')).toBe('false');
  });

  it('activates the stronger header background after scrolling', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 100 });
    window.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    const header = fixture.nativeElement.querySelector('.header') as HTMLElement;
    expect(header.classList.contains('header--scrolled')).toBe(true);

    Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 });
  });
});

function getMenuButton(element: HTMLElement): HTMLButtonElement {
  return element.querySelector('.header__menu-button') as HTMLButtonElement;
}

function getLanguageButton(element: HTMLElement, label: string): HTMLButtonElement {
  return [...element.querySelectorAll<HTMLButtonElement>('.header__language-button')].find(
    (button) => button.textContent?.trim() === label,
  ) as HTMLButtonElement;
}

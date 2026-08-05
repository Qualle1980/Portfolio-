import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('shows Ahmad Ataya and his social links', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const links = [...element.querySelectorAll<HTMLAnchorElement>('a')];

    expect(element.textContent).toContain('Ahmad');
    expect(links.some((link) => link.href === 'https://github.com/Qualle1980')).toBe(true);
    expect(
      links.some(
        (link) => link.href === 'https://de.linkedin.com/in/ahmad-ataya-b82b69a0',
      ),
    ).toBe(true);
  });

  it('opens the email program and links to the legal notice page', () => {
    const fixture = TestBed.createComponent(Footer);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const links = [...element.querySelectorAll<HTMLAnchorElement>('a')];

    expect(
      links.some((link) => link.getAttribute('href') === 'mailto:ahmad-ataya@hotmail.de'),
    ).toBe(true);
    expect(links.some((link) => link.getAttribute('href') === '/impressum')).toBe(true);
  });
});

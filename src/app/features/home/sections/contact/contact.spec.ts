import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';
import { Contact } from './contact';

describe('Contact', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('shows validation errors after an invalid submit', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('.contact-form__field--error').length).toBe(3);
    expect(fixture.nativeElement.querySelector('.contact-form__privacy--error')).not.toBeNull();
  });

  it('accepts valid values and resets the form', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      contactForm: {
        setValue(value: {
          name: string;
          email: string;
          message: string;
          privacy: boolean;
        }): void;
      };
      submitForm(): void;
      submitStatus(): string;
    };

    component.contactForm.setValue({
      name: 'Ahmad',
      email: 'ahmad@example.com',
      message: 'Ich möchte ein Webprojekt besprechen.',
      privacy: true,
    });
    component.submitForm();

    expect(component.submitStatus()).toBe('ready');
  });

  it('allows the longer German privacy text to wrap', () => {
    const fixture = TestBed.createComponent(Contact);
    TestBed.inject(PortfolioContent).setLanguage('de');
    fixture.detectChanges();

    const privacyLabel = fixture.nativeElement.querySelector(
      '.contact-form__privacy-label',
    ) as HTMLLabelElement;

    expect(privacyLabel.classList).toContain('contact-form__privacy-label--multiline');
  });

  it('links the privacy text to the configured privacy route', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const privacyLink = fixture.nativeElement.querySelector(
      '.contact-form__privacy-label a',
    ) as HTMLAnchorElement;

    expect(privacyLink.getAttribute('href')).toBe('/datenschutz');
  });
});

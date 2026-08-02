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

  it('shows a required-field error only after the field loses focus', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      contactForm: {
        controls: { name: { markAsTouched(): void } };
      };
    };
    const nameField = fixture.nativeElement.querySelectorAll(
      '.contact-form__field',
    )[0] as HTMLDivElement;

    expect(nameField.classList).not.toContain('contact-form__field--error');

    component.contactForm.controls.name.markAsTouched();
    fixture.detectChanges();

    expect(nameField.classList).toContain('contact-form__field--error');
  });

  it('validates the email format after blur and clears the error for a valid email', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      contactForm: {
        controls: {
          email: {
            markAsTouched(): void;
            setValue(value: string): void;
          };
        };
      };
    };
    const emailField = fixture.nativeElement.querySelectorAll(
      '.contact-form__field',
    )[1] as HTMLDivElement;

    component.contactForm.controls.email.setValue('invalid-email');
    component.contactForm.controls.email.markAsTouched();
    fixture.detectChanges();

    expect(emailField.classList).toContain('contact-form__field--error');

    component.contactForm.controls.email.setValue('ahmad@example.com');
    fixture.detectChanges();

    expect(emailField.classList).not.toContain('contact-form__field--error');
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
        getRawValue(): {
          name: string;
          email: string;
          message: string;
          privacy: boolean;
        };
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
    expect(component.contactForm.getRawValue()).toEqual({
      name: '',
      email: '',
      message: '',
      privacy: false,
    });
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

  it('enables the submit button only when the complete form is valid', () => {
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
    };
    const submitButton = fixture.nativeElement.querySelector(
      '.contact-form__submit',
    ) as HTMLButtonElement;

    expect(submitButton.disabled).toBe(true);

    component.contactForm.setValue({
      name: 'Ahmad',
      email: 'ahmad@example.com',
      message: 'Ich möchte ein Webprojekt besprechen.',
      privacy: false,
    });
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(true);

    component.contactForm.setValue({
      name: 'Ahmad',
      email: 'ahmad@example.com',
      message: 'Ich möchte ein Webprojekt besprechen.',
      privacy: true,
    });
    fixture.detectChanges();

    expect(submitButton.disabled).toBe(false);
  });
});

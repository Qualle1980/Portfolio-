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

  it('rejects digits in the name and explains the allowed characters', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelectorAll('input')[0] as HTMLInputElement;

    input.value = 'Ahmad1';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const error = fixture.nativeElement.querySelectorAll(
      '.contact-form__field-error',
    )[0] as HTMLElement;
    expect(error.textContent?.trim()).toBe(
      'Please use only letters, spaces, hyphens, or apostrophes.',
    );
  });

  it('shows a specific error message for an email without an at sign', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelectorAll('input')[1] as HTMLInputElement;

    input.value = 'ahmad.example.com';
    input.dispatchEvent(new Event('input'));
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const error = fixture.nativeElement.querySelectorAll(
      '.contact-form__field-error',
    )[1] as HTMLElement;
    expect(error.textContent?.trim()).toBe('Please enter a valid email address.');
  });

  it('explains the minimum length for short names and messages', () => {
    const fixture = TestBed.createComponent(Contact);
    TestBed.inject(PortfolioContent).setLanguage('de');
    fixture.detectChanges();
    const fields = fixture.nativeElement.querySelectorAll(
      '.contact-form__field input, .contact-form__field textarea',
    ) as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    fields[0].value = 'Al';
    fields[0].dispatchEvent(new Event('input'));
    fields[0].dispatchEvent(new Event('blur'));
    fields[2].value = 'Zu kurz';
    fields[2].dispatchEvent(new Event('input'));
    fields[2].dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const errors = fixture.nativeElement.querySelectorAll('.contact-form__field-error');
    expect(errors[0].textContent?.trim()).toBe(
      'Dein Name muss mindestens drei Zeichen lang sein.',
    );
    expect(errors[2].textContent?.trim()).toBe(
      'Deine Nachricht muss mindestens zehn Zeichen lang sein.',
    );
  });

  it('accepts valid values and resets the form', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      contactForm: {
        setValue(value: { name: string; email: string; message: string; privacy: boolean }): void;
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

  it('keeps the page position when the contact prompt is clicked', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const promptLink = fixture.nativeElement.querySelector('.contact__prompt a') as HTMLAnchorElement;
    const clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true });

    promptLink.dispatchEvent(clickEvent);

    expect(clickEvent.defaultPrevented).toBe(true);
  });

  it('enables the submit button only when the complete form is valid', () => {
    const fixture = TestBed.createComponent(Contact);
    fixture.detectChanges();

    const component = fixture.componentInstance as unknown as {
      contactForm: {
        setValue(value: { name: string; email: string; message: string; privacy: boolean }): void;
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

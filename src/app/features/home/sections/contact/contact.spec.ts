import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
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
});

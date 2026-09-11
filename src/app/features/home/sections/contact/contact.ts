import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  host: { id: 'contact', class: 'section' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly contact = computed(() => this.portfolioContent.currentContent().contact);
  protected readonly language = this.portfolioContent.language;
  protected readonly submitStatus = signal<'idle' | 'sending' | 'ready' | 'error'>('idle');
  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[\p{L}]+(?:[ '-][\p{L}]+)*$/u),
      ],
    ],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
    website: [''],
  });

  protected isInvalid(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.touched && control.invalid;
  }

  protected errorMessage(controlName: 'name' | 'email' | 'message'): string {
    const control = this.contactForm.controls[controlName];
    const copy = this.contact();

    if (controlName === 'name') {
      if (control.hasError('required')) return copy.nameRequiredError;
      if (control.hasError('minlength')) return copy.nameLengthError;
      return copy.nameFormatError;
    }

    if (controlName === 'email') {
      return control.hasError('required') ? copy.emailRequiredError : copy.emailFormatError;
    }

    return control.hasError('required') ? copy.messageRequiredError : copy.messageLengthError;
  }

  protected keepContactPosition(event: Event): void {
    event.preventDefault();
  }

  protected submitForm(): void {
    this.submitStatus.set('idle');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { name, email, message, privacy, website } = this.contactForm.getRawValue();
    this.submitStatus.set('sending');

    this.http.post<{ success: boolean }>('/api/contact.php', {
      name,
      email,
      message,
      privacy,
      website,
    }).subscribe({
      next: (response) => {
        if (response.success !== true) {
          this.submitStatus.set('error');
          return;
        }

        this.submitStatus.set('ready');
        this.contactForm.reset();
      },
      error: () => this.submitStatus.set('error'),
    });
  }
}

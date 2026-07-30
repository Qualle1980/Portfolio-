import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
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
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly contact = computed(() => this.portfolioContent.currentContent().contact);
  protected readonly language = this.portfolioContent.language;
  protected readonly submitStatus = signal<'idle' | 'ready'>('idle');
  protected readonly contactForm = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  protected isInvalid(controlName: keyof typeof this.contactForm.controls): boolean {
    const control = this.contactForm.controls[controlName];
    return control.touched && control.invalid;
  }

  protected submitForm(): void {
    this.submitStatus.set('idle');

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitStatus.set('ready');
    this.contactForm.reset();
  }
}

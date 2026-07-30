import { TestBed } from '@angular/core/testing';
import { Testimonials } from './testimonials';

describe('Testimonials', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonials],
    }).compileComponents();
  });

  it('changes the active testimonial with the controls', () => {
    const fixture = TestBed.createComponent(Testimonials);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const nextButton = element.querySelectorAll<HTMLButtonElement>('.testimonials__arrow')[1];

    expect(element.querySelector('.testimonials__dot--active')).toBe(
      element.querySelectorAll('.testimonials__dot')[0],
    );

    nextButton.click();
    fixture.detectChanges();

    expect(element.querySelector('.testimonials__dot--active')).toBe(
      element.querySelectorAll('.testimonials__dot')[1],
    );
  });

  it('supports the left and right arrow keys', () => {
    const fixture = TestBed.createComponent(Testimonials);
    fixture.detectChanges();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight' }));
    fixture.detectChanges();

    const dots = fixture.nativeElement.querySelectorAll('.testimonials__dot');
    expect(fixture.nativeElement.querySelector('.testimonials__dot--active')).toBe(dots[1]);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft' }));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.testimonials__dot--active')).toBe(dots[0]);
  });
});

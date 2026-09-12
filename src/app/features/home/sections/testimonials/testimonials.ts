import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

/** Provides carousel, keyboard and swipe controls for colleague testimonials. */
@Component({
  selector: 'app-testimonials',
  imports: [],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  host: { id: 'testimonials', class: 'section' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  private readonly portfolioContent = inject(PortfolioContent);
  private swipeStartX: number | null = null;
  private swipeStartY: number | null = null;

  protected readonly testimonials = computed(
    () => this.portfolioContent.currentContent().testimonials,
  );
  protected readonly activeIndex = signal(0);
  protected readonly slideDirection = signal<'next' | 'previous' | null>(null);
  protected readonly visibleTestimonials = computed(() => {
    const items = this.testimonials().items;
    const activeIndex = this.activeIndex();
    const previousIndex = (activeIndex - 1 + items.length) % items.length;
    const nextIndex = (activeIndex + 1) % items.length;

    return [items[previousIndex], items[activeIndex], items[nextIndex]];
  });

  /** Selects the previous testimonial and starts the backward transition. */
  protected showPrevious(): void {
    const itemCount = this.testimonials().items.length;
    this.activeIndex.update((index) => (index - 1 + itemCount) % itemCount);
    this.slideDirection.set('previous');
  }

  /** Selects the next testimonial and starts the forward transition. */
  protected showNext(): void {
    const itemCount = this.testimonials().items.length;
    this.activeIndex.update((index) => (index + 1) % itemCount);
    this.slideDirection.set('next');
  }

  /**
   * Selects a testimonial directly from its navigation dot.
   * @param index - Zero-based testimonial index.
   */
  protected showTestimonial(index: number): void {
    const direction = index > this.activeIndex() ? 'next' : 'previous';
    this.activeIndex.set(index);
    this.slideDirection.set(direction);
  }

  /** Clears the current transition direction after an animation completes. */
  protected finishSlide(): void {
    this.slideDirection.set(null);
  }

  /**
   * Records the pointer position at the beginning of a swipe gesture.
   * @param event - Initial pointer event.
   */
  protected startSwipe(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    this.swipeStartX = event.clientX;
    this.swipeStartY = event.clientY;
  }

  /**
   * Evaluates a completed pointer gesture and changes testimonial when it is horizontal.
   * @param event - Pointer event at the end of the gesture.
   */
  protected finishSwipe(event: PointerEvent): void {
    if (this.swipeStartX === null || this.swipeStartY === null) return;

    const distanceX = event.clientX - this.swipeStartX;
    const distanceY = event.clientY - this.swipeStartY;
    this.cancelSwipe();

    if (Math.abs(distanceX) < 48 || Math.abs(distanceX) <= Math.abs(distanceY)) return;
    distanceX < 0 ? this.showNext() : this.showPrevious();
  }

  /** Resets the stored swipe coordinates. */
  protected cancelSwipe(): void {
    this.swipeStartX = null;
    this.swipeStartY = null;
  }

  /** Selects the previous testimonial when the left arrow key is pressed. */
  @HostListener('document:keydown.arrowleft')
  protected showPreviousWithKeyboard(): void {
    this.showPrevious();
  }

  /** Selects the next testimonial when the right arrow key is pressed. */
  @HostListener('document:keydown.arrowright')
  protected showNextWithKeyboard(): void {
    this.showNext();
  }
}

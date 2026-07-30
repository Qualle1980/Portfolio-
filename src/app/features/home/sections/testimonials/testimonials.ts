import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

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

  protected showPrevious(): void {
    const itemCount = this.testimonials().items.length;
    this.activeIndex.update((index) => (index - 1 + itemCount) % itemCount);
    this.slideDirection.set('previous');
  }

  protected showNext(): void {
    const itemCount = this.testimonials().items.length;
    this.activeIndex.update((index) => (index + 1) % itemCount);
    this.slideDirection.set('next');
  }

  protected showTestimonial(index: number): void {
    const direction = index > this.activeIndex() ? 'next' : 'previous';
    this.activeIndex.set(index);
    this.slideDirection.set(direction);
  }

  protected finishSlide(): void {
    this.slideDirection.set(null);
  }

  @HostListener('document:keydown.arrowleft')
  protected showPreviousWithKeyboard(): void {
    this.showPrevious();
  }

  @HostListener('document:keydown.arrowright')
  protected showNextWithKeyboard(): void {
    this.showNext();
  }
}

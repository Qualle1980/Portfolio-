import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  inject,
} from '@angular/core';
import { About } from '../../sections/about/about';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { Projects } from '../../sections/projects/projects';
import { Skills } from '../../sections/skills/skills';
import { Testimonials } from '../../sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [About, Contact, Hero, Projects, Skills, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements AfterViewInit, OnDestroy {
  private readonly hostElement = inject<ElementRef<HTMLElement>>(ElementRef);
  private sectionObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    const sections = this.hostElement.nativeElement.querySelectorAll<HTMLElement>('.section');

    if (this.shouldShowSectionsImmediately()) {
      sections.forEach((section) => section.classList.add('section--visible'));
      return;
    }

    this.sectionObserver = new IntersectionObserver(this.revealVisibleSections, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    });
    sections.forEach((section) => this.sectionObserver?.observe(section));
  }

  ngOnDestroy(): void {
    this.sectionObserver?.disconnect();
  }

  private readonly revealVisibleSections = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ): void => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('section--visible');
      observer.unobserve(entry.target);
    });
  };

  private shouldShowSectionsImmediately(): boolean {
    const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    return typeof IntersectionObserver === 'undefined' || prefersReducedMotion;
  }
}

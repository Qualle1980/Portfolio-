import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Home } from './home';

describe('Home', () => {
  const originalIntersectionObserver = globalThis.IntersectionObserver;
  const originalMatchMedia = window.matchMedia;

  afterEach(() => {
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      value: originalIntersectionObserver,
    });
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: originalMatchMedia,
    });
  });

  it('shows every section immediately when IntersectionObserver is unavailable', () => {
    const host = createHostWithSections();
    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      value: undefined,
    });

    const component = createComponent(host);
    component.ngAfterViewInit();

    expect(host.querySelectorAll('.section--visible').length).toBe(2);
  });

  it('does not animate sections when reduced motion is preferred', () => {
    const host = createHostWithSections();
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    });

    const component = createComponent(host);
    component.ngAfterViewInit();

    expect(host.querySelectorAll('.section--visible').length).toBe(2);
  });

  it('reveals an intersecting section and stops observing it', () => {
    const host = createHostWithSections();
    const observe = vi.fn();
    const unobserve = vi.fn();
    const disconnect = vi.fn();
    let observerCallback!: IntersectionObserverCallback;
    let observerInstance!: IntersectionObserver;

    class IntersectionObserverMock {
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback;
        observerInstance = this as unknown as IntersectionObserver;
      }

      observe = observe;
      unobserve = unobserve;
      disconnect = disconnect;
    }

    Object.defineProperty(globalThis, 'IntersectionObserver', {
      configurable: true,
      value: IntersectionObserverMock,
    });

    const component = createComponent(host);
    component.ngAfterViewInit();
    const firstSection = host.querySelector<HTMLElement>('.section') as HTMLElement;

    observerCallback(
      [{ isIntersecting: true, target: firstSection } as unknown as IntersectionObserverEntry],
      observerInstance,
    );

    expect(observe).toHaveBeenCalledTimes(2);
    expect(firstSection.classList.contains('section--visible')).toBe(true);
    expect(unobserve).toHaveBeenCalledWith(firstSection);

    component.ngOnDestroy();
    expect(disconnect).toHaveBeenCalled();
  });
});

function createComponent(host: HTMLElement): Home {
  TestBed.configureTestingModule({
    providers: [{ provide: ElementRef, useValue: new ElementRef(host) }],
  });

  return TestBed.runInInjectionContext(() => new Home());
}

function createHostWithSections(): HTMLElement {
  const host = document.createElement('main');
  host.innerHTML = '<section class="section"></section><section class="section"></section>';
  return host;
}

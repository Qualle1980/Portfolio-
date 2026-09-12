import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Project } from '../../../../shared/models/portfolio.models';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

/** Displays project summaries, previews and the keyboard-accessible project dialog. */
@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  host: { id: 'projects', class: 'section' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  private readonly portfolioContent = inject(PortfolioContent);
  private readonly document = inject(DOCUMENT);

  protected readonly projects = computed(() => this.portfolioContent.currentContent().projects);
  protected readonly selectedProject = signal<Project | null>(null);
  protected readonly previewProject = signal<Project | null>(null);
  private readonly suppressedPreview = signal<Project | null>(null);
  private readonly lockBackgroundScroll = effect((onCleanup) => {
    if (!this.selectedProject()) return;

    const previousDocumentOverflow = this.document.documentElement.style.overflow;
    const previousOverflow = this.document.body.style.overflow;
    this.document.documentElement.style.overflow = 'hidden';
    this.document.body.style.overflow = 'hidden';
    this.document.body.classList.add('project-dialog-open');
    onCleanup(() => {
      this.document.documentElement.style.overflow = previousDocumentOverflow;
      this.document.body.style.overflow = previousOverflow;
      this.document.body.classList.remove('project-dialog-open');
    });
  });

  /**
   * Opens the detail dialog for a project.
   * @param project - Project to display.
   */
  protected openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  /** Closes the currently open project dialog. */
  protected closeProject(): void {
    this.selectedProject.set(null);
  }

  /**
   * Shows a project preview unless it was dismissed with the Escape key.
   * @param project - Project to preview.
   */
  protected showProjectPreview(project: Project): void {
    if (this.suppressedPreview() === project) return;

    this.previewProject.set(project);
  }

  /**
   * Hides a project preview and clears its temporary suppression state.
   * @param project - Project whose preview is leaving the active area.
   */
  protected hideProjectPreview(project: Project): void {
    if (this.previewProject() === project) {
      this.previewProject.set(null);
    }

    if (this.suppressedPreview() === project) {
      this.suppressedPreview.set(null);
    }
  }

  /** Advances the open dialog to the next project, wrapping at the end. */
  protected showNextProject(): void {
    const items = this.projects().items;
    const currentIndex = items.findIndex((project) => project === this.selectedProject());
    const nextIndex = (currentIndex + 1) % items.length;

    this.selectedProject.set(items[nextIndex]);
  }

  /**
   * Resolves the local skill icon used for a project technology.
   * @param technology - Display name of the technology.
   * @returns Relative asset path for the matching icon.
   */
  protected technologyIcon(technology: string): string {
    const iconNames: Record<string, string> = {
      Angular: 'angular',
      CSS: 'css3',
      HTML: 'html5',
      JavaScript: 'javascript',
      SCSS: 'css3',
      Supabase: 'supabase',
      TypeScript: 'typescript',
    };

    return `assets/icons/skills/${iconNames[technology]}.svg`;
  }

  /** Closes both the project dialog and hover preview when Escape is pressed. */
  @HostListener('document:keydown.escape')
  protected closeProjectWithEscape(): void {
    const project = this.selectedProject() ?? this.previewProject();

    if (project) {
      this.suppressedPreview.set(project);
    }

    this.previewProject.set(null);
    this.closeProject();
  }
}

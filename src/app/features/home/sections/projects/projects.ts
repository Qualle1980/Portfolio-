import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Project } from '../../../../shared/models/portfolio.models';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

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

  protected readonly projects = computed(() => this.portfolioContent.currentContent().projects);
  protected readonly selectedProject = signal<Project | null>(null);

  protected openProject(project: Project): void {
    this.selectedProject.set(project);
  }

  protected closeProject(): void {
    this.selectedProject.set(null);
  }

  protected showNextProject(): void {
    const items = this.projects().items;
    const currentIndex = items.findIndex((project) => project === this.selectedProject());
    const nextIndex = (currentIndex + 1) % items.length;

    this.selectedProject.set(items[nextIndex]);
  }

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

  @HostListener('document:keydown.escape')
  protected closeProjectWithEscape(): void {
    this.closeProject();
  }
}

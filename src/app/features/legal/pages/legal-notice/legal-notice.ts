import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Language } from '../../../../shared/models/portfolio.models';
import { PortfolioContent } from '../../../../shared/services/portfolio-content';

interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
  readonly address?: boolean;
}

interface LegalNoticeCopy {
  readonly title: string;
  readonly backLabel: string;
  readonly sections: readonly LegalSection[];
  readonly contactNote: string;
  readonly date: string;
}

const LEGAL_NOTICE_COPY: Readonly<Record<Language, LegalNoticeCopy>> = {
  de: {
    title: 'Impressum',
    backLabel: 'Zurück zur Startseite',
    sections: [
      {
        title: 'Angaben',
        address: true,
        paragraphs: [
          'Ahmad Ataya',
          'Gabelsberger Str. 49',
          '67069 Ludwigshafen am Rhein',
          'Deutschland',
        ],
      },
      {
        title: 'Kontakt',
        paragraphs: ['E-Mail: ahmad-ataya@hotmail.de'],
      },
      {
        title: 'Annahme der Bedingungen',
        paragraphs: [
          'Durch den Zugriff auf dieses Portfolio und dessen Nutzung stimmst du den hier beschriebenen Bedingungen zu. Inhalte und Bedingungen können bei Bedarf angepasst werden.',
        ],
      },
      {
        title: 'Umfang und Eigentum des Portfolios',
        paragraphs: [
          'Dieses Portfolio wurde als persönliches Projekt von Ahmad Ataya entwickelt. Es stellt ausgewählte Arbeiten, Fähigkeiten und Lernergebnisse aus der Weiterbildung zum Full-Stack-Entwickler vor.',
          'Texte, Gestaltung und selbst erstellte Bestandteile dürfen ohne vorherige Zustimmung nicht vervielfältigt oder für andere Zwecke verwendet werden.',
        ],
      },
      {
        title: 'Urheberrechte',
        paragraphs: [
          'Die Inhalte dieses Portfolios unterliegen dem geltenden Urheberrecht. Rechte an verwendeten Marken, Logos und Materialien Dritter verbleiben bei den jeweiligen Rechteinhabern.',
        ],
      },
      {
        title: 'Nutzung des Portfolios',
        paragraphs: [
          'Die Inhalte dienen ausschließlich der persönlichen Vorstellung und Information. Eine Nutzung für rechtswidrige Zwecke, eine automatisierte Auswertung oder eine Weiterverwendung ohne Zustimmung ist nicht gestattet.',
        ],
      },
      {
        title: 'Haftungsausschluss',
        paragraphs: [
          'Die Inhalte wurden mit Sorgfalt erstellt. Dennoch kann keine Gewähr für Vollständigkeit, Richtigkeit und Aktualität übernommen werden.',
          'Für Inhalte externer Websites, die über Links erreichbar sind, sind ausschließlich deren Betreiber verantwortlich.',
        ],
      },
      {
        title: 'Freistellung',
        paragraphs: [
          'Bei einer Nutzung dieses Portfolios, die gegen geltendes Recht oder die hier genannten Bedingungen verstößt, ist Ahmad Ataya von daraus entstehenden Ansprüchen Dritter freizustellen.',
        ],
      },
    ],
    contactNote: 'Bei Fragen oder Hinweisen kannst du mich über den Kontaktbereich erreichen.',
    date: 'Stand: 30. Juli 2026',
  },
  en: {
    title: 'Legal Notice',
    backLabel: 'Back to the home page',
    sections: [
      {
        title: 'Imprint',
        address: true,
        paragraphs: [
          'Ahmad Ataya',
          'Gabelsberger Str. 49',
          '67069 Ludwigshafen am Rhein',
          'Germany',
        ],
      },
      {
        title: 'Contact',
        paragraphs: ['Email: ahmad-ataya@hotmail.de'],
      },
      {
        title: 'Acceptance of terms',
        paragraphs: [
          'By accessing and using this portfolio, you agree to the terms described here. The content and these terms may be updated when necessary.',
        ],
      },
      {
        title: 'Scope and ownership of the portfolio',
        paragraphs: [
          'This portfolio was developed as a personal project by Ahmad Ataya. It presents selected work, skills and learning outcomes from his full-stack developer training.',
          'Texts, designs and original components may not be copied or used for other purposes without prior permission.',
        ],
      },
      {
        title: 'Proprietary rights',
        paragraphs: [
          'The content of this portfolio is protected by applicable copyright law. Rights to third-party trademarks, logos and materials remain with their respective owners.',
        ],
      },
      {
        title: 'Use of the portfolio',
        paragraphs: [
          'The content is provided solely for personal presentation and information. It may not be used for unlawful purposes, automated evaluation or redistribution without permission.',
        ],
      },
      {
        title: 'Disclaimer of warranties and limitation of liability',
        paragraphs: [
          'The content has been prepared with care. However, no guarantee can be given that all information is complete, accurate and current.',
          'The operators of linked external websites are solely responsible for their content.',
        ],
      },
      {
        title: 'Indemnity',
        paragraphs: [
          'If this portfolio is used in breach of applicable law or these terms, Ahmad Ataya must be indemnified against resulting third-party claims.',
        ],
      },
    ],
    contactNote: 'For questions or notices, please contact me through the contact section.',
    date: 'Date: July 30, 2026',
  },
};

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalNotice {
  private readonly portfolioContent = inject(PortfolioContent);

  protected readonly copy = computed(() => LEGAL_NOTICE_COPY[this.portfolioContent.language()]);
}

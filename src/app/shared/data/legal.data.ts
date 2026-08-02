import { LegalNoticeCopy, PrivacyPolicyCopy } from '../models/legal.models';
import { Language } from '../models/portfolio.models';

export const LEGAL_NOTICE_COPY: Readonly<Record<Language, LegalNoticeCopy>> = {
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

export const PRIVACY_POLICY_COPY: Readonly<Record<Language, PrivacyPolicyCopy>> = {
  de: {
    title: 'Datenschutz',
    backLabel: 'Zurück zur Startseite',
    sections: [
      {
        title: '1. Verantwortlicher',
        address: true,
        paragraphs: [
          'Ahmad Ataya',
          'Gabelsberger Str. 49',
          '67069 Ludwigshafen am Rhein',
          'Deutschland',
          'E-Mail: ahmad-ataya@hotmail.de',
        ],
      },
      {
        title: '2. Allgemeine Hinweise',
        paragraphs: [
          'Diese Datenschutzerklärung informiert darüber, welche personenbezogenen Daten beim Besuch dieses Portfolios verarbeitet werden. Personenbezogene Daten sind alle Informationen, mit denen eine Person direkt oder indirekt identifiziert werden kann.',
          'Es werden nur Daten verarbeitet, die für die technische Bereitstellung und Sicherheit der Website erforderlich sind. Dieses Portfolio verwendet derzeit keine Analyse- oder Tracking-Dienste.',
        ],
      },
      {
        title: '3. Hosting und Server-Logfiles',
        paragraphs: [
          'Dieses Portfolio wird auf einem Server der Developer Akademie GmbH, Tassiloplatz 25, 81541 München, bereitgestellt. Beim Aufruf der Website können technisch erforderliche Server-Logfiles verarbeitet werden.',
          'Dazu können insbesondere IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Datei, übertragene Datenmenge, Referrer-URL, Browser, Betriebssystem und Zugriffsstatus gehören.',
          'Die Verarbeitung dient der sicheren, stabilen und fehlerfreien Bereitstellung der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse liegt im sicheren und funktionsfähigen Betrieb dieses Portfolios.',
          'Die Logdaten werden gelöscht, sobald sie für den Zweck der technischen Bereitstellung und Sicherheit nicht mehr erforderlich sind, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Weitere Einzelheiten zur Verarbeitung durch den Hosting-Anbieter stehen in dessen Datenschutzerklärung.',
        ],
        links: [
          {
            label: 'Datenschutzerklärung der Developer Akademie',
            url: 'https://developerakademie.com/data-protection',
          },
        ],
      },
      {
        title: '4. Kontaktformular',
        paragraphs: [
          'Das Kontaktformular prüft die eingegebenen Daten derzeit ausschließlich lokal im Browser. Name, E-Mail-Adresse und Nachricht werden aktuell weder an einen Server übermittelt noch dauerhaft gespeichert.',
          'Vor einer späteren Aktivierung des E-Mail-Versands wird diese Datenschutzerklärung um Zweck, Rechtsgrundlage, Empfänger und Speicherdauer der dann stattfindenden Verarbeitung ergänzt.',
        ],
      },
      {
        title: '5. Cookies, Analyse und lokale Speicherung',
        paragraphs: [
          'Dieses Portfolio setzt derzeit keine Cookies ein und verwendet weder Webanalyse noch Nutzer-Tracking. Es werden keine personenbezogenen Daten im Local Storage oder Session Storage des Browsers gespeichert.',
        ],
      },
      {
        title: '6. Lokal eingebundene Inhalte',
        paragraphs: [
          'Die verwendeten Schriftarten, Bilder und Icons werden lokal mit der Website ausgeliefert. Beim Anzeigen dieser Inhalte wird deshalb keine zusätzliche Verbindung zu einem Schrift-, Bild- oder Icon-Anbieter hergestellt.',
        ],
      },
      {
        title: '7. Externe Links',
        paragraphs: [
          'Dieses Portfolio enthält Links zu GitHub, LinkedIn sowie zu veröffentlichten Projekten. Erst wenn ein externer Link geöffnet wird, stellt der Browser eine Verbindung zum jeweiligen Anbieter her. Für die dortige Datenverarbeitung ist der jeweilige Anbieter verantwortlich.',
        ],
      },
      {
        title: '8. Verschlüsselte Übertragung',
        paragraphs: [
          'Die veröffentlichte Website wird über HTTPS aufgerufen. Dadurch werden Daten während der Übertragung zwischen Browser und Server verschlüsselt.',
        ],
      },
      {
        title: '9. Rechte betroffener Personen',
        paragraphs: [
          'Nach der DSGVO bestehen insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Einer Verarbeitung auf Grundlage berechtigter Interessen kann nach Art. 21 DSGVO widersprochen werden.',
          'Außerdem besteht das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz, Hintere Bleiche 34, 55116 Mainz.',
        ],
        links: [
          {
            label: 'Kontakt zum Landesbeauftragten für Datenschutz Rheinland-Pfalz',
            url: 'https://www.datenschutz.rlp.de/service/kontakt',
          },
        ],
      },
      {
        title: '10. Aktualisierung dieser Datenschutzerklärung',
        paragraphs: [
          'Diese Datenschutzerklärung wird angepasst, wenn sich Funktionen, Dienste oder gesetzliche Anforderungen ändern. Maßgeblich ist die jeweils auf dieser Seite veröffentlichte Fassung.',
        ],
      },
    ],
    date: 'Stand: 31. Juli 2026',
  },
  en: {
    title: 'Privacy Policy',
    backLabel: 'Back to the home page',
    sections: [
      {
        title: '1. Controller',
        address: true,
        paragraphs: [
          'Ahmad Ataya',
          'Gabelsberger Str. 49',
          '67069 Ludwigshafen am Rhein',
          'Germany',
          'Email: ahmad-ataya@hotmail.de',
        ],
      },
      {
        title: '2. General information',
        paragraphs: [
          'This privacy policy explains which personal data is processed when this portfolio is visited. Personal data is any information that can be used to identify a person directly or indirectly.',
          'Only data required for the technical delivery and security of the website is processed. This portfolio currently does not use analytics or tracking services.',
        ],
      },
      {
        title: '3. Hosting and server log files',
        paragraphs: [
          'This portfolio is hosted on a server provided by Developer Akademie GmbH, Tassiloplatz 25, 81541 Munich, Germany. Technically necessary server log files may be processed when the website is accessed.',
          'These may include the IP address, date and time of access, requested file, amount of data transferred, referrer URL, browser, operating system and access status.',
          'The processing ensures the secure, stable and error-free delivery of the website. The legal basis is Art. 6(1)(f) GDPR. The legitimate interest is the secure and functional operation of this portfolio.',
          'Log data is deleted when it is no longer required for technical delivery and security, unless statutory retention obligations apply. Further details about processing by the hosting provider are available in its privacy policy.',
        ],
        links: [
          {
            label: 'Developer Akademie privacy policy',
            url: 'https://developerakademie.com/data-protection',
          },
        ],
      },
      {
        title: '4. Contact form',
        paragraphs: [
          'The contact form currently validates the entered data only locally in the browser. The name, email address and message are not transmitted to a server or stored permanently at this time.',
          'Before email delivery is activated in the future, this privacy policy will be updated to include the purpose, legal basis, recipients and retention period of that processing.',
        ],
      },
      {
        title: '5. Cookies, analytics and local storage',
        paragraphs: [
          'This portfolio currently does not set cookies and does not use web analytics or user tracking. No personal data is stored in the browser’s Local Storage or Session Storage.',
        ],
      },
      {
        title: '6. Locally hosted content',
        paragraphs: [
          'The fonts, images and icons used by this portfolio are delivered locally with the website. Displaying this content therefore does not create an additional connection to a font, image or icon provider.',
        ],
      },
      {
        title: '7. External links',
        paragraphs: [
          'This portfolio contains links to GitHub, LinkedIn and published projects. A connection to the relevant provider is established only after an external link is opened. The respective provider is responsible for any processing that takes place there.',
        ],
      },
      {
        title: '8. Encrypted transmission',
        paragraphs: [
          'The published website is accessed via HTTPS. This encrypts data in transit between the browser and the server.',
        ],
      },
      {
        title: '9. Data subject rights',
        paragraphs: [
          'Under the GDPR, data subjects have rights including access, rectification, erasure, restriction of processing and data portability. Processing based on legitimate interests may be objected to under Art. 21 GDPR.',
          'You also have the right to lodge a complaint with a data protection supervisory authority. The competent authority includes the State Commissioner for Data Protection and Freedom of Information Rhineland-Palatinate, Hintere Bleiche 34, 55116 Mainz, Germany.',
        ],
        links: [
          {
            label: 'Contact the Rhineland-Palatinate data protection authority',
            url: 'https://www.datenschutz.rlp.de/service/kontakt',
          },
        ],
      },
      {
        title: '10. Updates to this privacy policy',
        paragraphs: [
          'This privacy policy will be updated whenever functions, services or legal requirements change. The version published on this page is the applicable version.',
        ],
      },
    ],
    date: 'Last updated: July 31, 2026',
  },
};

import { Language, PortfolioCopy, SkillTechnology } from '../models/portfolio.models';

export const SKILL_TECHNOLOGIES: readonly SkillTechnology[] = [
  { id: 'html5', name: 'HTML' },
  { id: 'css3', name: 'CSS' },
  { id: 'javascript', name: 'JavaScript' },
  { id: 'material-design', name: 'Material Design' },
  { id: 'typescript', name: 'TypeScript' },
  { id: 'angular', name: 'Angular' },
  { id: 'supabase', name: 'Supabase' },
  { id: 'git', name: 'Git' },
  { id: 'rest-api', name: 'REST-API' },
  { id: 'scrum', name: 'Scrum' },
  { id: 'growth-mindset', name: 'Growth mindset', highlighted: true },
];

export const PORTFOLIO_CONTENT: Readonly<Record<Language, PortfolioCopy>> = {
  de: {
    navigation: [
      { label: 'Über mich', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projekte', fragment: 'projects' },
    ],
    hero: {
      role: 'Frontend-Entwickler',
      name: 'Ahmad Ataya',
      projectsCta: 'Meine Projekte',
      contactCta: 'Kontakt',
      scrollLabel: 'Zum Abschnitt Über mich',
      contactLabel: 'Kontakt',
      ticker: [
        'Remote verfügbar',
        'Frontend-Entwickler',
        'Standort: Ludwigshafen am Rhein',
        'Offen für neue Projekte',
      ],
    },
    about: {
      label: 'Wer ich bin',
      title: 'Über mich',
      intro:
        'Hey, ich bin Ahmad – angehender Full-Stack-Entwickler mit aktuellem Schwerpunkt auf Frontend-Entwicklung. Mich begeistert es, Ideen in moderne und benutzerfreundliche Weblösungen zu verwandeln.',
      photoAlt: 'Porträt von Ahmad Ataya',
      points: [
        {
          icon: 'location',
          text: 'Ich lebe in Ludwigshafen am Rhein und bin offen für Remote-Arbeit und neue Projekte.',
        },
        {
          icon: 'learning',
          text: 'Ich lerne schnell und lege Wert auf neue Technologien, sauberen Code, klare Strukturen und eine gute Nutzererfahrung.',
        },
        {
          icon: 'quality',
          text: 'Aus Projektmanagement, technischem Support und Unternehmensführung bringe ich Verantwortung, Kommunikationsstärke und Verständnis für Kundenwünsche mit.',
        },
      ],
    },
    skills: {
      label: 'Technologien',
      title: 'Skill Set',
      intro:
        'In meiner Weiterbildung zum Full-Stack-Entwickler sammle ich praktische Erfahrung mit modernen Frontend-Technologien. Ich arbeite strukturiert, lerne neue Werkzeuge schnell und entwickle mein Wissen kontinuierlich weiter.',
      prompt: 'Du suchst ',
      promptHighlight: 'weitere Skills?',
      support:
        'Ich bin offen für neue Technologien und freue mich darauf, mein Wissen für künftige Projekte zu erweitern.',
      cta: 'Kontakt',
    },
    projects: {
      label: 'Portfolio',
      title: 'Ausgewählte Projekte',
      intro:
        'Entdecke eine Auswahl meiner Projekte und probiere die Anwendungen direkt aus.',
      aboutLabel: 'Worum geht es bei diesem Projekt',
      technologiesLabel: 'Verwendete Technologien',
      learnedLabel: 'Was ich gelernt habe',
      liveLabel: 'Live testen',
      githubLabel: 'GitHub',
      closeLabel: 'Projektfenster schließen',
      comingSoonLabel: 'Coming soon',
      nextLabel: 'Nächstes Projekt',
      items: [
        {
          number: '01',
          title: 'El Pollo Loco',
          description:
            'Ein objektorientiertes Jump-and-Run-Spiel, in dem Pepe Münzen und Flaschen sammelt und gegen Hühner sowie einen Endgegner kämpft.',
          learned:
            'Ich habe Klassen, Vererbung, Animationen, Tastatur- und Touchsteuerung sowie Sound in einem vollständigen Spiel zusammengeführt.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          liveUrl: 'https://ahmadataya.developerakademie.net/El%20Pollo%20Loco/',
          githubUrl: 'https://github.com/Qualle1980/El-Pollo-Loco',
          image: 'assets/images/projects/el-pollo-loco.png',
          imageAlt: 'Startbildschirm des Spiels El Pollo Loco',
        },
        {
          number: '02',
          title: 'Join',
          placeholder: true,
          description:
            'Ein Kanban-Task-Manager zur übersichtlichen Organisation von Aufgaben in den Bereichen To do, In progress, Await feedback und Done.',
          learned:
            'Dieses Projekt wird im weiteren Kursverlauf umgesetzt. Die Live- und GitHub-Links werden anschließend ergänzt.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Supabase'],
          image: 'assets/images/projects/join.jpg',
          imageAlt: 'Vorschau des Kanban-Task-Managers Join',
        },
      ],
    },
    testimonials: {
      title: 'Was meine Kollegen über mich sagen',
      previousLabel: 'Vorherige Referenz',
      nextLabel: 'Nächste Referenz',
      items: [
        {
          quote: 'Eine persönliche Referenz wird nach Abschluss eines gemeinsamen Projekts ergänzt.',
          author: 'Referenz ausstehend',
          role: 'Projektfeedback',
        },
        {
          quote: 'Hier wird später authentisches Feedback aus der Zusammenarbeit veröffentlicht.',
          author: 'Referenz ausstehend',
          role: 'Kollegiales Feedback',
        },
        {
          quote: 'Dieser Platz ist für eine weitere echte Rückmeldung reserviert.',
          author: 'Referenz ausstehend',
          role: 'Kurs- oder Projektfeedback',
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      title: 'Lass uns zusammenarbeiten',
      subtitle: 'Du hast ein Problem zu lösen?',
      intro:
        'Du brauchst eine moderne Website, Unterstützung bei einem Frontend-Projekt oder einen zuverlässigen Entwickler für deine Idee? Erzähl mir von deinem Projekt.',
      prompt: 'Du brauchst einen Frontend-Entwickler?',
      promptLink: 'Lass uns sprechen!',
      nameLabel: 'Wie heißt du?',
      namePlaceholder: 'Dein Name',
      nameError: 'Bitte gib mindestens zwei Zeichen ein.',
      emailLabel: 'Wie lautet deine E-Mail?',
      emailPlaceholder: 'deinname@email.de',
      emailError: 'Bitte gib eine gültige E-Mail-Adresse ein.',
      messageLabel: 'Wie kann ich dir helfen?',
      messagePlaceholder: 'Hallo Ahmad, ich interessiere mich für …',
      messageError: 'Bitte beschreibe dein Anliegen mit mindestens zehn Zeichen.',
      privacyPrefix: 'Ich habe die',
      privacyLink: 'Datenschutzerklärung',
      privacySuffix: 'gelesen und stimme der Verarbeitung meiner Daten zu.',
      privacyError: 'Bitte stimme der Datenschutzerklärung zu.',
      submitLabel: 'Sag Hallo ;)',
      readyMessage: 'Das Formular ist geprüft. Der E-Mail-Versand wird vor dem Hosting verbunden.',
    },
    footer: {
      role: 'Webentwickler',
      location: 'Ludwigshafen, Deutschland',
      emailLabel: 'E-Mail',
      legalLabel: 'Impressum',
    },
  },
  en: {
    navigation: [
      { label: 'About me', fragment: 'about' },
      { label: 'Skills', fragment: 'skills' },
      { label: 'Projects', fragment: 'projects' },
    ],
    hero: {
      role: 'Frontend Developer',
      name: 'Ahmad Ataya',
      projectsCta: 'Check my work',
      contactCta: 'Contact me',
      scrollLabel: 'Scroll to About me',
      contactLabel: 'Contact',
      ticker: [
        'Available for remote work',
        'Frontend Developer',
        'Based in Ludwigshafen am Rhein',
        'Open to new projects',
      ],
    },
    about: {
      label: 'Who I Am',
      title: 'About me',
      intro:
        'Hey, I’m Ahmad – an aspiring full-stack developer currently focused on frontend development. I enjoy turning ideas into modern, engaging and user-friendly web solutions.',
      photoAlt: 'Portrait of Ahmad Ataya',
      points: [
        {
          icon: 'location',
          text: 'I’m based in Ludwigshafen, Germany, and open to remote work and new projects.',
        },
        {
          icon: 'learning',
          text: 'I learn quickly and value new technologies, clean code, clear structures and a strong user experience.',
        },
        {
          icon: 'quality',
          text: 'Experience in project management, technical support and business management has strengthened my sense of responsibility, communication skills and understanding of client needs.',
        },
      ],
    },
    skills: {
      label: 'Technologies',
      title: 'Skill Set',
      intro:
        'During my full-stack development training, I gain practical experience with modern frontend technologies. I work with clear structures, learn new tools quickly and continuously expand my knowledge.',
      prompt: 'You need ',
      promptHighlight: 'another skill?',
      support:
        'I am open to new technologies and look forward to expanding my knowledge for future projects.',
      cta: "Let's Talk",
    },
    projects: {
      label: 'Portfolio',
      title: 'Featured Projects',
      intro:
        'Explore a selection of my projects and try the applications directly.',
      aboutLabel: 'What is this project about',
      technologiesLabel: 'Technologies I have used',
      learnedLabel: 'What I have learned',
      liveLabel: 'Live test',
      githubLabel: 'GitHub',
      closeLabel: 'Close project window',
      comingSoonLabel: 'Coming soon',
      nextLabel: 'Next project',
      items: [
        {
          number: '01',
          title: 'El Pollo Loco',
          description:
            'An object-oriented jump-and-run game in which Pepe collects coins and bottles and fights chickens as well as a final boss.',
          learned:
            'I combined classes, inheritance, animations, keyboard and touch controls, and sound in a complete game.',
          technologies: ['HTML', 'CSS', 'JavaScript'],
          liveUrl: 'https://ahmadataya.developerakademie.net/El%20Pollo%20Loco/',
          githubUrl: 'https://github.com/Qualle1980/El-Pollo-Loco',
          image: 'assets/images/projects/el-pollo-loco.png',
          imageAlt: 'Start screen of the El Pollo Loco game',
        },
        {
          number: '02',
          title: 'Join',
          placeholder: true,
          description:
            'A Kanban task manager for clearly organizing tasks in To do, In progress, Await feedback and Done.',
          learned:
            'This project will be implemented later in the course. The live and GitHub links will be added afterwards.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Supabase'],
          image: 'assets/images/projects/join.jpg',
          imageAlt: 'Preview of the Join Kanban task manager',
        },
      ],
    },
    testimonials: {
      title: 'What my colleagues say about me',
      previousLabel: 'Previous reference',
      nextLabel: 'Next reference',
      items: [
        {
          quote: 'A personal reference will be added after completing a project together.',
          author: 'Reference pending',
          role: 'Project feedback',
        },
        {
          quote: 'Authentic feedback from a future collaboration will be published here.',
          author: 'Reference pending',
          role: 'Colleague feedback',
        },
        {
          quote: 'This space is reserved for another genuine testimonial.',
          author: 'Reference pending',
          role: 'Course or project feedback',
        },
      ],
    },
    contact: {
      label: 'Contact me',
      title: "Let's work together",
      subtitle: 'Got a problem to solve?',
      intro:
        'Do you need a modern website, support with a frontend project or a reliable developer for your idea? Tell me about your project.',
      prompt: 'Need a frontend developer?',
      promptLink: "Let's talk!",
      nameLabel: "What's your name?",
      namePlaceholder: 'Your name goes here',
      nameError: 'Oops! It seems your name is missing',
      emailLabel: "What's your email?",
      emailPlaceholder: 'youremail@email.com',
      emailError: 'Hoppla! Your email is required',
      messageLabel: 'How can I help you?',
      messagePlaceholder: 'Hello Ahmad, I am interested in...',
      messageError: 'What do you need to develop?',
      privacyPrefix: "I've read the",
      privacyLink: 'privacy policy',
      privacySuffix: 'and agree to the processing of my data as outlined.',
      privacyError: 'Please accept the privacy policy.',
      submitLabel: 'Say Hello ;)',
      readyMessage: 'The form is validated. Email delivery will be connected before hosting.',
    },
    footer: {
      role: 'Web Developer',
      location: 'Ludwigshafen, Germany',
      emailLabel: 'Email',
      legalLabel: 'Legal Notice',
    },
  },
};

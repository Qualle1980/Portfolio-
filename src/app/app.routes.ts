import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home').then(({ Home }) => Home),
    title: 'Ahmad Ataya | Webentwickler in Ludwigshafen',
  },
  {
    path: 'impressum',
    loadComponent: () =>
      import('./features/legal/pages/legal-notice/legal-notice').then(
        ({ LegalNotice }) => LegalNotice,
      ),
    title: 'Impressum | Ahmad Ataya',
  },
  {
    path: 'datenschutz',
    loadComponent: () =>
      import('./features/legal/pages/privacy-policy/privacy-policy').then(
        ({ PrivacyPolicy }) => PrivacyPolicy,
      ),
    title: 'Datenschutz | Ahmad Ataya',
  },
  { path: '**', redirectTo: '' },
];

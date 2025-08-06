import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [

  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    loadComponent: () => import('./pages/landing-page/landing-page.page').then(m => m.LandingPagePage)
  }
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'produtos',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) // Placeholder
  },
  {
    path: 'categorias',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) // Placeholder
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) // Placeholder
  },
  {
    path: '**',
    redirectTo: ''
  }
];
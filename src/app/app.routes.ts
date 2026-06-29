import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'SIMSOFT — Solutions ERP, CRM & GMAO pour la transformation digitale',
  },
  {
    path: 'produits/:slug',
    loadComponent: () => import('./features/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

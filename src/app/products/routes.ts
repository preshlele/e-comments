import { Route } from '@angular/router';

export default [
  {
    path: 'products',
    loadComponent: () => import('./index/index.page').then((m) => m.IndexPage),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./details/details.component').then((m) => m.DetailsComponent),
  },
] as Route[];

import { Routes } from '@angular/router';
import { MainMain } from './@common/layouts/main/main.main';
import { authGuard } from './guard/auth.guard';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then((m) => m.CartComponent),
  },
  {
    path: '',
    component: MainMain,
    canActivateChild: [authGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./products/routes'),
      },
    ],
  },
];

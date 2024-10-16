import { Routes } from '@angular/router';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sidenav'
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'components',
        loadChildren: () => import('./features/components/components.module').then(m => m.ComponentsModule)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component')
      },
      {
        path: 'data-product',
        loadComponent: () => import('./features/data/product/product.component')
      }
    ]
  },
];

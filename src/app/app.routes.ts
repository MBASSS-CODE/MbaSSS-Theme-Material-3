import { Routes } from '@angular/router';
import { WebComponent } from './layout/web/web.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'web'
  },
  {
    path: 'web',
    component: WebComponent,
    data: { title: 'WEB' },
    children: [
      {
        path: 'components',
        loadChildren: () => import('./features/components/components.module').then(m => m.ComponentsModule),
        data: { title: 'Component' },
      },
      {
        path: 'data-product',
        loadComponent: () => import('./features/data/product/product.component'),
        data: { title: 'Product' },
      },
      {
        path: 'data-product/search-product',
        loadComponent: () => import('./features/data/product/search-product/search-product.component'),
        data: { title: 'Search Product' },
      },
      {
        path: 'data-product/select-product',
        loadComponent: () => import('./features/data/product/select-product/select-product.component'),
        data: { title: 'Select Product' },
      },
      {
        path: 'data-product/:id/show',
        loadComponent: () => import('./features/data/product/detail-product/detail-product.component'),
        data: { title: 'Produk' },
      },
      {
        path: 'typography',
        loadComponent: () => import('./features/typography/typography.component'),
        data: { title: 'Typography' },
      }
    ]
  },
];

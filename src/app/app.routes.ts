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
        path: 'data',
        loadChildren: () => import('./features/data/data.module'),
        data: { title: 'Data' },
      },
      {
        path: 'typography',
        loadComponent: () => import('./features/typography/typography.component'),
        data: { title: 'Typography' },
      }
    ]
  },
];

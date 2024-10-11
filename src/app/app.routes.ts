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
    component: SidenavComponent
  }
];

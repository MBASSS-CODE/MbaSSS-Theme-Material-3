import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./button/button.component')
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.component')
  },
  {
    path: 'table',
    loadComponent: () => import('./table/table.component'),
    children: [
      {
        path: 'basic-table',
        loadComponent: () => import('./table/basic-table/basic-table.component')
      },
      {
        path: 'dynamic-table',
        loadComponent: () => import('./table/dynamic-table/dynamic-table.component')
      }
    ]
  },
  {
    'path': 'input',
    loadComponent: () => import('./input/input.component')
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

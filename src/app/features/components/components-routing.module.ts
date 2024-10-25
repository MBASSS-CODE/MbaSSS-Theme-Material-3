import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const parentRoute = 'Components | ';

const routes: Routes = [
  {
    path: 'button',
    loadComponent: () => import('./button/button.component'),
    data: { title: `${parentRoute}Button` },
  },
  {
    path: 'card',
    loadComponent: () => import('./card/card.component'),
    data: { title: `${parentRoute}Card` },
  },
  {
    path: 'table',
    loadComponent: () => import('./table/table.component'),
    data: { title: `${parentRoute}Table` },
    children: [
      {
        path: 'basic-table',
        loadComponent: () => import('./table/basic-table/basic-table.component'),
        data: { title: `${parentRoute}Basic Table` },
      },
      {
        path: 'dynamic-table',
        loadComponent: () => import('./table/dynamic-table/dynamic-table.component'),
        data: { title: `${parentRoute}Dynamic Table` },
      }
    ]
  },
  {
    'path': 'input',
    loadComponent: () => import('./input/input.component'),
    data: { title: `${parentRoute}Input` },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

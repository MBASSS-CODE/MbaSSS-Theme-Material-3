import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadComponent: () => import('./product/product.component'),
    data: { title: 'Product' },
  },
  {
    path: 'product/search-product',
    loadComponent: () => import('./product/search-product/search-product.component'),
    data: { title: 'Search Product' },
  },
  {
    path: 'product/select-product',
    loadComponent: () => import('./product/select-product/select-product.component'),
    data: { title: 'Select Product' },
  },
  {
    path: 'product/:id/show',
    loadComponent: () => import('./product/detail-product/detail-product.component'),
    data: { title: 'Produk' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DummyJSONService } from '../../../services/api/dummy-json.service';
import { HttpParams } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export default class ProductComponent {
  
  // Data and methods
  products: any[] = [];
  filterParams: HttpParams = new HttpParams();

  // table properties
  displayedColumns: string[] = ['id', 'title', 'price'];
  total: number = 0;

  limit: number = 10;
  skip: number = 1;
  pageIndex = 0;

  keyword: string = '';
  loading: boolean = false;
  pageSizeOptions  = [10, 25, 50, 100];


  constructor(
    private dummyJSONService: DummyJSONService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    // this.getById(1);
    this.productData();
  }
  
  productData(event?: any) {
    this.filterParams = this.filterParams
      .set('limit', this.limit.toString())
      .set('skip', this.skip.toString())
      .set('select', 'title,price');

    this.dummyJSONService.filter(this.filterParams).subscribe({
      next: (data: any) => {
        this.products = data.products;
        this.total = data.total;

        console.log(this.products);
      },
      error: (error: any) => {
        console.error('Error fetching products', error);
      }
    });
  }
  public onPageChange(pageEvent: PageEvent): void {
    console.log('pageEvent', pageEvent);
    this.pageIndex = pageEvent.pageIndex;
    this.limit    = pageEvent.pageSize;
    this.skip     = this.pageIndex * this.limit;
    this.productData();
  }
  all() {
    this.dummyJSONService.all().subscribe({
      next: (data: any) => {
        this.products = data.products;
        console.log(this.products);
      },
      error: (error: any) => {
        console.error('Error fetching products', error);
      }
    });
  }

  getById(id: number) { 
    this.dummyJSONService.get(id.toString()).subscribe({
      next: (data: any) => {
        this.products = data;
        console.log(this.products);
      },
      error: (error: any) => {
        console.error('Error fetching products', error);
      }
    });
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DummyJSONService } from '../../../../services/api/dummy-json.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-product',
  standalone: true,
  imports: [
    RouterModule,
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.scss'
})
export default class DetailProductComponent {
  data: any;
  loading = false;
  constructor(
    public activatedRoute: ActivatedRoute,
    public dummyJSONService: DummyJSONService
  ) { 
    this.getData();
  }
  
  getData() { 
    this.loading = true;
    const id = this.activatedRoute.snapshot.params['id'];
    this.dummyJSONService.get(id).subscribe({
      next: (data: any) => {
        this.loading = false;
        this.data = data;
      },
      error: (error: any) => {
        console.error('Error fetching products', error);
        this.loading = false;
      }
    })
  }
}

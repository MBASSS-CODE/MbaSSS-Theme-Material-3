import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyJSONService } from '../../../../services/api/dummy-json.service';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [ReactiveFormsModule, MatProgressBar],
  template: `
    <div class="row">
      <div class="col-md-2">Search</div>
      <div class="col-md-8">
        <form [formGroup]="searchForm">
          <input type="text" placeholder="Search Product" formControlName="search" matInput placeholder="Search">
        </form>
      </div>
    </div>
    @if (loading) {
      <mat-progress-bar color="primary" mode="buffer"></mat-progress-bar>
    }
    <div class="row">
      <div class="col-md-12">
        @if (productList.length) {
          <ng-container>
            @for (item of productList; track item.id) {
              {{ item.title }}
              <br>
            }
          </ng-container>
        } @else {
          <ng-container>
            Not Found
          </ng-container>
        }
      </div>

    </div>
  `,
  styles: ``
})
export default class SearchProductComponent {
  loading: boolean = false;

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  });

  public productList: any[] = [];

  constructor(
    private dummyJSONService: DummyJSONService
  ) { 

    this.searchForm.get('search')?.valueChanges.
    pipe(
      debounceTime(1000),
      tap(() => this.loading = true),
      distinctUntilChanged(),
      switchMap((value) => this.dummyJSONService.search(value))
    ).subscribe(
      (value: any) => {
        this.productList = value.products;
        this.loading = false;
      }
    )
  } 
}

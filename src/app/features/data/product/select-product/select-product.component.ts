import { Component } from '@angular/core';
import {MatAutocompleteActivatedEvent, MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DummyJSONService } from '../../../../services/api/dummy-json.service';
import { debounceTime, distinctUntilChanged, filter, switchMap, tap } from 'rxjs';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'app-select-product',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatProgressBar
  ],
  template: `
    @if (this.loading) {
      <mat-progress-bar color="primary"></mat-progress-bar>
    }
    <br>
    <form class="example-form">
      <mat-form-field class="example-full-width">
        <mat-label>Choose a product from the list</mat-label>
        <input type="text"
              placeholder="Pick one"
              aria-label="Search"
              matInput
              [formControl]="formControl"
              [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete" (optionSelected)="onOptionSelected($event)">
          @for (option of options; track option) {
            <mat-option [value]="option.title">
              {{option.title}}
            </mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>
    </form>

  `,
  styles: `
    .example-form {
      min-width: 150px;
      max-width: 500px;
      width: 100%;
    }

    .example-full-width {
      width: 100%;
    }
  `
})
export default class SelectProductComponent {
  formControl = new FormControl('');
  loading = false;
  optionSelected = false;

  options: any[] = [
    {
      'id': 1000000,
      'title': 'Default show Product 1'
    },
    {
      'id': 1000001,
      'title': 'Default show Product 2'
    },
  ];
  

  constructor(
    private dummyJSONService: DummyJSONService
  ) {
    this.formControl.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) => {
          if (this.optionSelected || !value) { // if option selected or no value, return empty array (not hit api)
            this.optionSelected = false; // reset option selected flag
            return [];
          }
          
          this.loading = true
          return this.dummyJSONService.search(value)
        })
      ).subscribe(
       (value: any) => {
          this.options = value.products;
          this.loading = false;
        },
        () => {
          this.loading = false; // Ensure loading is reset on error as well
        }
    )
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected = true;
  }
}

import { Component } from '@angular/core';
import {MatAutocompleteActivatedEvent, MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DummyJSONService } from '../../../../services/api/dummy-json.service';
import { catchError, debounceTime, distinctUntilChanged, filter, of, switchMap, tap } from 'rxjs';
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
      <mat-progress-bar mode="indeterminate" color="primary"></mat-progress-bar>
    }
    <br>
    <form (submit)="onSubmit()">
      <mat-form-field class="example-full-width">
        <mat-label>Choose a product from the list</mat-label>
        <input type="text"
              placeholder="Pick one"
              aria-label="Search"
              matInput
              [formControl]="formControlAutocomplete"
              [matAutocomplete]="auto">
        <mat-autocomplete #auto="matAutocomplete"
          (optionSelected)="onOptionSelected($event)"
          [displayWith]="displayFn">
          @for (option of options; track option) {
            <mat-option [value]="option">
              {{option.title}}
            </mat-option>
          }
        </mat-autocomplete>
      </mat-form-field>

      <button mat-raised-button color="primary" type="submit" [disabled]="formControlAutocomplete.invalid">Submit</button>
    </form>

  `,
  styles: `
    .example-full-width {
      width: 100%;
    }
  `
})
export default class SelectProductComponent {
  formControlAutocomplete = new FormControl('');
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
    this.initializeAutocomplete();
  }
  initializeAutocomplete(): void {
    this.formControlAutocomplete.valueChanges
      .pipe(
        debounceTime(1000),
        switchMap((value) => {
          if (this.optionSelected || !value) { // if option selected or no value, return empty array (not hit api)
            this.optionSelected = false; // reset option selected flag
            return [];
          }
          this.loading = true
          return this.dummyJSONService.search(value).pipe(
            catchError(() => { //if error, return empty array
              this.loading = false;
              return of([]);
            })
          )
        })
      ).subscribe(
       (value: any) => { // on success
          this.options = value.products;
          this.loading = false;
        }
    )
  }
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.optionSelected = true; // set option selected flag to make sure we hit api only once
  }
  displayFn(option: any) {
    console.log('option', option);
    return option && option.title ? option.title : '';
  }

  onSubmit() {
    console.log(this.formControlAutocomplete.value);
  }

  
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Table Component</h1>
    <router-outlet/>
  `,
  styles: ``
})
export default class TableComponent {

}

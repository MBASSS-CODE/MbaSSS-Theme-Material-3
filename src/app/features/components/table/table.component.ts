import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet/>
  `,
  styles: ``
})
export default class TableComponent {

}

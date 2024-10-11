import { Component } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterOutlet,
    MatButtonToggleModule
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export default class ButtonComponent {

}

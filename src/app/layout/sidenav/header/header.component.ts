import { Component, inject } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SidenavService } from '../../../services/ui/sidenav.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    
    <mat-toolbar [class.mat-elevation-z2]="true">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
      <!-- <button mat-icon-button (click)="toggleTheme(); darkMode.set(!darkMode())">
        @if (darkMode()) {
          <mat-icon>light_mode</mat-icon>
        } @else {
          <mat-icon>dark_mode</mat-icon>
        }
      </button>  -->
    </mat-toolbar>
  `,
  styles: `
    mat-toolbar {
    position: relative;
    z-index: 5;
  }
  `
})
export class HeaderComponent {
  
  collpasedService = inject(SidenavService);
  collapsed = this.collpasedService.collapsed;
}

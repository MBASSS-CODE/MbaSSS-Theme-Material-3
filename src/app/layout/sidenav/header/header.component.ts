import { Component, inject } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SidenavService } from '../../../services/ui/sidenav.service';
import { DarkThemeService } from '../../../services/ui/dark-theme.service';
@Component({
  selector: 'app-header',
  standalone: true,
  providers: [DarkThemeService],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    
    <mat-toolbar [class.mat-elevation-z2]="true">
      <button mat-icon-button (click)="toggleSidenav()">
        <mat-icon>menu</mat-icon>
      </button>
      <button
      mat-icon-button
      (click)="toggleTheme()"
      >
        @if (darkMode()) {
          <mat-icon>light_mode</mat-icon>
        } @else {
          <mat-icon>dark_mode</mat-icon>
        }
      </button> 
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
  // Sidenav Collapse
  sidenavService = inject(SidenavService);
  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }

  // Dark Theme
  darkThemeService = inject(DarkThemeService);
  darkMode = this.darkThemeService.darkMode;

  toggleTheme() {
    this.darkThemeService.toggleTheme();
  }
  
}

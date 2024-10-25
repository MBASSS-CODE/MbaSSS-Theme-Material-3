import { Component, inject} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavService } from '../../services/ui/sidenav.service';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatCardModule} from '@angular/material/card';
import { titleThemeService } from '../../services/ui/title.service';

@Component({
  selector: 'app-web-layout',
  standalone: true,
  providers: [SidenavService, titleThemeService],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    NavigationComponent,
    MatCardModule,
  ],
  template: `
    <app-header/>
    <mat-sidenav-container>
      <mat-sidenav 
        opened
        mode="side"
        [style.width]="sidenavWidth()">
      <app-navigation/>
      </mat-sidenav>
    <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
      <mat-card class="card-content" appearance="outlined">
        <mat-card-header class="mat-headline-small">
          {{ title.title$ | async }}
        </mat-card-header>
        <mat-card-content class="mt-3">
          <router-outlet/>
        </mat-card-content>
      </mat-card>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles: `
    :host * {
      transition: all 0.3s ease-in-out;
    }
    .content {
      padding: 0 24px;
    }

    mat-sidenav-container { 
      height: calc(100vh - 64px);
    }

    mat-sidenav,
    mat-sidenav-content {
      transition: all 0.3s ease-in-out;
    }

    .card-content {
      min-height: calc(100vh - 64px);
    }
  `
})
export class WebComponent {

  title = inject(titleThemeService);
  
  collpasedService = inject(SidenavService);
  sidenavWidth = this.collpasedService.sidenavWidth;
}

import { Component, computed, effect, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavService } from '../../services/ui/sidenav.service';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  providers: [SidenavService],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    NavigationComponent
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
        asdasdasd
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles: `
    .content {
      padding: 24px;
    }

    mat-sidenav-container { 
      height: calc(100vh - 64px);
    }

    mat-sidenav,
    mat-sidenav-content {
      transition: all 0.5s ease-in-out;
    }
  `
})
export class SidenavComponent {

  collpasedService = inject(SidenavService);
  sidenavWidth = this.collpasedService.sidenavWidth;

  // Dark Mode || seharusnya bisa di pisah menjadi komponen header
  // darkMode = signal(false);

  // setDarkMode = effect(() => {
  //   this.darkMode();
  // })

  // toggleTheme(): void {
  //   this.themeService.toggleTheme();
  // }
}

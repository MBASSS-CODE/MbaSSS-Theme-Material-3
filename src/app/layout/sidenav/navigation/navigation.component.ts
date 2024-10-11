import { Component, computed, inject, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from "./menu-item.component";
import { SidenavService } from '../../../services/ui/sidenav.service';
import { menuItem } from '../../menu-item';
import { MenuItem } from '../../../types/menuItem-type';
// import { MenuItemComponent } from '../menu-item/menu-item.component';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatListModule, MenuItemComponent],
  template: `
    <div class="sidenav-header">
      <img 
        src="https://material.angular.io/assets/img/examples/shiba1.jpg" alt=""
        [height]="profileSizePicture()"
        [width]="profileSizePicture()"  
      >
      <div class="header-text" [class.hide-header-text]="sidenavCollapse()">
        <h2>Shiba Inu Channel</h2>
        <p>Shiba Inu Name</p>
      </div>
    </div>
    <mat-nav-list>
      @for (item of menuItems(); track item) {
        <app-menu-item [item]="item"></app-menu-item>
      } 
    </mat-nav-list>
    
  `,
  styles: `
    :host * {
      transition: all 0.3s ease-in-out;
    }

    .sidenav-header {
      padding-top: 24px;
      text-align: center;

      > img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;
      }

      .header-text {
        height: 3rem;

        > h2 {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }

        > p {
          margin: 0;
          font-size: .8rem;
        }
      }
    }

    .hide-header-text {
      opacity: 0;
      height: 0px !important;
    }
  `
})
export class NavigationComponent {

  collpasedService = inject(SidenavService);
  sidenavCollapse = this.collpasedService.collapsed;
  profileSizePicture = this.collpasedService.profileSizePicture;

  // Menu Item
  menuItems = signal<MenuItem[]>(menuItem);
  
}

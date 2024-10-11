import { Component, computed, inject, Input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MenuItemComponent } from "./menu-item.component";
import { SidenavService } from '../../../services/ui/sidenav.service';
// import { MenuItemComponent } from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  childRoutes?: MenuItem[]
};

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

  menuItems = signal<MenuItem[]>([
    {
      icon: 'home',
      label: 'Button',
      route: 'side-nav/components/button',
    },
    {
      icon: 'list',
      label: 'Card',
      route: 'side-nav/components/card'
    },
    {
      icon: 'table',
      label: 'Table',
      route: 'side-nav/components/table',
      childRoutes: [
        {
          icon: 'table',
          label: 'Dynamic Column',
          route: 'dynamyc-column'
        }
      ]
    },
    {
      icon: 'menu',
      label: 'nested',
      route: 'side-nav/page-nested',
      childRoutes: [
        {
          icon: 'menu',
          label: 'nested-first',
          route: 'page-nested-first',
          childRoutes: [
            {
              icon: 'menu',
              label: 'nested-first-first',
              route: 'page-nested-first-first',
            },
            {
              icon: 'menu',
              label: 'nested-first-second',
              route: 'page-nested-first-second',
            },
          ]
        },
        {
          icon: 'menu',
          label: 'nested-second',
          route: 'page-nested-second',
        },
        {
          icon: 'menu',
          label: 'nested-third',
          route: 'page-nested-third',
        },
      ]
    }
  ])
}

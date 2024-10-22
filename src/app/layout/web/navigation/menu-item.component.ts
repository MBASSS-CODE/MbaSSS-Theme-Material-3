import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';
import { SidenavService } from '../../../services/ui/sidenav.service';
import { MenuItem } from '../../../models/menuItem-type';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  animations: [
    trigger('expandContractMenu',[
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('500ms ease-in-out', style({ height: '*', opacity: 1  }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ height: 0, opacity: 0 }))
      ])
    ])
  ],
  imports: [
    MatListModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <a 
      mat-list-item 
      (click)="nestedMenuOpen.set(!nestedMenuOpen())"
      [routerLink]="routeHistory() + '/' + item().route"
      routerLinkActive="selected-menu-item"
      #rla="routerLinkActive"
      [activated]="rla.isActive"
      [style.--mat-list-list-item-leading-icon-start-space]="indentation()"
    >
      <mat-icon 
        [fontSet]="rla.isActive ? 'material-icons-outlined' : 'material-icons'" 
        matListItemIcon
      >
        {{ item().icon }}
      </mat-icon>

      @if (!collapsed()) {
        <span matListItemTitle>{{ item().label }}</span>
      }

      @if(item().childRoutes) {
        <span matListItemMeta>
          @if(nestedMenuOpen()) {
            <span matListItemMeta>
              <mat-icon>expand_less</mat-icon>
            </span>
          } @else {
            <span matListItemMeta>
              <mat-icon>expand_more</mat-icon>
            </span>
          }
        </span>
      }
    </a>

    <!-- Nested -->
    @if(item().childRoutes && nestedMenuOpen()) {
      <div @expandContractMenu>
        @for (subItem of item().childRoutes; track subItem.label) {
          <app-menu-item 
            [item]="subItem"
            [routeHistory]="routeHistory() + '/' + item().route"
          ></app-menu-item>
        }
      </div>
    }

    <!-- spacing -->
    @if(item().spacing) {
      <div class="my-3"></div>
    }
  `,
  styles: `
    :host * {
      transition: all 0.5s ease-in-out;
    }

    .menu-item {
      border-left: 5px solid;
      border-left-color: rgba(0, 0, 0, 0.05);
    }

    .selected-menu-item {
      border-left: 5px solid;
      border-left-color: #7c79e1;
    }
  `
})
export class MenuItemComponent {
  
  item = input.required<MenuItem>();

  webService = inject(SidenavService);
  collapsed = this.webService.collapsed;
  
  nestedMenuOpen = signal(false);

  routeHistory = input('');

  level = computed(() => this.routeHistory().split('/').length - 1);

  indentation = computed(() => this.collapsed() ? '16px' : `${(16 + (this.level() * 16))}px`);
}

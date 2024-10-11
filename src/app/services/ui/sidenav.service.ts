import { computed, Injectable, signal } from '@angular/core';

@Injectable()
export class SidenavService {
  collapsed = signal(false); // state untuk data apakah sidenav ditutup atau buka. trigger nya ada di header.component.ts

  sidenavWidth = computed(() => this.collapsed() ? '53px' : '250px'); // ukuran sidenav menyesuaikan state collapsed
  profileSizePicture = computed(() => this.collapsed() ? '32' : '100'); // ukuran profile picture menyesuaikan state collapsed
}

import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable()
export class SidenavService {
  // Initialize state based on localStorage value or default to false
  collapsed = signal<boolean>(this.loadSidenavState());

  // Computed signals based on collapsed state
  sidenavWidth = computed(() => (this.collapsed() ? '53px' : '250px'));
  profileSizePicture = computed(() => (this.collapsed() ? '32' : '100'));

  constructor() {
    // Effect to store the collapsed state whenever it changes
    effect(() => {
      localStorage.setItem('sidenavCollapsed', this.collapsed().toString());
    });
  }

  // Toggle the collapsed state
  toggleSidenav() {
    this.collapsed.set(!this.collapsed());
  }

  // Load the collapsed state from localStorage
  private loadSidenavState(): boolean {
    const storedState = localStorage.getItem('sidenavCollapsed');
    return storedState === 'true';
  }
}

import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {
  darkMode = signal<boolean>(this.loadThemePreference());

  constructor() {
    // Effect to automatically apply theme when darkMode changes
    effect(() => {
      const themeClass = this.darkMode() ? 'dark' : 'light';
      document.documentElement.className = themeClass;
      // Save user preference
      localStorage.setItem('darkMode', this.darkMode().toString());
    }); 
  }

  toggleTheme(): void {
    this.darkMode.set(!this.darkMode());
  }

  private loadThemePreference(): boolean {
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference === 'true';
  }
}

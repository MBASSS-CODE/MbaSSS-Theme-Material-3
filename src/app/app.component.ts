import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { titleThemeService } from './services/ui/title.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private dynamicTitle: titleThemeService,
    private titleService: Title,
  ) {
    this.dynamicTitle.title$.subscribe(title => {
      this.titleService.setTitle(title);
    });
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class titleThemeService {
  private titleSubject = new BehaviorSubject<string>(environment.appName);
  public title$ = this.titleSubject.asObservable();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || environment.appName;
        })
      ).subscribe((title: string) => {
        this.titleSubject.next(title);
      });
  }

  public getTitle(): string {
    return this.titleSubject.value;
  }
}

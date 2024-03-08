import { Component } from '@angular/core';
import { RouterOutlet,Router, Event, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  template: '<router-outlet/>'
})
export class AppComponent {
  title = 'cepa';
  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            window.HSStaticMethods.autoInit();
          }
        }, 100);
      }
    });
  }
}

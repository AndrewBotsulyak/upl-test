import {Component} from '@angular/core';


@Component({
  selector: 'no-found-page',
  template: `
    <h1>Page Not Found</h1>
    <a routerLink="/">Go Home</a>
  `
})
export class NoRouteFoundComponent {

  constructor() {
    console.log('error page constructor');
  }

}

import {Component} from '@angular/core';


@Component({
  selector: 'login-container',
  template: `
    <login
      (submitLogin)="handleSubmit($event)"
    >
    </login>
  `,
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent {

  constructor(
  ) {}

  handleSubmit(loginValue) {
    console.log(loginValue);
  }

}

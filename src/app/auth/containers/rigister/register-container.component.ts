import {Component} from '@angular/core';


@Component({
  selector: 'register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent {

  constructor(
  ) {}

  handleSubmit(formValues) {
    console.log(formValues);
  }

}

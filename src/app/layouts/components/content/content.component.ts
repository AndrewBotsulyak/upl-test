import {Component, EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'content-layout',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.scss']
})
export class ContentComponent {

  @Output() loginClick = new EventEmitter();
  @Output() registerClick = new EventEmitter();


  constructor() {}

  handleLoginClick() {
    this.loginClick.emit();
  }

  handleRegisterClick() {
    this.registerClick.emit();
  }

}

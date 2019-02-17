import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() submitLogin = new EventEmitter();

  loginForm: FormGroup;

  email: FormControl;
  password: FormControl;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.email = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.password = this.formBuilder.control('', [Validators.required]);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });

  }

  onSubmit() {
    const loginFields = Object.assign({}, this.loginForm.value);
    this.submitLogin.emit(loginFields);
  }

}

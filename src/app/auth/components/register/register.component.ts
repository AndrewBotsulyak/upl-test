import {AfterViewInit, ChangeDetectorRef, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {equalTo} from '../../../../utils/validators/functions';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @Output() registerSubmit = new EventEmitter();

  registerForm: FormGroup;

  username: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.username = this.formBuilder.control('', [Validators.required]);
    this.email = this.formBuilder.control('', [Validators.required, Validators.email]);
    this.password = this.formBuilder.control('', [Validators.required]);
    this.passwordConfirm = this.formBuilder.control('', [
      Validators.required,
      equalTo('password')
    ]);

    this.registerForm = this.formBuilder.group({
      username: this.username,
      email: this.email,
      password: this.password,
      password_confirm:  this.passwordConfirm
    });

    this.cdr.detectChanges();
  }

  ngAfterViewInit() {

  }

  onSubmit() {
    const formValues = Object.assign({}, this.registerForm.value);
    this.registerSubmit.emit(formValues);
  }

}

import {NgModule} from '@angular/core';
import {LoginContainerComponent} from './login-container.component';
import {SharedModule} from '../../../../shared/shared.module';
import {LoginModule} from '../../components/login/login.module';


@NgModule({
  imports: [
    SharedModule,
    LoginModule
  ],
  exports: [
    LoginContainerComponent
  ],
  declarations: [
    LoginContainerComponent
  ]
})
export class LoginContainerModule {}

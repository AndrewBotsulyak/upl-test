import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {LoginContainerModule} from './containers/login/login-container.module';
import {RegisterContainerModule} from './containers/rigister/register-container.module';


@NgModule({
  imports: [
    SharedModule,
    LoginContainerModule,
    RegisterContainerModule
  ]
})
export class AuthModule {}

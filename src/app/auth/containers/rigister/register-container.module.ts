import {NgModule} from '@angular/core';
import {RegisterContainerComponent} from './register-container.component';
import {RegisterModule} from '../../components/register/register.module';
import {SharedModule} from '../../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RegisterModule
  ],
  exports: [RegisterContainerComponent],
  declarations: [RegisterContainerComponent]
})
export class RegisterContainerModule {}

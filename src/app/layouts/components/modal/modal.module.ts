import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {ModalComponent} from './modal.component';
import {LoginContainerComponent} from '../../../auth/containers/login/login-container.component';
import {LoginContainerModule} from '../../../auth/containers/login/login-container.module';
import {AdDirective} from '../../../../shared/directives/add-host.directive';

@NgModule({
  imports: [
    SharedModule,
    LoginContainerModule
  ],
  exports: [
    ModalComponent
  ],
  declarations: [
    ModalComponent,
    AdDirective
  ]
})
export class ModalModule {}

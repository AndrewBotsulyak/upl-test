import {NgModule} from '@angular/core';
import {ModalModule} from './components/modal/modal.module';
import {ContentContainerModule} from './containers/content/content-container.module';
import {SharedModule} from '../../shared/shared.module';
import {ModalComponent} from './components/modal/modal.component';
import {LoginContainerComponent} from '../auth/containers/login/login-container.component';
import {RegisterContainerComponent} from '../auth/containers/rigister/register-container.component';

@NgModule({
  imports: [
    SharedModule,
    ModalModule,
    ContentContainerModule
  ],
  entryComponents: [
    ModalComponent,
    LoginContainerComponent,
    RegisterContainerComponent
  ]
})
export class LayoutsModule {}

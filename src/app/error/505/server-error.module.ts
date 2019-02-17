import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {ServerErrorComponent} from './server-error.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ServerErrorComponent
  ],
  declarations: [
    ServerErrorComponent
  ]
})
export class ServerErrorModule {}

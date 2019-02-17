import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {OpenUslugaComponent} from './open-usluga.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    OpenUslugaComponent
  ],
  declarations: [
    OpenUslugaComponent
  ]
})
export class OpenUslugaModule {}


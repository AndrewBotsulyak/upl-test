import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {UslugaItemComponent} from './usluga-item.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    UslugaItemComponent
  ],
  declarations: [
    UslugaItemComponent
  ]
})
export class UslugaItemModule {}


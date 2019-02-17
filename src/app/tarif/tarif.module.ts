import {NgModule} from '@angular/core';
import {TarifPageModule} from './containers/tarif-page.module';
import {TarifRoutingModule} from './tarif-routing.module';

@NgModule({
  imports: [
    TarifRoutingModule,
    TarifPageModule
  ],
  exports: [TarifPageModule]
})
export class TarifModule {}

import {NgModule} from '@angular/core';
import {LegalPageModule} from './containers/legal-page.module';
import {LegalRoutingModule} from './legal-routing.module';

@NgModule({
  imports: [
    LegalRoutingModule,
    LegalPageModule
  ],
  exports: [LegalPageModule]
})
export class LegalModule {}

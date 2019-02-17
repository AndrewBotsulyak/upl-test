import {NgModule} from '@angular/core';
import {FaqPageModule} from './containers/faq-page.module';
import {FaqRoutingModule} from './faq-routing.module';

@NgModule({
  imports: [
    FaqRoutingModule,
    FaqPageModule
  ],
  exports: [FaqPageModule]
})
export class FaqModule {}

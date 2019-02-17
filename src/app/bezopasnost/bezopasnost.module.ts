import {NgModule} from '@angular/core';
import {BezopasnostPageModule} from './containers/bezopasnost-page.module';
import {BezopasnostRoutingModule} from './bezopasnost-routing.module';

@NgModule({
  imports: [
    BezopasnostRoutingModule,
    BezopasnostPageModule
  ],
  exports: [BezopasnostPageModule]
})
export class BezopasnostModule {}

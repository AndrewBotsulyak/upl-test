import {NgModule} from '@angular/core';
import {OnasPageModule} from './containers/onas-page.module';
import {OnasRoutingModule} from './onas-routing.module';

@NgModule({
  imports: [
    OnasPageModule,
    OnasRoutingModule
  ],
  exports: [OnasPageModule]
})
export class OnasModule {}

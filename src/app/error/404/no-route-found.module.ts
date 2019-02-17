import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {NoRouteFoundComponent} from './no-route-found.component';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    NoRouteFoundComponent
  ],
  declarations: [
    NoRouteFoundComponent
  ]
})
export class NoRouteFoundModule {}

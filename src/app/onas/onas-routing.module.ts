import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OnasPageComponent} from './containers/onas-page.component';


const routes: Routes = [
  {
    path: '',
    component: OnasPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnasRoutingModule {}

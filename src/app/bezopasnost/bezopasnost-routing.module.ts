import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BezopasnostPageComponent} from './containers/bezopasnost-page.component';


const routes: Routes = [
  {
    path: '',
    component: BezopasnostPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BezopasnostRoutingModule {}

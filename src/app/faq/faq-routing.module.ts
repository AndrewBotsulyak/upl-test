import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FaqPageComponent} from './containers/faq-page.component';


const routes: Routes = [
  {
    path: '',
    component: FaqPageComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqRoutingModule {}

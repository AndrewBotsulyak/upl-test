import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './containers/category-list/category-list.component';
import {UslugiGuard} from './services/uslugi.guard';


const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
    children: [
      {
        path: ':uslugaId',
        canActivate: [UslugiGuard]
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UslugiRoutingModule {}

import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CategoryListModule} from './containers/category-list/category-list.module';
import {UslugiRoutingModule} from './uslugi-routing.module';
import {UslugiGuard} from './services/uslugi.guard';
import {OpenUslugaModule} from './containers/open-usluga/open-usluga.module';


@NgModule({
  imports: [
    SharedModule,
    UslugiRoutingModule,
    CategoryListModule,
    OpenUslugaModule
  ],
  providers: [
    UslugiGuard,
  ]
})
export class UslugiModule {}

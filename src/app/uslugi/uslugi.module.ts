import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {CategoryListModule} from './containers/category-list/category-list.module';
import {UslugiRoutingModule} from './uslugi-routing.module';
import {UslugiStoreModule} from './store/uslugi-store.module';
import {UslugiGuard} from './services/uslugi.guard';
import {AuthApiService} from './services/auth-api.service';


@NgModule({
  imports: [
    SharedModule,
    UslugiRoutingModule,
    CategoryListModule
  ],
  providers: [
    UslugiGuard,
  ]
})
export class UslugiModule {}

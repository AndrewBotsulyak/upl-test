import {NgModule} from '@angular/core';
import {SharedModule} from '../../../../shared/shared.module';
import {CategoryListComponent} from './category-list.component';
import {CategoryItemModule} from '../../components/category-item/category-item.module';
import {UslugaItemModule} from '../../components/usluga-item/usluga-item.module';


@NgModule({
  imports: [
    SharedModule,
    CategoryItemModule,
    UslugaItemModule
  ],
  exports: [
    CategoryListComponent
  ],
  declarations: [CategoryListComponent]
})
export class CategoryListModule {}

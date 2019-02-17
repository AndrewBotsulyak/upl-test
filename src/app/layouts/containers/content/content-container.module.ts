import {NgModule} from '@angular/core';
import {ContentContainerComponent} from './content-container.component';
import {SharedModule} from '../../../../shared/shared.module';
import {ContentModule} from '../../components/content/content.module';


@NgModule({
  imports: [
    SharedModule,
    ContentModule
  ],
  exports: [
    ContentContainerComponent
  ],
  declarations: [ContentContainerComponent]
})
export class ContentContainerModule {}

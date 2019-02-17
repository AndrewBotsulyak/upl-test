import {NgModule} from '@angular/core';
import {ContentComponent} from './content.component';
import {SharedModule} from '../../../../shared/shared.module';


@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    ContentComponent
  ],
  declarations: [ContentComponent]
})
export class ContentModule {}

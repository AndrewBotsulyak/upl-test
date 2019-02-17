import { NgModule } from '@angular/core';
import {RegisterComponent} from './register.component';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [RegisterComponent],
  declarations: [RegisterComponent]
})
export class RegisterModule { }

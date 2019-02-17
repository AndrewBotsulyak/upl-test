import {NgModule} from '@angular/core';
import {ActionReducerMap, MetaReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {CommonModule} from '@angular/common';
import {UslugiStoreModule} from '../uslugi/store/uslugi-store.module';
import {UiStoreModule} from './ui/ui-store.module';

// export const metaReducers: MetaReducer<ICoreState>[] = [storeFreeze];

@NgModule({
  imports: [
    CommonModule,
    UslugiStoreModule,
    // UiStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}

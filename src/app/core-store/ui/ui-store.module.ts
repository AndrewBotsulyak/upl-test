import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';

import {uiReducer} from './ui.reducer';
import {UiEffects} from './ui.effects';
import {UIStoreService} from './ui-store.service';

export function reducerGetter(state, action) {
  return uiReducer(state, action);
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('uslugi', reducerGetter),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UiEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [
    UIStoreService,
  ]
})
export class UiStoreModule {}

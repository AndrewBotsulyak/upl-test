import {StoreModule} from '@ngrx/store';
import {NgModule} from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {uslugiReducer} from './uslugi.reducer';
import {UslugiStoreService} from './uslugi-store.service';
import {UslugiEffects} from './uslugi.effects';

export function reducerGetter(state, action) {
  return uslugiReducer(state, action);
}

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    StoreModule.forFeature('uslugi', reducerGetter),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([UslugiEffects])
  ],
  exports: [StoreModule, EffectsModule],
  providers: [
    UslugiStoreService,
  ]
})
export class UslugiStoreModule {}

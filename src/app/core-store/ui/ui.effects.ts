import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {UIStoreService} from './ui-store.service';
import * as Action from './ui.actions';
import {map} from 'rxjs/internal/operators';



@Injectable()
export class UiEffects {
  constructor(
    private actions$: Actions,
    private uiStoreService: UIStoreService,
  ) {}

  // @Effect()
  // modalsAction$ = this.actions$.pipe(
  //   ofType(...Action.ModalActionTypes),
  //   map(action => action.payload),
  //   map(component => {
  //     console.log(component);
  //   })
  // )

}



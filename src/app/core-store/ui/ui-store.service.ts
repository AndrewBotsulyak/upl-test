import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';

import {Observable} from 'rxjs';
import * as Action from './ui.actions';
import * as Selector from './ui.selectors';
import {map} from 'rxjs/internal/operators';
import {IUIState} from './ui.state';

@Injectable()
export class UIStoreService {

  constructor(private store$: Store<IUIState>) {
  }

  private dispatchAction(action: Action.UIAction) {
    this.store$.dispatch(action);
  }


  public dispatchLoginOpen(isOpen: boolean) {
    return this.dispatchAction(new Action.LoginOpen(isOpen));
  }

  public dispatchRegisterOpen(isOpen: boolean) {
    return this.dispatchAction(new Action.RegisterOpen(isOpen));
  }


  public getLoginModalState(): Observable<boolean> {
    return this.store$.pipe(
      map(Selector.selectLoginModal),
    );
  }

  public getRegisterModalState(): Observable<boolean> {
    return this.store$.pipe(
      map(Selector.selectRegisterModal),
    );
  }


}

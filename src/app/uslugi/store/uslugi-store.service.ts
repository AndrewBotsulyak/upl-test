import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {IUslugiState, uslugiAdapter, uslugiState} from './uslugi.state';
import * as Action from './uslugi.actions';
import {Observable} from 'rxjs';
import {ICategory, IUslugaItem} from '../models/usluga.model';
import * as Selector from './uslugi.selectors';
import {SetUslugi} from './uslugi.actions';
import {ISetUslugi} from './uslugi.actions';


@Injectable()
export class UslugiStoreService {

  constructor(
    private store$: Store<IUslugiState>
  ) {
  }

  private dispatchAction(action: Action.UslugiAction) {
    this.store$.dispatch(action);
  }

  public dispatchActivateCategory(value: ICategory) {
    this.dispatchAction(new Action.ActivateCategory(value));
  }

  public dispatchActivateUsluga(value: IUslugaItem) {
    this.dispatchAction(new Action.ActivateUsluga(value));
  }

  public dispatchDownloadCategories() {
    this.dispatchAction(new Action.DownloadCategories());
  }

  public dispatchSetCategories(value: ICategory[]) {
    this.dispatchAction(new Action.SetCategories(value));
  }

  public dispatchDownloadUslugiByCategoryId(id: number) {
    this.dispatchAction(new Action.DownloadUslugiByCategoryId(id));
  }

  public dispatchSetUslugi(value: ISetUslugi) {
    this.dispatchAction(new Action.SetUslugi(value));
  }

  public dispatchOpenUslugaById(value: number) {
    this.dispatchAction(new Action.OpenUslugaById(value));
  }

  public getCategoryEntities(): Observable<ICategory[]> {
    return this.store$.pipe(
      select(Selector.selectCategoryEntities)
    );
  }

  public getActiveCategory(): Observable<ICategory> {
    return this.store$.pipe(
      select(Selector.selectActiveCategory)
    );
  }


  public getActiveUsluga(): Observable<IUslugaItem> {
    return this.store$.pipe(
      select(Selector.selectActiveUsluga)
    );
  }

  public getCategoryLoaded(): Observable<boolean> {
    return this.store$.pipe(
      select(Selector.selectCategoryLoaded)
    );
  }
}

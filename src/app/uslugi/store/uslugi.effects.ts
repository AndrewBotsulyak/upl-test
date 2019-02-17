import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as Action from './uslugi.actions';
import {Router} from '@angular/router';
import {filter, map, tap, withLatestFrom} from 'rxjs/internal/operators';
import * as categoriesData from '../../data/categories.json';
import * as uslugiData from '../../data/uslugi.json';
import {UslugiStoreService} from './uslugi-store.service';

@Injectable()
export class UslugiEffects {

  constructor(
    private actions$: Actions,
    private router: Router,
    private uslugiStoreSevice: UslugiStoreService
  ) {
  }


  @Effect()
  downloadCategories$ = this.actions$.pipe(
    ofType<Action.DownloadCategories>(Action.UslugiActionTypes.DownloadCategories),

    // здесь мог бы быть запрос ...

    // добавляю замоканные данные в хранилище
    map(() => {
      return new Action.SetCategories(categoriesData.data);
    })
  );

  @Effect()
  activateCategory$ = this.actions$.pipe(
    ofType<Action.ActivateCategory>(Action.UslugiActionTypes.ActivateCategory),
    map((action: any) => action.payload),
    filter(category => category && (!category.uslugi || !category.uslugi.length)),
    map(category => new Action.DownloadUslugiByCategoryId(+category.id))
  );


  @Effect()
  downloadUslugiByCategoryId$ = this.actions$.pipe(
    ofType<Action.DownloadUslugiByCategoryId>(Action.UslugiActionTypes.DownloadUslugiByCategoryId),
    // добавляю замоканные данные в хранилище
    map((action) => {
      const categoryId = action.payload;

      const uslugi = (uslugiData as any).default[categoryId];

      return new Action.SetUslugi({
        categoryId,
        uslugi
      });
    })
  );

  @Effect()
  openUslugaById$ = this.actions$.pipe(
    ofType<Action.OpenUslugaById>(Action.UslugiActionTypes.OpenUslugaById),
    withLatestFrom(this.uslugiStoreSevice.getActiveCategory()),
    map(([action, activeCategory]) => {
      const uslugaId = action.payload;

      const usluga = activeCategory.uslugi.find(u => +u.id === uslugaId);

      return new Action.ActivateUsluga(usluga);
    })
  );

}

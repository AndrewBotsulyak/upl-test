import {createSelector, MemoizedSelector} from '@ngrx/store';
import {IUslugiState, uslugiAdapter, uslugiState} from './uslugi.state';
import {Dictionary, EntityAdapter} from '@ngrx/entity';
import {ICategory} from '../models/usluga.model';

export const entitySelectors = uslugiAdapter.getSelectors(uslugiState);

export const selectCategoryLoaded = createSelector(uslugiState, (state) => state.categoryLoaded);

export const selectActiveCategory = createSelector(
  uslugiState,
  entitySelectors.selectEntities,
  (
    state,
    entities: Dictionary<ICategory>
  ) => {
    return state.activeCategory ? entities[state.activeCategory.id] : null;
  });

export const selectActiveUsluga = createSelector(
  uslugiState,
  entitySelectors.selectEntities,
  (
    state: IUslugiState,
    entities: Dictionary<ICategory>
  ) => {
    return state.activeUsluga && state.activeCategory
      ? entities[state.activeCategory.id].uslugi.find(u => u.id === state.activeUsluga.id) : null;
  });

export const selectCategoryEntities = createSelector(
  entitySelectors.selectEntities, (entities: any) => {
    return Object.keys(entities).length ? Object.values(entities) as ICategory[] : null;
  });

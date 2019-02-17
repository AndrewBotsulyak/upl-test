import {createFeatureSelector} from '@ngrx/store';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {ICategory, IUslugaItem} from '../models/usluga.model';


export interface IUslugiState extends EntityState<ICategory> {
  activeCategory: ICategory;
  activeUsluga: IUslugaItem;
  categoryLoaded: boolean;
}

export const uslugiAdapter: EntityAdapter<ICategory> = createEntityAdapter<ICategory>({
  selectId: (category: ICategory) => category.id,
});

export const uslugiInitialState: IUslugiState = uslugiAdapter.getInitialState({
  activeCategory: null,
  activeUsluga: null,
  categoryLoaded: false
});

export const uslugiState = createFeatureSelector<IUslugiState>('uslugi');

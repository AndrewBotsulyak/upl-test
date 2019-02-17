import {uslugiAdapter, uslugiInitialState} from './uslugi.state';
import {ActivateUsluga, UslugiAction, UslugiActionTypes} from './uslugi.actions';

export function uslugiReducer(state = uslugiInitialState, action: UslugiAction) {

  switch (action.type) {

    case UslugiActionTypes.ActivateCategory: {
      const category = action.payload;

      return {
        ...state,
        activeCategory: category,
        activeUsluga: null
      };
    }

    case UslugiActionTypes.ActivateUsluga: {
      const usluga = action.payload;

      return {
        ...state,
        activeUsluga: usluga
      };
    }

    case UslugiActionTypes.SetCategories: {
      const categories = action.payload;

      return uslugiAdapter.addMany(
        categories,
        {
          ...state,
          categoryLoaded: true
        });
    }

    case UslugiActionTypes.SetUslugi: {
      const {categoryId, uslugi} = action.payload;

      return uslugiAdapter.updateOne({
        id: categoryId,
        changes: {
          uslugi
        }
      }, state);
    }

    default:
      return state;

  }

}

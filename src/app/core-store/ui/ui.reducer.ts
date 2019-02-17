import {uiInitialState} from './ui.state';
import {UIAction, UIActionTypes} from './ui.actions';

export function uiReducer(state = uiInitialState, action: UIAction) {

  switch (action.type) {

    case UIActionTypes.LoginOpen: {
      const isOpen = action.payload;

      return {
        login_modal_open: isOpen,
        ...state,
      };
    }

    case UIActionTypes.RegisterOpen: {
      const isOpen = action.payload;

      return {
        register_modal_open: isOpen,
        ...state,
      };
    }


    default:
      return state;
  }
}

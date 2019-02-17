import { createFeatureSelector } from '@ngrx/store';


export interface IUIState {
  login_modal_open: boolean;
  register_modal_open: boolean;
}


export const uiInitialState: IUIState = {
  login_modal_open: false,
  register_modal_open: false
};

export const uiState = createFeatureSelector<IUIState>('ui');

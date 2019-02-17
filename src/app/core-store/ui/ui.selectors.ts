import {createSelector} from '@ngrx/store';
import {uiState} from './ui.state';

export const selectLoginModal = createSelector(uiState, state => state.login_modal_open);

export const selectRegisterModal = createSelector(uiState, state => state.register_modal_open);



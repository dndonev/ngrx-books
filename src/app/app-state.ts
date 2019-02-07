import { ActionReducerMap } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import * as fromBooksState from '../app/state';

export interface AppState {
    library: fromBooksState.State;
}

export const initialState: AppState = {
    library: fromBooksState.initialState
};

export const reducers: ActionReducerMap<AppState> = {
    library: fromBooksState.reducer
};

export const getVolumeState = (state: AppState) => state;
export const getLibrary = createSelector(getVolumeState, state => state.library);
export const getVolumeItems = createSelector(getVolumeState, state => state.library.volume.items);


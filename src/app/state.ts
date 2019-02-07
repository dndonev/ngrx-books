import * as BooksActions from '../app/search-actions';
import { Book, Volume } from './book';
import { createSelector } from '@ngrx/store';

export interface State {
    volume: Volume;
}

export const initialState: State = {
    volume: {
        items: [],
        kind: ''
    }
};

export function reducer(state: State = initialState, action: BooksActions.Actions): State {
    switch (action.type) {

        case BooksActions.GET_BOOKS_SUCCESS: {
            return {
                ...state,
                volume: action.payload
            };
        }

        default:
            return state;
    }
}

export const getVolumeState = (state: State) => state;


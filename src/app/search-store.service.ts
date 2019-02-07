import * as BooksActions from '../app/search-actions';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from './state';
import * as fromAppState from '../app/app-state';

@Injectable()
export class BooksStoreService {

    constructor(private store: Store<fromAppState.AppState>) {
    }

    public loadBooks(searchString: string) {
        this.store.dispatch(new BooksActions.GetBooks(searchString));
    }

    public getVolumeState() {
        return this.store.pipe(select(fromAppState.getVolumeItems));
    }
}

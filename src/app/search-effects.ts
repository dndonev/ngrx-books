import * as BooksActions from '../app/search-actions';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './google-books.service';
import { map, mergeMap, catchError, switchMap, onErrorResumeNext, concatMap } from 'rxjs/operators';

@Injectable()
export class BooksEffects {
    @Effect()
    public getBooksEffect$: Observable<Action> =
        this.actions$.pipe(
            ofType(BooksActions.GET_BOOKS),
            map((action: BooksActions.GetBooks) => action.payload),
            switchMap(payload => {
                return this.booksService.searchBooks(payload).pipe(
                    map(volume => {
                        return new BooksActions.GetBooksSuccess(volume);
                    }), catchError(err =>
                        of(new BooksActions.GetBooksFailure(err))
                    ));
            }));

    constructor(
        private booksService: GoogleBooksService,
        private actions$: Actions
    ) { }
}

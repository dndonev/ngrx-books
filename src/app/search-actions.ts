import { Book, Volume } from './book';
import { Action } from '@ngrx/store';

export const GET_BOOKS = '[BOOKS] GetBooks';
export const GET_BOOKS_SUCCESS = '[BOOKS] GetBooksSuccess';
export const GET_BOOKS_FAILURE = '[BOOKS] GetBooksFailure';


export class GetBooks implements Action {
    readonly type = GET_BOOKS;

    constructor(public payload: string) { }
}

export class GetBooksSuccess implements Action {
    readonly type = GET_BOOKS_SUCCESS;

    constructor(public payload: Volume) { }
}

export class GetBooksFailure implements Action {
    readonly type = GET_BOOKS_FAILURE;

    constructor(payload: any) { }
}

export type Actions =
    GetBooks |
    GetBooksSuccess |
    GetBooksFailure;

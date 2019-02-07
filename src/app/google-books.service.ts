import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Volume } from './book';

@Injectable()
export class GoogleBooksService {
    private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: HttpClient) { }

    searchBooks(queryTitle: string, startIndex?: number, maxResults?: number): Observable<Volume> {
        return this.http.get<Volume>(`${this.API_PATH}?q=${queryTitle}&startIndex=1&maxResults=5`);
    }
}

import { Component, OnInit } from '@angular/core';
import { Book, Volume } from '../book';
import { GoogleBooksService } from '../google-books.service';
import { EventEmitter } from 'protractor';
import { BooksStoreService } from '../search-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  public showResults: boolean;
  public books$: Observable<Book[]>;

  constructor(private booksStoreService: BooksStoreService, private bookStoreService: BooksStoreService) { }

  ngOnInit() {
    this.books$ = this.booksStoreService.getVolumeState();
  }

  public onSearch(queryString: string) {
    if (queryString.length > 2) {
      this.bookStoreService.loadBooks(queryString);
      this.showResults = true;
    }
  }


}

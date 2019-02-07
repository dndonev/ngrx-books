import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Volume, Book } from '../book';
import { Observable } from 'rxjs';
import { BooksStoreService } from '../search-store.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent implements OnInit {

  @Input()
  public books$: Observable<Book[]>;

  constructor() { }

  ngOnInit() {
  }

}

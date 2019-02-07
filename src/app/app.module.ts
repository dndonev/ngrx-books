import { BrowserModule } from '@angular/platform-browser';
import { NgModule, InjectionToken } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleBooksService } from './google-books.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsComponent } from './search-results/search-results.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BooksStoreService } from './search-store.service';
import { Store, ActionReducerMap } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './search-effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState } from './app-state';
import * as fromAppState from '../app/app-state';


@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(fromAppState.reducers, {}),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [GoogleBooksService, BooksStoreService, Store],
  bootstrap: [AppComponent]
})

export class AppModule { }


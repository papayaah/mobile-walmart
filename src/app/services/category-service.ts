import { Injectable } from '@angular/core';
import { CATEGORIES } from './mock-categories';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CategoryService {
  private categories: any;

  constructor(private http: HttpClient) {
    this.categories = CATEGORIES;
  }

  getAll() {
    const url = `http://localhost:3000/v3/api/pages/categoryPage?tenant=WM_TO_GO&channel=WWW&pageType=categoryPage&enrich=iro,athenaunified&storeId=2086&pageId=1255027787101&itemLimit=25`

    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
  }

  getItem(id) {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].id === parseInt(id)) {
        return this.categories[i];
      }
    }
    return null;
  }

  remove(item) {
    this.categories.splice(this.categories.indexOf(item), 1);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    //return new ErrorObservable('Something bad happened; please try again later.')
    return null
  }
}

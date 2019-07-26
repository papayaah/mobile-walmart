import { Injectable } from '@angular/core';

import { ITEMS } from './mock-items';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';
import { Globals } from '../globals'

@Injectable({providedIn: 'root'})
export class ItemService {
  private items: any;

  constructor(private http: HttpClient, private globals: Globals) {
    this.items = ITEMS;
  }

  getProducts() {
    const url = `${this.globals.BASE_URL}/v3/api/products?strategy=search&storeId=3267&query=bread&count=10&page=1&offset=0`
    return this.http.get(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  getAll() {
    this.http.get('http://localhost:3000/v3/api/products?strategy=search&storeId=3267&query=bread&count=10&page=1&offset=0')
    .subscribe((response) => {
      console.log(response)
    })

    return this.items;
  }

  getByCategory(catId) {
    const url = `${this.globals.BASE_URL}/v4/api/products/browse?taxonomyNodeId=${catId}&storeId=2086&count=60&page=1&offset=0`

    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
    // let items = [];

    // for (let i = 0; i < ITEMS.length; i++) {
    //   if (ITEMS[i].category_id == catId) {
    //     items.push(ITEMS[i]);
    //   }
    // }

    // return items;
  }

  getItem(id) {
    const url = `${this.globals.BASE_URL}/v3/api/products/${id}?itemFields=all&storeId=2086&selected=true`
    return this.http.get(url)
    .pipe(
      catchError(this.handleError)
    )
    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].id === parseInt(id)) {
    //     return this.items[i];
    //   }
    // }
    // return null;
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
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

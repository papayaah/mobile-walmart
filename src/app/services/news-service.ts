import { Injectable } from '@angular/core';
import { NEWSS } from './mock-newss';

@Injectable({providedIn: 'root'})
export class NewsService {
  private newss: any;

  constructor() {
    this.newss = NEWSS;
  }

  getAll() {
    return this.newss;
  }

  getItem(id) {
    for (let i = 0; i < this.newss.length; i++) {
      if (this.newss[i].id === parseInt(id)) {
        return this.newss[i];
      }
    }
    return null;
  }

  remove(item) {
    this.newss.splice(this.newss.indexOf(item), 1);
  }
}

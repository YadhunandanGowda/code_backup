import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private items = new Set();
  constructor() { }

  getAll(){
    return this.items;
  }
  addItem (item){
    let some  = this.items.has(item);
    this.items.add(item);
    return some;
  }

  deleteItem(item){
    this.items.delete(item);
  }
}

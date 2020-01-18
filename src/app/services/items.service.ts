import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Array<any>;
  constructor() {
    this.items = []
  }
  getItems(){
    return this.items;
  }
  addItem(item){
    this.items.push()
  }
}

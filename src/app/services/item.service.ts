import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Item } from './../models/item';
@Injectable({
  providedIn: 'root'
})
export class ItemService
 {

  itemList: AngularFireList<any>;

  constructor( private angularFireDatabase: AngularFireDatabase ) { }
 
  getItems () {
    console.log('getitems')
      return  this.itemList = this.angularFireDatabase.list('products');
  }

  pushItem ( item: Item) {
    
    const { name, price, category, imageLink, description } = item

    this.itemList.push({
      name,
      price,
      category,
      imageLink,
      description
    })
  }

  updateItem(key: string, item: Item) {
    const { name, price, category, imageLink, description } = item

    this.itemList.update(key, {
      name,
      price,
      category,
      imageLink,
      description
    });
  }

  deleteItem(key: string) {
    this.itemList.remove(key);
  }
  
}

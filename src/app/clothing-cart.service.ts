import { Injectable } from '@angular/core';
import {Clothes} from './clothes-list/Clothes';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClothingCartService {
  private _shopList: Clothes[] = [];
  shopList: BehaviorSubject<Clothes[]> = new BehaviorSubject(this._shopList);
  constructor() {
  }

  addToCart(clothing: Clothes) {
    let item: Clothes | undefined = this._shopList.find((v1) => v1.product == clothing.product);
    if(!item) {
      this._shopList.push({...clothing});
    } else {
      item.quantity += clothing.quantity;
    }
    console.log(item?.quantity)
    this.shopList.next(this._shopList);
  }
}

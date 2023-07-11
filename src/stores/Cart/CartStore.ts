import Cart from "@models/Cart/Cart";
import {computed, makeAutoObservable} from "mobx";

export default class CartStore {
  cart:Cart = new Cart();
  get items() {
    return this.cart.items;
  }
  addItem({productId, quantity}: {productId: number, quantity:number}) {
    this.cart = this.cart.addItem({productId, quantity});
  }

  constructor() {
    makeAutoObservable(this, {items: computed}, {autoBind: true});
  }
}
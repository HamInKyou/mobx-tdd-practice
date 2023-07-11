import CartStore from "@stores/Cart/CartStore";

export default class RootStore{
  cartStore:CartStore;

  constructor() {
    this.cartStore = new CartStore();
  }
}
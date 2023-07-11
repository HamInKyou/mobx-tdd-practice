import Item from "@models/Item/Item";
import CartStore from "./CartStore";

test('cartStore', () => {
  const cartStore = new CartStore();

  cartStore.addItem({productId: 1, quantity: 1});
  expect(cartStore.items).toEqual(
      [new Item({id: 1, productId: 1, quantity: 1})]
  )
})
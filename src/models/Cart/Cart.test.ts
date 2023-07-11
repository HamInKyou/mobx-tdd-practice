import Cart from "./Cart";
import Item from "@models/Item/Item";

const context = describe;
describe('Cart', () => {
  let cart: Cart;

  beforeEach(()=> {
    cart = new Cart();
  });

  context('when there is no same product', () => {
    it('adds an item', () => {
      cart = cart.addItem({productId: 1, quantity: 1});
      expect(cart.items).toHaveLength(1)

      cart = cart.addItem({productId: 2, quantity: 1});
      expect(cart.items).toHaveLength(2)
    });

    it('adds three items', () => {
      const productIds = [1,2,3];
      cart = productIds.reduce((prevCart, productId) => (
        prevCart.addItem({productId, quantity: 1})
    ), cart)
      expect(cart.items).toHaveLength(3);
    })
  })

  context('when there is the same product', () => {
    it('adds an item', () => {
      cart = cart.addItem({productId: 1, quantity: 1});
      expect(cart.items).toHaveLength(1)

      cart = cart.addItem({productId: 1, quantity: 2});
      expect(cart.items).toHaveLength(1)
    });
    it('adds same item three times', () => {
      const productId = 1;
      const quantities = [1,2,3];
      cart = quantities.reduce((prevCart, quantity) => (
        prevCart.addItem({productId, quantity})
      ), cart)
      expect(cart.items).toHaveLength(1);
      expect(cart.items).toEqual([
        new Item({
          id: 1,
          productId,
          quantity: quantities.reduce((prev, curr) => prev + curr, 0)
        })
      ])
    })
  })

});
import Item from "@models/Item/Item";

export default class Cart {
  items: Item[] = [];

  constructor({items = []}: {items?: Item[]} = {})  {
    this.items = items;
  }

  addItem({productId, quantity}: {productId: number, quantity: number}) {
    const index = this.items.findIndex((i)=> i.productId === productId);
    return index<0 ? this._insertItem({productId, quantity}) : this._updateItem({index, change: quantity});
  }

  private _insertItem({productId, quantity}: {productId:number;quantity:number}) {
    const id = Math.max(0, ...this.items.map((i)=> i.id)) + 1;
    const item = new Item({id, productId, quantity});

    return new Cart({
      items: [...this.items, item],
    })
  }

  private _updateItem({index, change}:{index:number, change:number}) {
    const item = this.items[index];
    return new Cart({
      items: [
        ...this.items.slice(0, index),
        new Item({...item, quantity: item.quantity + change}),
        ...this.items.slice(index + 1),
      ]
    })
  }
}
"use client"
import {useStore} from "@src/stores/StoreContext";
import {observer} from "mobx-react";

function Cart () {
  const {cartStore: {items}} = useStore();
  return (
    <div>
      <h2>카트</h2>
      <ul>
        {items.map(({id, productId, quantity})=> (
          <li key={id}>
            {`상품 #${productId} - 수량: ${quantity}`}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(Cart)
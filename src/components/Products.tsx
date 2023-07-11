"use client"
import {observer} from "mobx-react";
import {useStore} from "@src/stores/StoreContext";

function Products () {
  const {cartStore} = useStore();

  const addItem = (productId:number) => {
    cartStore.addItem({productId, quantity:1});
  };
  return (
    <div>
      <h2>상품목록</h2>
      <ul>
        {[1,2,3,4,5].map((id)=> (
          <li key={id}>
            상품 #{id} <button onClick={()=>addItem(id)}>카트에 넣기</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default observer(Products);
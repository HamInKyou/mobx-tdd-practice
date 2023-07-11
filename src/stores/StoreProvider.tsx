"use client"
import {ReactNode} from "react";
import RootStore from "@stores/RootStore";
import {StoreContext} from "@stores/StoreContext";

const rootStore = new RootStore();
export default function StoreProvider ({children}: {children: ReactNode}) {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
}
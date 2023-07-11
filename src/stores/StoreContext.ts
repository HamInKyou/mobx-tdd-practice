import { createContext, useContext } from 'react'
import RootStore from "./RootStore";

export const StoreContext = createContext(new RootStore());
export const useStore = () => useContext(StoreContext);
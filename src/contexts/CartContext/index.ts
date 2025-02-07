import { useContext } from "react";
import { CartContext } from "./context";
import CartProvider from "./Provider";
import type { CartContextType } from "./context";

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
export type { CartContextType };

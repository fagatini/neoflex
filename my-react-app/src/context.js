import { createContext } from "react";

let defaultValue = { cart: [], addToCart: () => {}, setCart: () => {}};

export const CartContext = createContext(defaultValue);
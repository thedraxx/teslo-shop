import { iCartProduct } from "@/interfaces";
import { CartState } from "./CartProvider";

type cartActionType =
  | {
      type: "[Cart] - LoadCart from cookies | storage ";
      payload: iCartProduct[];
    }
  | { type: "[Cart] - Add product"; payload: iCartProduct };

export const cartReducer = (
  state: CartState,
  action: cartActionType
): CartState => {
  switch (action.type) {
    case "[Cart] - LoadCart from cookies | storage ":
      return {
        ...state,
      };

    default:
      return state;
  }
};

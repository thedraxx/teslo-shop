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
      console.log("desde loadCart", action.payload);

      return {
        ...state,
        cart: action.payload,
      };

    case "[Cart] - Add product":
      if (
        state.cart.find(
          (product) =>
            product.size === action.payload.size &&
            product._id === action.payload._id
        )
      ) {
        return {
          ...state,
          cart: state.cart.map((product) =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

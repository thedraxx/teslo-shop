import { iCartProduct } from "@/interfaces";
import { CartState } from "./CartProvider";

type cartActionType =
  | {
      type: "[Cart] - LoadCart from cookies | storage ";
      payload: iCartProduct[];
    }
  | { type: "[Cart] - Add product"; payload: iCartProduct }
  | { type: "[Cart] - Update product in cart"; payload: iCartProduct[] }
  | { type: "[Cart] - Change cart quantity"; payload: iCartProduct }
  | { type: "[Cart] - Remove product in cart"; payload: iCartProduct }
  | {
      type: "[Cart] - Update order summary";
      payload: {
        numberOfItems: number;
        Subtotal: number;
        taxRate: number;
        total: number;
      };
    };

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

    case "[Cart] - Change cart quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;
          return action.payload;
        }),
      };

    case "[Cart] - Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter(
          (product) =>
            product._id !== action.payload._id ||
            product.size !== action.payload.size
        ),
      };

    case "[Cart] - Update order summary":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

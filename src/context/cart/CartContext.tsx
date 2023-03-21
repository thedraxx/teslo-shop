import { iCartProduct } from '@/interfaces';
import { createContext } from 'react';

export interface UIContextProps {
    cart: iCartProduct[];


    // methods
    addProductToCart: (product: iCartProduct) => void;
    updateCartQuantity: (product: iCartProduct) => void;
    removeProductFromCart: (product: iCartProduct) => void;
}

export const CartContext = createContext({} as UIContextProps);
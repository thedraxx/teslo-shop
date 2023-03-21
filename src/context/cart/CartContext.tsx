import { iCartProduct } from '@/interfaces';
import { createContext } from 'react';

export interface UIContextProps {
    cart: iCartProduct[];
    numberOfItems: number;
    Subtotal: number;
    taxRate: number;
    total: number;

    // methods
    addProductToCart: (product: iCartProduct) => void;
    updateCartQuantity: (product: iCartProduct) => void;
    removeProductFromCart: (product: iCartProduct) => void;
}

export const CartContext = createContext({} as UIContextProps);
import { iCartProduct } from '@/interfaces';
import { createContext } from 'react';

export interface UIContextProps {
    cart: iCartProduct[];
}

export const CartContext = createContext({} as UIContextProps);
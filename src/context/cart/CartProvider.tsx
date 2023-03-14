import { useReducer } from 'react';
import { CartContext, cartReducer } from './';
import { iCartProduct } from '@/interfaces';

export interface CartState {
    cart: iCartProduct[];
}

const CART_INITIAL_STATE: CartState = {
    cart: []
};

interface Props {
    children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

    return (
        <CartContext.Provider value={{
            ...state
        }}>
            {children}
        </CartContext.Provider>
    )
}
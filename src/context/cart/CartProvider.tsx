import { useEffect, useReducer } from 'react';
import Cookie from 'js-cookie';
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

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);


    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [];
            dispatch({
                type: "[Cart] - LoadCart from cookies | storage ",
                payload: cookieProducts
            })
        } catch (error) {
            dispatch({
                type: "[Cart] - LoadCart from cookies | storage ",
                payload: []
            })
        }

    }, []);



    useEffect(() => {
        if (state.cart.length > 0) Cookie.set('cart', JSON.stringify(state.cart))
    }, [state.cart]);


    const addProductToCart = (product: iCartProduct) => {
        dispatch({
            type: "[Cart] - Add product",
            payload: product
        })
    }

    return (
        <CartContext.Provider value={{
            ...state,
            addProductToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
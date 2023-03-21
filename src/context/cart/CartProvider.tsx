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


    useEffect(() => {

        const numberOfItems = state.cart.reduce((prev, current) => prev + current.quantity, 0)

        const Subtotal = state.cart.reduce((prev, current) => prev + current.price * current.quantity, 0)

        const taxRate = Subtotal * Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

        const orderSummary = {
            numberOfItems,
            Subtotal,
            taxRate,
            total: Subtotal * (taxRate + 1)
        }


        console.log("orderSummary", orderSummary)

    }, [state.cart])


    const addProductToCart = (product: iCartProduct) => {
        dispatch({
            type: "[Cart] - Add product",
            payload: product
        })
    }


    const updateCartQuantity = (product: iCartProduct) => {
        dispatch({ type: "[Cart] - Change cart quantity", payload: product })
    }


    const removeProductFromCart = (product: iCartProduct) => {

        console.log("removeProductFromCart", product)

        dispatch({ type: "[Cart] - Remove product in cart", payload: product })


    }

    return (
        <CartContext.Provider value={{
            ...state,
            addProductToCart,
            removeProductFromCart,
            updateCartQuantity,
        }}>
            {children}
        </CartContext.Provider>
    )
}
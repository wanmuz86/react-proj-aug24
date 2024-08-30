import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    // The state in the provider
    const initialState = {
        cart: []
    }

    const cartReducer = (state, action) => {

        switch (action.type) {
            case 'ADD_ITEM':

                // There will be two scenarios
                // Check the passed item (payload), verify if the id is in the cart, if it is there it will return the index, if not it will return -1
                const existingItemIndexAdd = state.cart.findIndex(item => item.item.id === action.payload.item.id);
                // 1) If the item already exists in the cart - I increase the quantity by 1
                if (existingItemIndexAdd !== -1) {
                    const updatedCard = [...state.cart]; // Creating a copy of cart
                    updatedCard[existingItemIndexAdd].quantity +=1; 
                    return {
                        ...state,
                        cart:updatedCard
                    }
                }
                else {
                    // 2) If the item is not in the card - Add in the cart
                    return {
                        ...state,
                        cart: [...state.cart, action.payload] // Add an item at the end of the cart
                    }

                }




            case 'REMOVE_ITEM':
                // If the item in the cart
                // findindex will return the index of the item if it exist of -1 if not
                const existingItemIndexDel = state.cart.findIndex(val => val.item.id === action.payload.item.id)

                if (existingItemIndexDel !== -1){
               
                const updatedCart = [...state.cart];
                if (updatedCart[existingItemIndexDel].quantity > 1){
                    //if the quantity is > 1, I will -- the quantitity

                    updatedCart[existingItemIndexDel].quantity -= 1;
                    return {
                        ...state,
                        cart:updatedCart
                    }
                } else {
                     // it the quantity is 1 - > I will remove the entire item from the cart

                     return {
                        ...state,
                        cart:state.cart.filter(val=> val.item.id !== action.payload.item.id)
                     }
                }
                } 
                return state;

            case 'EMPTY_CART':
                return {
                    ...state,
                    cart:[] //remove / reset the cart
                }
            default:
                return state;
        }


    }
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Add the operation on the state and export it together with state and dispatch

    const totalItemsInCart = state.cart.reduce((total, item)=> total + item.quantity, 0);
    const totalPrice = state.cart.reduce((total, item) => total + (item.quantity * item.item.price),0);

    return (
        <CartContext.Provider value={{state, dispatch, totalItemsInCart, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a Cart Provider')
    }
    return context
}

export { CartProvider, useCart }
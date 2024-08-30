import { createContext } from "react";

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


            case 'EMPTY_CART':


            default:
                return state;
        }


    }
    return state
}

export { CartProvider }
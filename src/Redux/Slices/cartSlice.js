import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                // itemInCart.quantity++;
                // alert("already exist")
                const index = state.cart.findIndex(item => item._id === action.payload._id);
                state.cart[index].quantity++;

            } else {
                state.cart.push({ ...action.payload, quantity: 1 });

            }
        },

        addWithQuantity: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id);
            if (itemInCart) {
                alert("already exist")
            } else {
                state.cart.push({ ...action.payload, quantity: action.payload.quantity });
            }
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item._id != action.payload._id)
        },

        removeAllCart: (state, action) => {
            state.cart = []
        },

        increment: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload._id);
            state.cart[index].quantity++;
        },

        decrement: (state, action) => {
            const index = state.cart.findIndex(item => item._id === action.payload._id);
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--;
            }
            else {
                state.cart = state.cart.filter(item => item._id != action.payload.id)

            }
        },
    },
})


export const { increment, decrement, addToCart, removeFromCart, addWithQuantity, removeAllCart } = cartSlice.actions

export default cartSlice.reducer
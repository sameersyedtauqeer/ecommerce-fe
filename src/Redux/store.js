import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import favProductReducer from "./Slices/FavProductSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { productReducer } from "./Slices/productSlice";
import { brandReducer } from "./Slices/brandSlice";
import { categoryReducer } from "./Slices/categorySlice";
import { authReducer } from "./Slices/authSlice";
import { orderReducer } from "./Slices/orderSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    favItems: favProductReducer,
    brand: brandReducer,
    category: categoryReducer,
    order: orderReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    // reducer: {
    //     cart: cartReducer,
    // },
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

export const persistor = persistStore(store)
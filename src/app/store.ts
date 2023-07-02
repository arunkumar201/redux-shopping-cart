import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './../features/cart/cartSlice'
import ProductsReducer from "./../features/products/productsSlice";
const store = configureStore({
	reducer: {
		cart: cartReducer,
		products: ProductsReducer,
	},
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;

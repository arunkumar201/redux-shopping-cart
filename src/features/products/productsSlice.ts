import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../app/api";

export interface ProductsState {
	products: { [id: string]: Product };
}

const initialState: ProductsState = {
	products: {},
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		receivedProducts(state, action: PayloadAction<Product[]>) {
			//take the products from the payload
			//here products are in Array shape
			const products = action.payload;
			//lets Convert it to object by mapping
			products.forEach((product) => {
				state.products[product.id] = product;
			});
		},
	},
});
//Exporting  the actions

export const { receivedProducts } = productsSlice.actions;
//Exporting the reducers name "productsReducer"
export default productsSlice.reducer;

import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CartState {
	items: { [productId: string]: number };
}
//initialState
const initialState: CartState = {
	items: {},
};
const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		AddToCart(state, action: PayloadAction<string>) {
			const id = action.payload;
			if (state.items[id]) {
				state.items.id++;
			} else {
				state.items[id] = 1;
			}
		},
	},
});
export const { AddToCart } = cartSlice.actions;
export default cartSlice.reducer;

// export function getNumItems(state: RootState) {
// 	let numItems = 0;
// 	for (let id in state.cart.items) {
// 		numItems += state.cart.items[id];
// 	}
// 	return numItems;
// }
export const getMemoizedNumItems = createSelector(
	(state: RootState) => state.cart.items,
	(items)=>{
		let numItems = 0;
		for (let id in items) {
			numItems += items[id];
		}
		return numItems;
	}

)

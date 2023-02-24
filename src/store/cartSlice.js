import { createSlice } from "@reduxjs/toolkit";

const initialState = { foodInCart: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const itemFound = state.foodInCart.find(
        (preFood) => preFood.id === item.id
      );
      if (itemFound) {
        itemFound.quantity += 1;
      } else {
        state.foodInCart = [...state.foodInCart, item];
      }
    },
    decrementQuantity: (state, action) => {
      const itemFound = state.foodInCart.find(
        (preFood) => preFood.id === action.payload.id
      );
      if (itemFound) {
        itemFound.quantity -= 1;
      }
      state.foodInCart = state.foodInCart.filter((elm) => elm.quantity > 0);
    },
    incrementQuantity: (state, action) => {
      const itemFound = state.foodInCart.find(
        (preFood) => preFood.id === action.payload.id
      );
      if (itemFound) {
        itemFound.quantity += 1;
      }
    },
  },
});

export const { addItemToCart, decrementQuantity, incrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "categories",
  initialState: [
    { name: "Mystery", id: 9648 },
    { name: "Action", id: 28 },
  ],
  reducers: {
    addCategories(state, action) {
      state.push(action.payload);
    },

    removeCategory(state, action) {
      return state.filter((c) => c.id != action.payload.id);
    },
  },
});

export default CategorySlice;
export const { addCategories, removeCategory } = CategorySlice.actions;

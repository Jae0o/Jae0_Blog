import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  tags: string[];
  categories: string[];
}

const initialState: InitialState = {
  tags: [],
  categories: [],
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {},
});

export const optionsAction = optionsSlice.actions;
export default optionsSlice.reducer;

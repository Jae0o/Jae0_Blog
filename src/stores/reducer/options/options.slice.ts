import { OptionsType } from "@/types/original";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    changeOptions: (
      state,
      actions: PayloadAction<{ newList: string[]; option: OptionsType }>,
    ) => {
      if (actions.payload.option === "tag") {
        state.tags = actions.payload.newList;
        return;
      }

      state.categories = actions.payload.newList;
    },
  },
});

export const optionsAction = optionsSlice.actions;
export default optionsSlice.reducer;

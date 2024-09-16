import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isLoggedIn: boolean;
  isAuthUser: boolean;
  authUserId: string;
}

const initialState: InitialState = {
  isLoggedIn: false,
  isAuthUser: false,
  authUserId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    changeAdmin: state => {
      state.isAuthUser = true;
    },

    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true;
      state.authUserId = action.payload;
    },

    logout: state => {
      state.isLoggedIn = false;
      state.isAuthUser = false;
      state.authUserId = "";
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;

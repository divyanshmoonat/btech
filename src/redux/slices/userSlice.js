import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isLoggedIn: false,
  userDetails: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "USER",
  initialState: initState,
  reducers: {
    login(state, action) {
      console.log(action);
      state.isLoggedIn = true;
      state.userDetails.name = action.payload.name;
      state.userDetails.email = action.payload.email;
      // const newState = {
      //     ...state,
      //     isLoggedIn: true,
      //     userDetails: {
      //         ...state.userDetails,
      //         name: "Jack",
      //         email: "jack@email.com"
      //     }
      // }
    },
    logout(state, action) {
      state.isLoggedIn = false;
      state.userDetails.name = "";
      state.userDetails.email = "";
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;

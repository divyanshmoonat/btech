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
            state.isLoggedIn = true;
            state.userDetails.name = "Jack";
            state.userDetails.email = "jack@email.com";
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
    }
});

export default userSlice.reducer;
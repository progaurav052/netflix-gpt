import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; //basically we are storing userinfo in the store
      // this will make state=action.payload , which is null initially , when user logsIN/signIN
    },
    removeUser: (state, action) => {
      return null;
      // this will remove the user from the store // no user loggedIN
    },
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
 // this reducer is like an function which has the functions to be executed for that slice inside an switch expression

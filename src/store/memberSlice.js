import { createSlice } from "@reduxjs/toolkit";

const memberSlice = createSlice({
  name: "members",
  initialState: {
    list: [],
  },
  reducers: {
    addMember: (state, action) => {
      state.list.push(action.payload);
    },
  },
});

export const { addMember } = memberSlice.actions;
export default memberSlice.reducer; // ⚠️ VERY IMPORTANT

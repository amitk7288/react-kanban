import { createSlice } from "@reduxjs/toolkit";
import notesData from "../../data/notes";

const notesSlice = createSlice({
  name: "notes",

  initialState: notesData,

  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import boardsData from "../../data/boardData";


const boardsSlice = createSlice({
  name: "boards",

  initialState: boardsData,

  reducers: {
    addBoard: (state, action) => {
      state.push(action.payload);
    },
    deleteBoard: (state, action) => {
      return state.filter(board => board.id !== action.payload);
    },
    editBoardName: (state, action) => {
      const { id, newName } = action.payload;
      const board = state.find((board) => board.id === id);
      if (board) {
        board.name = newName;
      }
    }
  }
});

export const { addBoard, deleteBoard, editBoardName } = boardsSlice.actions;
export default boardsSlice.reducer;
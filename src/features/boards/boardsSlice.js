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
      return state.filter((board) => board.id !== action.payload);
    },
    editBoardName: (state, action) => {
      const { id, newName } = action.payload;
      const board = state.find((board) => board.id === id);
      if (board) {
        board.name = newName;
      }
    },
    addBoardMember: (state, action) => {
      const { id, newMember } = action.payload;
      const board = state.find((board) => board.id === id);
      if (board) {
        board.members.push(newMember);
      }
    },
    addBoardNote: (state, action) => {
      const { id, newNote } = action.payload;
      const board = state.find((board) => board.id === id);
      if (board) {
        board.notes.push(newNote);
      }
    },
    addReactionToNote: (state, action) => {
      const { boardId, noteId, emoji } = action.payload;
      const board = state.find((board) => board.id === boardId);
      if (board) {
        const note = board.notes.find((note) => note.id === noteId);
        if (note && !note.reactions.includes(emoji)) {
          note.reactions.push(emoji);
        }
      }
    },
  },
});

export const { deleteBoard, editBoardName, addBoard, addBoardMember, addBoardNote, addReactionToNote } = boardsSlice.actions;
export default boardsSlice.reducer;
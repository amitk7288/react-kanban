import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boardsSlice";
import membersReducer from "../features/members/membersSlice";
import notesReducer from "../features/notes/notesSlice"

export default configureStore({
  reducer: {
    boards: boardsReducer,
    members: membersReducer,
    notes: notesReducer,
  },
});
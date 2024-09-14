import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boardsSlice";
import cardsReducer from "../features/cards/cardsSlice";
import membersReducer from "../features/members/membersSlice";
import notesReducer from "../features/notes/notesSlice";

export default configureStore({
  reducer: {
    boards: boardsReducer,
    cards: cardsReducer,
    members: membersReducer,
    notes: notesReducer,
  },
});
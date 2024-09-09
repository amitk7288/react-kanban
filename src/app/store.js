import { configureStore } from "@reduxjs/toolkit";
import boardsReducer from "../features/boards/boardsSlice";
import membersReducer from "../features/members/membersSlice";

export default configureStore({
  reducer: {
    boards: boardsReducer,
    members: membersReducer,
  },
});
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainContainerWithHeader from "../../components/ui-components/MainContainerWithHeader";
import {addNote} from "../../features/notes/notesSlice";
import {addBoardNote} from "../../features/boards/boardsSlice";
import Note from "./Note";
import { PiPaperPlaneRightBold } from "react-icons/pi";

export default function Notes() {
  const [noteText, setNoteText] = useState("");

  const dispatch = useDispatch();
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );
  const notes = board ? board.notes : [];
  const notesLength = board ? board.notes.length : 0;

  function handleKeyPress(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleNoteSubmit(e);
    }
  }

  function handleNoteSubmit(e) {
    const noteInfo = {
      id: notesLength + 1,
      text: noteText,
    };
    e.preventDefault();
    setNoteText("");

    if (noteText.trim().length !== 0) {
      dispatch(addNote(noteInfo));
      dispatch(addBoardNote({ id: parseInt(boardId), newNote: noteInfo }));
    }
  }  

  return (
    <MainContainerWithHeader>
      <p className="text-md mb-5 h-[5%] font-medium">{board.name} notes</p>
      <div id="container" className="flex h-[90%] flex-col justify-between">
        <div className="mb-5 flex h-full flex-col-reverse gap-3 overflow-scroll border border-red-500">
          {notes
            .slice()
            .reverse()
            .map((note) => (
              <Note key={note.id} text={note.text} />
            ))}
        </div>
        <form className="flex items-end gap-3" onSubmit={handleNoteSubmit}>
          <textarea
            rows={4}
            id="add-note"
            name="add-note"
            type="text"
            placeholder="Add note..."
            value={noteText}
            className="block w-[50%] rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6 dark:text-drkbg"
            onChange={(e) => setNoteText(e.target.value)}
            onKeyDown={handleKeyPress}
          ></textarea>
          <button
            className={`${noteText.trim() !== "" ? `bg-[#365dff]` : `bg-gray-400`} btn-transition flex h-[40px] cursor-pointer items-center whitespace-nowrap rounded-md px-3 font-normal text-white`}
            disabled={noteText.trim().length === 0 ? true : false}
          >
            <div className="flex items-center text-xl">
              <PiPaperPlaneRightBold />
            </div>
          </button>
        </form>
      </div>
    </MainContainerWithHeader>
  );
}

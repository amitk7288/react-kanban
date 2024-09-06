import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import List from "./list/List";

export default function Board() {
  const { boardId } = useParams();

  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  return (
    <div className="#181a1f fixed right-0 top-[230px] z-[-1] h-[calc(100%_-_230px)] w-full overflow-x-auto overflow-y-hidden border-l bg-[#f7f7f7] p-5 lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <ol className="no-scrollbar grid h-[100%] w-auto grid-flow-col gap-4 overflow-x-auto overflow-y-hidden md:auto-cols-[minmax(350px,300px)]">
        {board && board.lists.map((list) => <List key={list.id} list={list} />)}
      </ol>
    </div>
  );
}

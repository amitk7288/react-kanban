import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MainContainerWithHeader from "../components/ui-components/MainContainerWithHeader";

export default function Questions() {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  return (
    <MainContainerWithHeader>
      <p>{board.name} questions</p>
      {console.log(board.lists)}
    </MainContainerWithHeader>
  );
}

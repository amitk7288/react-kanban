import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MainContainerWithHeader from "../components/ui-components/MainContainerWithHeader";

export default function Notes() {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  return (
    <MainContainerWithHeader>
      <p>{board.name} notes</p>
      <p>maybe some sort of chat thing with comments and reactions etc.</p>
    </MainContainerWithHeader>
  );
}

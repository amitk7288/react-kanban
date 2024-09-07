import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MainContainerWithHeader from "../components/ui-components/MainContainerWithHeader";

export default function Overview() {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  return (
    <MainContainerWithHeader>
      <p>{board.name} overview</p>
      <p>{board.complete}% complete</p>
      <p>num of cards</p>
      <p>complete: 3</p>
      <p>outstanding: 8</p>
      <p>members: 5 show members</p>
      <p></p>
    </MainContainerWithHeader>
  );
}

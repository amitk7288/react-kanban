import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MainContainerWithHeader from "../components/ui-components/MainContainerWithHeader";

export default function Overview() {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  // work out

  const totalCards = board.lists.reduce(
    (total, list) => total + list.cards.length,
    0,
  );

  const completedCards = board.lists.reduce(
    (total, list) =>
      total +
      list.cards.filter((card) => {
        const [progress, totalTasks] = card.progress.split("/").map(Number);
        return progress === totalTasks;
      }).length,
    0,
  );

  const outstandingCards = totalCards - completedCards;

  return (
    <MainContainerWithHeader>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium">{board.name} overview</p>
        <p>
          Completion: <span className="font-semibold">{board.complete}%</span>
        </p>
        <p>
          Number of cards: <span className="font-semibold">{totalCards}</span>
        </p>
        <p>
          Cards completed:{" "}
          <span className="font-semibold">{completedCards}</span>
        </p>
        <p>
          Cards outstanding:{" "}
          <span className="font-semibold">{outstandingCards}</span>
        </p>
        <div className="flex items-center gap-3">
          <p>Active members: </p>
          <div className="flex gap-2">
            {board.members.map((member) => (
              <img
                key={member.id}
                src={member.img}
                alt={member.name}
                width={30}
                height={30}
                className="rounded-full border"
              />
            ))}
          </div>
        </div>
      </div>
    </MainContainerWithHeader>
  );
}

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import MainContainerWithHeader from "../components/ui-components/MainContainerWithHeader";

export default function Overview() {
  const { boardId } = useParams();
  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  const totalCards = board.lists.reduce(
    (total, list) => total + list.cards.length,
    0,
  );

  const completedCards = board.lists[3].cards.length;

  const outstandingCards = totalCards - completedCards;

  const percentageComplete = Math.round((completedCards / totalCards) * 100);

  const cardsInLists = [
    {
      id: 1,
      listName: board.lists[0].name,
      listColour: board.lists[0].color,
      cards: board.lists[0].cards.length,
    },
    {
      id: 2,
      listName: board.lists[1].name,
      listColour: board.lists[1].color,
      cards: board.lists[1].cards.length,
    },
    {
      id: 3,
      listName: board.lists[2].name,
      listColour: board.lists[2].color,
      cards: board.lists[2].cards.length,
    },
    {
      id: 4,
      listName: board.lists[3].name,
      listColour: board.lists[3].color,
      cards: board.lists[3].cards.length,
    },
  ]

  return (
    <MainContainerWithHeader>
      <div className="flex flex-col gap-4">
        <p className="text-lg font-medium">{board.name} overview</p>
        <p>
          Completion:{" "}
          <span className="font-semibold">{percentageComplete}%</span>
        </p>
        <p>
          Total no. of cards:{" "}
          <span className="font-semibold">{totalCards}</span>
        </p>
        <div className="flex flex-col gap-3">
          {cardsInLists.map((list) => (
            <div key={list.id}>
              <div className="flex items-center gap-2">
                <div
                  className={`h-[12px] w-[12px] rounded-full`}
                  style={{ backgroundColor: list.listColour }}
                ></div>
                <p className="flex items-center gap-2">
                  {" "}
                  <span className="font-semibold border w-[10px] h-[10px] p-3.5 flex justify-center items-center rounded-md bg-white dark:bg-drkbg dark:border-drkcol">{list.cards}</span>in {list.listName}
                </p>
              </div>
            </div>
          ))}
        </div>
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
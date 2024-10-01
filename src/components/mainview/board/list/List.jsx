import ListTitle from "./list-title/ListTitle";
import AddTaskBtn from "./add-task/AddTaskBtn";
import Card from "./card/Card";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { useMemo } from "react";

export default function List({ list, id, zen }) {
  const { setNodeRef } = useDroppable({ id: id });
  const cardIds = useMemo(() => {
    return list.cards.map((card) => card.id)
  }, [list.cards])

  return (
    <SortableContext id={id} items={cardIds} strategy={rectSortingStrategy}>
      <li ref={setNodeRef} className="no-scrollbar flex h-[100%] w-[300px] flex-col items-center gap-5 overflow-y-auto rounded-lg border p-5 md:w-[350px] dark:border-drkbrd dark:bg-drkbg2">
        <div className="sticky flex flex-col gap-3 rounded-lg bg-[#f7f7f7] dark:bg-drkbg2 dark:text-drkcol">
          <ListTitle
            title={list.name}
            listColor={list.color}
            numCards={list.cards.length}
          />
          <AddTaskBtn list={list} />
        </div>
        <div className="no-scrollbar h-[100%] overflow-auto rounded-lg">
          <div className="relative top-[0px] flex flex-col gap-3">
            {list.cards.length === 0 ? (
              <p className="text-sm">Currently no cards</p>
            ) : null}
            {list.cards.slice().reverse().map((card) => (
              <Card
                key={card.id}
                cardId={card.id}
                cardInfo={card}
                list={list}
                zen={zen}
              />
            ))}
          </div>
        </div>
      </li>
    </SortableContext>
  );
}

// import { useParams } from "react-router-dom";
// import {
//   updateCardsInList,
// } from "../../../../features/boards/boardsSlice";
// import { useDispatch } from "react-redux";
// import {
//   DndContext,
//   closestCenter,
//   useSensors,
//   useSensor,
//   PointerSensor,
//   useDroppable,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   verticalListSortingStrategy,
//   SortableContext,
// } from "@dnd-kit/sortable";
// import ListTitle from "./list-title/ListTitle";
// import AddTaskBtn from "./add-task/AddTaskBtn";
// import Card from "./card/Card";

// export default function List({ list, zen }) {
//   const {boardId} = useParams();
//   const dispatch = useDispatch();

//   const sensors = useSensors(
//     useSensor(PointerSensor, {
//       activationConstraint: {
//         distance: 8,
//       },
//     }),
//   );

//   const listId = list.id;

//   const {isOver, setNodeRef } = useDroppable({
//     id: listId,
//   });
//   const style = {
//     color: isOver ? "green" : undefined,
//   };

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (!over) {
//       return;
//     }

//     const oldIndex = list.cards.findIndex((card) => card.id === active.id);
//     const newIndex = list.cards.findIndex((card) => card.id === over.id);

//     // Debugging logs
//     console.log("Active card ID:", active.id);
//     console.log("Over card ID:", over.id);
//     console.log("Old Index position:", oldIndex);
//     console.log("New Index position:", newIndex);

//     if (oldIndex !== newIndex) {
//       const updatedCards = arrayMove(list.cards, oldIndex, newIndex);
//       dispatch(
//         updateCardsInList({
//           boardId: parseInt(boardId),
//           listId,
//           updatedCards,
//         }),
//       );
//     }
//   };

//   return (
//     <li ref={setNodeRef} className="no-scrollbar flex h-[100%] w-[300px] flex-col items-center gap-5 overflow-y-auto rounded-lg border p-5 md:w-[350px] dark:border-drkbrd dark:bg-drkbg2" style={style}>
//       <div className="sticky flex flex-col gap-3 rounded-lg bg-[#f7f7f7] dark:bg-drkbg2 dark:text-drkcol">
//         <ListTitle
//           title={list.name}
//           listColor={list.color}
//           numCards={list.cards.length}
//         />
//         <AddTaskBtn list={list} />
//       </div>
//       <DndContext
//         collisionDetection={closestCenter}
//         onDragEnd={handleDragEnd}
//         sensors={sensors}
//       >
//         <div className="no-scrollbar h-[100%] overflow-auto rounded-lg">
//           <div className="relative top-[0px] flex flex-col gap-3">
//             {list.cards.length === 0 ? (
//               <p className="text-sm">Currently no cards</p>
//             ) : null}
//             <SortableContext
//               items={list.cards}
//               strategy={verticalListSortingStrategy}
//             >
//               {list.cards.map((card) => (
//                 <Card key={card.id} cardId={card.id} list={list} zen={zen} />
//               ))}
//             </SortableContext>
//           </div>
//         </div>
//       </DndContext>
//     </li>
//   );
// }

// OLDDDDDDDDDDDDD !!!!!!

// import ListTitle from "./list-title/ListTitle";
// import AddTaskBtn from "./add-task/AddTaskBtn";
// import Card from "./card/Card";

// export default function List({ list, zen }) {

//   return (
//     <li className="no-scrollbar flex h-[100%] w-[300px] flex-col items-center gap-5 overflow-y-auto rounded-lg border p-5 md:w-[350px] dark:border-drkbrd dark:bg-drkbg2">
//       <div className="sticky flex flex-col gap-3 rounded-lg bg-[#f7f7f7] dark:bg-drkbg2 dark:text-drkcol">
//         <ListTitle
//           title={list.name}
//           listColor={list.color}
//           numCards={list.cards.length}
//         />
//         <AddTaskBtn list={list} />
//       </div>
//       <div className="no-scrollbar h-[100%] overflow-auto rounded-lg">
//         <div className="relative top-[0px] flex flex-col gap-3">
//           {list.cards.length === 0 ? <p className="text-sm">Currently no cards</p> : null}
//           {list.cards
//             .slice()
//             .reverse()
//             .map((card) => (
//               <Card key={card.id} cardId={card.id} list={list} zen={zen} />
//             ))}
//         </div>
//       </div>
//     </li>
//   );
// }

// EXXXTRASSSSSS !!!!!!

// function handleDragEnd(e) {
//   const { active, over } = e;
//   if (active.id !== over.id) {
//     setCards((currentCards) => {
//       const activeIndex = currentCards.findIndex(
//         (card) => card.id === active.id,
//       );
//       const overIndex = currentCards.findIndex((card) => card.id === over.id);
//       console.log("active:", activeIndex);
//       console.log("over:", overIndex);

//       return arrayMove(currentCards, activeIndex, overIndex);
//     });
//   }
// }

// useEffect(() => {
//   setCards(list.cards);
//   console.log("useffect sort cards");
//   console.log("this:", list.cards);
// }, [list.cards]);

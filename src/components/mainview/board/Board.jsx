import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import List from "./list/List";

export default function Board() {
  const [isZenMode, setIsZenMode] = useState(false);
  const { boardId } = useParams();

  const board = useSelector((state) =>
    state.boards.find((board) => board.id === parseInt(boardId)),
  );

  return (
    <div
      id="board"
      className="#181a1f fixed right-0 top-[230px] z-[-1] h-[calc(100%_-_230px)] w-full overflow-x-auto overflow-y-hidden border-l bg-[#f7f7f7] p-5 pt-3 lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol"
    >
      <div className="mb-2 flex h-[5%] items-center gap-2 pl-2">
        {isZenMode ? (
          <PiFlowerLotusDuotone
            className={`text-2xl text-[#365dff] dark:text-[#b0ccff]`}
          />
        ) : (
          <PiFlowerLotusDuotone className="text-2xl" />
        )}
        <button
          className="text-2xl"
          onClick={() => setIsZenMode((prevState) => !prevState)}
        >
          {isZenMode ? (
            <BsToggleOn className="text-[#365dff] dark:text-[#b0ccff]" />
          ) : (
            <BsToggleOff />
          )}
        </button>
      </div>
      <ol className="no-scrollbar grid h-[95%] w-auto grid-flow-col gap-4 overflow-x-auto overflow-y-hidden md:auto-cols-[minmax(350px,300px)]">
        {board &&
          board.lists.map((list) => (
            <List
              key={list.id}
              list={list}
              zen={isZenMode}
            />
          ))}
      </ol>
    </div>
  );
}

// import { useState } from "react";

// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { PiFlowerLotusDuotone} from "react-icons/pi";
// import { BsToggleOff, BsToggleOn } from "react-icons/bs";

// import List from "./list/List";

// export default function Board() {
//   const [isZenMode, setIsZenMode] = useState(false);
//   const { boardId } = useParams();

//   const board = useSelector((state) =>
//     state.boards.find((board) => board.id === parseInt(boardId)),
//   );

//   return (
//     <div
//       id="board"
//       className="#181a1f fixed right-0 top-[230px] z-[-1] h-[calc(100%_-_230px)] w-full overflow-x-auto overflow-y-hidden border-l bg-[#f7f7f7] p-5 pt-3 lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol"
//     >
//       <div className="mb-2 flex h-[5%] items-center gap-2 pl-2">
//         {isZenMode ? (
//           <PiFlowerLotusDuotone
//             className={`text-2xl text-[#365dff] dark:text-[#b0ccff]`}
//           />
//         ) : (
//           <PiFlowerLotusDuotone className="text-2xl" />
//         )}
//         <button
//           className="text-2xl"
//           onClick={() => setIsZenMode((prevState) => !prevState)}
//         >
//           {isZenMode ? (
//             <BsToggleOn className="text-[#365dff] dark:text-[#b0ccff]" />
//           ) : (
//             <BsToggleOff />
//           )}
//         </button>
//       </div>
//       <ol className="no-scrollbar grid h-[95%] w-auto grid-flow-col gap-4 overflow-x-auto overflow-y-hidden md:auto-cols-[minmax(350px,300px)]">
//         {board &&
//           board.lists.map((list) => (
//             <List key={list.id} list={list} zen={isZenMode} />
//           ))}
//       </ol>
//     </div>
//   );
// }

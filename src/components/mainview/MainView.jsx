import { Outlet, useLocation } from "react-router-dom";

import Board from "./board/Board";
import MainViewHeader from "./mainview-header/MainViewHeader.jsx";

export default function MainView() {
  const location = useLocation();
  const isProjects = location.pathname === "/projects";
  const isMembers = location.pathname === "/members";

  return (
    <main className="w-full lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)]">
      {isProjects || isMembers ? (
        <Outlet />
      ) : (
        <>
          <MainViewHeader />
          <Board />
          <Outlet />
        </>
      )}
    </main>
  );
}

// // import { Outlet, useLocation } from "react-router-dom";

// // import Board from "./board/Board";
// // import MainViewHeader from "./mainview-header/MainViewHeader.jsx";

// // import boards from "../../data/boardData.js";
// // import categories from "../../data/categories.js";

// // export default function MainView() {

// //   const location = useLocation();
// //   const isProjects = location.pathname === "/projects";
// //   const isMembers = location.pathname === "/members";

// //   const boardOne = boards.filter(board => board.id === 1);

// //   return (
// //     <main className="w-full lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)]">
// //       {isProjects || isMembers ? (
// //         <Outlet />
// //       ) : (
// //         <>
// //           {boardOne.map((board) => (
// //             <MainViewHeader key={board.id} board={board} />
// //           ))}
// //           {/* this needs to be just outlet */}
// //           {boardOne.map((board) => (
// //             <Board key={board.id} board={board} categories={categories} />
// //           ))}
// //           <Outlet />
// //         </>
// //       )}
// //     </main>
// //   );
// // }

// import { Outlet, useLocation } from "react-router-dom";

// import Board from "./board/Board";
// import MainViewHeader from "./mainview-header/MainViewHeader.jsx";

// import boards from "../../data/boardData.js";
// import categories from "../../data/categories.js";

// export default function MainView() {

//   const location = useLocation();
//   const isProjects = location.pathname === "/projects";
//   const isMembers = location.pathname === "/members";

//   const boardOne = boards.filter(board => board.id === 1);

//   return (
//     <main className="w-full lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)]">
//       {isProjects || isMembers ? (
//         <Outlet />
//       ) : (
//         <>
//           {boardOne.map((board) => (
//             <MainViewHeader key={board.id} board={board} />
//           ))}
//           {boardOne.map((board) => (
//             <Board key={board.id} board={board} categories={categories} />
//           ))}
//           <Outlet />
//         </>
//       )}
//     </main>
//   );
// }

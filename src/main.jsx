import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ErrorPage from "./components/ui-components/ErrorPage.jsx";
import MainView from "./components/mainview/MainView.jsx";
import Overview from "./routes/Overview.jsx";
import Tasks from "./routes/Tasks.jsx";
import Notes from "./routes/Notes.jsx";
import Questions from "./routes/Questions.jsx";
import ListView from "./routes/ListView.jsx";
import TableView from "./routes/TableView.jsx";
import BoardView from "./routes/BoardView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainView />,
        children: [
          {
            path: ":overviewId/overview",
            element: <Overview />,
          },
          {
            path: ":tasksId/tasks",
            element: <Tasks />,
          },
          {
            path: ":notesId/notes",
            element: <Notes />,
          },
          {
            path: ":questionsId/questions",
            element: <Questions />,
          },
          {
            path: ":boardId/boardview",
            element: <BoardView />,
          },
          {
            path: ":listviewId/listview",
            element: <ListView />,
          },
          {
            path: ":tableviewId/tableview",
            element: <TableView />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

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
            path: "overview/:overviewId",
            element: <Overview />,
          },
          {
            path: "tasks/:tasksId",
            element: <Tasks />,
          },
          {
            path: "notes/:notesId",
            element: <Notes />,
          },
          {
            path: "questions/:questionsId",
            element: <Questions />,
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

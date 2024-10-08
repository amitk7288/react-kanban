import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <Sidebar />
      {/*
      ICON WHEN LIST ETC.
      - web platform https://dribbble.com/shots/23272954-LogoIcon-folio-15
      - plant ltd - https://dribbble.com/shots/24410107-Plantea-Logo-Design-Concept
      
        - additional views/components needed
        D - modal comp child content, used react-dom portal to place it in the body tag as other elements were intefering with it due to their positions sticky etc
        - dark mode (system)
        D - mobile view, side scroll etc.
        - drag and drop
        D - overview view
        - notes view
        - questions view
        - card open view, upload files, add comments, watch, assign team member
        D - card calculate % compete of tasks and alter colour accordingly
        - questions view, chat view, barchart?analytics?, calendar, stopwatch, squares?categories view?uxstages, branding etc.
        - filter by category uxstage, team member, by progress 1/5 etc.
        D - add member to board view (modal)
         - dropdown menu options, i.e profile, each card, three dots
        - team members dropdown options
        W - add new task view
        - table view, list view
        - add project (what happens if more than 4 projects, see all projects view?)
        - sign in functionality? sign in with google?
          - maybe:
          - auth
          - mern
      */}
    </div>
  );
}

export default App;

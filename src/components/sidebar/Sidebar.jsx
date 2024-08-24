import { useState } from "react";

import SidebarIcons from "./SidebarIcons";
import SidebarMenu from "../sidebar/sidebar-menu/SidebarMenu";
import { PiCaretCircleLeft } from "react-icons/pi";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  function handleClickToggleSidebar() {
    setIsOpen(prevState => !prevState);
  }

  return (
    <>
      {isOpen ? (
        <aside className="fixed bottom-0 hidden left-0 top-0 z-0 h-[100%] w-[25vw] lg:flex 2xl:w-[20vw]">
          <div onClick={handleClickToggleSidebar}>
            <PiCaretCircleLeft className="absolute right-[-15px] top-[10vh] bg-white text-[30px]" />
          </div>
          <SidebarIcons />
          <SidebarMenu />
        </aside>
      ) : null}
    </>
  );
}

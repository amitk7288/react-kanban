import { useState, useRef } from "react";
import DropMenu from "../ui-components/DropMenu";
import useDarkMode from "../../hooks/usedarkMode";
import SearchResults from "./SearchResults";

import {
  PiList,
  PiX,
  PiGear,
  PiBell,
  PiMagnifyingGlassBold,
  PiSun,
  PiMoonStars,
  PiSquaresFour,
  PiColumns,
  PiTimer,
  PiCalendarDots,
  PiChatsCircle,
  PiQuestion,
  PiChartBar,
  PiSignOut,
} from "react-icons/pi";

import prof from "../../assets/DDLogo.png";
import logo from "../../assets/kanban-logo.png"

export default function Header() {
  const [mobMenu, setMobMenu] = useState(false);
  const [theme, toggleTheme] = useDarkMode();
  const [isOpen, setIsOpen] = useState({
    settings: false,
    notifications: false,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

const menuIconLinks = [
  {
    id: 1,
    icon: <PiSquaresFour />,
    linkText: "Projects",
  },
  {
    id: 2,
    icon: <PiColumns />,
    linkText: "Board",
  },
  {
    id: 3,
    icon: <PiTimer />,
    linkText: "Time Management",
  },
  {
    id: 4,
    icon: <PiCalendarDots />,
    linkText: "Timeline",
  },
  {
    id: 5,
    icon: <PiChatsCircle />,
    linkText: "Chat",
  },
  {
    id: 6,
    icon: <PiQuestion />,
    linkText: "FAQ's",
  },
  {
    id: 7,
    icon: <PiChartBar />,
    linkText: "Analytics",
  },
  {
    id: 8,
    icon: <PiSignOut />,
    linkText: "Log out",
  },
];

const handleClick = (btn) => {
  setIsOpen(prevState => ({
    ...prevState,
    [btn]: !prevState[btn],
  }));
}

  return (
    <header className="fixed right-0 top-0 h-[80px] w-full border-b bg-white p-5 sm:border-x lg:w-[calc(100%_-_25vw)] 2xl:w-[calc(100%_-_20vw)] dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex items-center justify-between gap-4">
        <img className="h-auto w-[45px] lg:hidden" src={logo} alt="logo" />
        <div className="relative flex h-[40px] w-[100%] items-center gap-2 rounded-md bg-[#f7f7f7] px-2 py-3 lg:w-[60%] dark:bg-drkbg2 dark:text-drkcol">
          <PiMagnifyingGlassBold className="text-lg" />
          <input
            className="w-[100%] border-none bg-[transparent] p-0 text-sm font-medium text-black outline-none focus:ring-0 dark:text-drkcol"
            type="search"
            name="searchcards"
            id="searchcards"
            placeholder="Search cards..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={searchInputRef}
          />
          <div className="absolute left-0 top-[35px] w-full rounded-b-md bg-[#f7f7f7] dark:bg-drkbg2 dark:text-drkcol">
            <SearchResults
              search={searchQuery}
              setSearch={setSearchQuery}
              searchInputRef={searchInputRef}
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 lg:hidden">
            {theme === "dark" ? (
              <PiSun
                onClick={toggleTheme}
                className="cursor-pointer text-[25px] dark:text-drkcol"
              />
            ) : (
              <PiMoonStars
                onClick={toggleTheme}
                className="cursor-pointer text-[25px] dark:text-drkcol"
              />
            )}
            {mobMenu ? (
              <PiX
                onClick={() => setMobMenu((prevState) => !prevState)}
                className="z-50 text-3xl"
              />
            ) : (
              <PiList
                onClick={() => setMobMenu((prevState) => !prevState)}
                className="z-50 text-3xl"
              />
            )}
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <PiGear
              onClick={() => handleClick("settings")}
              className="relative cursor-pointer bg-transparent text-[25px] dark:text-drkcol"
            />
            <DropMenu
              trigger={
                <PiBell
                  onClick={() => handleClick("notifications")}
                  className="cursor-pointer text-[25px] dark:text-drkcol"
                />
              }
              pos={`left-0`}
              isOpen={isOpen.notifications}
            >
              <p className="text-sm">Notifcations</p>
            </DropMenu>
            {theme === "dark" ? (
              <PiSun
                onClick={toggleTheme}
                className="cursor-pointer text-[25px] dark:text-drkcol"
              />
            ) : (
              <PiMoonStars
                onClick={toggleTheme}
                className="cursor-pointer text-[25px] dark:text-drkcol"
              />
            )}
            <DropMenu
              trigger={
                <div className="flex cursor-pointer items-center gap-2">
                  <div className="h-7 w-7 overflow-hidden rounded-full">
                    <img src={prof} alt="profilepic" />
                  </div>
                  <p className="text-sm font-medium">Dev Dreamer</p>
                </div>
              }
              pos={`right-0`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="text-xs">ACCOUNT</p>
                  <div className="flex items-center gap-2">
                    <div className="h-[35px] w-[35px] overflow-hidden rounded-full">
                      <img src={prof} alt="profilepic" />
                    </div>
                    <div>
                      <p className="text-sm">Amit Kadara</p>
                      <p className="text-xs">amit@devdreamer.com</p>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="flex flex-col gap-2">
                  <p className="text-xs">MENU</p>
                  <nav className="flex flex-col gap-3 text-sm">
                    <a href="#">Profile</a>
                    <a href="#">Boards</a>
                    <a href="#">Cards</a>
                    <a href="#">Settings</a>
                  </nav>
                </div>

                <hr />

                <div>
                  <a href="" className="text-sm">
                    Log out
                  </a>
                </div>
              </div>
            </DropMenu>
          </div>
        </div>
      </div>

      {/* Mob menu */}
      {mobMenu && (
        <div className="no-scrollbar absolute left-0 top-[80px] flex h-[calc(100vh_-_80px)] w-[100vw] flex-col gap-[50px] overflow-y-scroll bg-[#f7f7f7] p-6 lg:hidden dark:bg-drkbg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 overflow-hidden rounded-full">
                <img src={prof} alt="profilepic" />
              </div>
              <p>Dev Dreamer</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl">
                <PiGear />
              </div>
              <div className="text-2xl">
                <PiBell />
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-8">
            {menuIconLinks.map((item) => (
              <div key={item.id} className="dark:text-drkcol">
                <a href="#" className="flex items-center gap-3">
                  <div className="rounded-md bg-blue-200 p-1 text-2xl text-black">
                    {item.icon}
                  </div>
                  <p>{item.linkText}</p>
                </a>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

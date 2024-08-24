import { useState } from "react";

import {
  PiSquaresFour,
  PiSquaresFourDuotone,
  PiColumns,
  PiColumnsDuotone,
  PiTimer,
  PiTimerDuotone,
  PiCalendarDots,
  PiCalendarDotDuotone,
  PiChatsCircle,
  PiChatsCircleDuotone,
  PiQuestion,
  PiQuestionDuotone,
  PiChartBar,
  PiChartBarDuotone,
  PiSignOut,
} from "react-icons/pi";

import logo from "../../assets/kanban-logo.png";

const sidebarIcons = [
  {
    id: 1,
    icon: <PiSquaresFour />,
    activeicon: <PiSquaresFourDuotone />,
    iconText: "Projects",
    active: false,
  },
  {
    id: 2,
    icon: <PiColumns />,
    activeicon: <PiColumnsDuotone />,
    iconText: "Board",
    active: false,
  },
  {
    id: 3,
    icon: <PiTimer />,
    activeicon: <PiTimerDuotone />,
    iconText: "Time Management",
    active: false,
  },
  {
    id: 4,
    icon: <PiCalendarDots />,
    activeicon: <PiCalendarDotDuotone />,
    iconText: "Timeline",
    active: false,
  },
  {
    id: 5,
    icon: <PiChatsCircleDuotone />,
    activeicon: <PiChatsCircleDuotone />,
    iconText: "Chat",
    active: false,
  },
  {
    id: 6,
    icon: <PiQuestion />,
    activeicon: <PiQuestionDuotone />,
    iconText: "FAQ's",
    active: false,
  },
  {
    id: 7,
    icon: <PiChartBar />,
    activeIcon: <PiChartBarDuotone />,
    iconText: "Analytics",
    active: false,
  },
];

export default function SidebarIcons() {
  const [isActive, setIsActive] = useState(sidebarIcons);

  const handleClickIcon = (icon) => {
    // finsish this off!
  };

  return (
    <div className="flex w-[20%] flex-col items-center justify-between border-r pb-10 pt-5 dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex w-full flex-col items-center gap-[5vh]">
        <div className="w-[40px]">
          <img src={logo} alt="" />
        </div>
        <div className="flex w-full flex-col items-center gap-[4vh] text-3xl text-[#959697] dark:text-drkcol">
          {sidebarIcons.map((icon) => (
            <a
              href="#"
              alt={icon.iconText}
              title={icon.iconText}
              key={icon.id}
              className={`${isActive ? `border-l-[#365dff] text-[#365dff] dark:border-l-[#00ccff] dark:text-[#00ccff]` : null} flex h-[50px] w-full cursor-pointer items-center justify-center border-l-[6px]`}
              onClick={() => handleClickIcon(icon.iconText)}
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="cursor-pointer text-4xl text-[#a4a6a8] dark:text-drkcol">
        <a href="#" className="flex w-full cursor-pointer justify-center">
          <PiSignOut />
        </a>
      </div>
    </div>
  );
}

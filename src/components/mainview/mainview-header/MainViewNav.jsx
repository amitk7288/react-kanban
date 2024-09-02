import { useState } from "react";

import { Link } from "react-router-dom";

import {
  PiDiamondsFourBold,
  PiCheckCircleBold,
  PiPenNibBold,
  PiSealQuestionBold,
} from "react-icons/pi";

export default function MainViewNav() {
  const navItems = [
    {
      id: 1,
      name: "Overview",
      active: false,
      icon: <PiDiamondsFourBold className="text-xl" />,
    },
    {
      id: 2,
      name: "Tasks",
      active: true,
      icon: <PiCheckCircleBold className="text-xl" />,
    },
    {
      id: 3,
      name: "Notes",
      active: false,
      icon: <PiPenNibBold className="text-lg" />,
    },
    {
      id: 4,
      name: "Questions",
      active: false,
      icon: <PiSealQuestionBold className="text-xl" />,
    },
  ];
  const [items, setItems] = useState(navItems);

  function handleNavItemClick(itemId) {
    setItems((prevState) => (
      prevState.map((item => (
        item.id === itemId ? {...item, active: true} : {...item, active: false}
      )))
    ))
  }

  return (
    <nav className="flex h-fit items-center sm:gap-4">
      {items.map((item) => (
        <Link
          key={item.id}
          to={`/${item.name}/1`}
          className={`flex h-full cursor-pointer items-center justify-center ${item.active ? `border-b-2 border-[#365dff]` : null}`}
          onClick={() => handleNavItemClick(item.id)}
        >
          <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
            {item.icon}
            <p className="hidden text-sm font-normal md:block">{item.name}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
}

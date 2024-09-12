import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  PiDiamondsFourBold,
  PiCheckCircleBold,
  PiPenNibBold,
} from "react-icons/pi";

export default function MainViewNav() {

  const { boardId } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {    
    const navItems = [
      {
        id: 1,
        name: "Overview",
        path: `project/${boardId}/overview`,
        active: false,
        icon: <PiDiamondsFourBold className="text-xl" />,
      },
      {
        id: 2,
        name: "Tasks",
        path: `project/${boardId}/tasks`,
        active: true,
        icon: <PiCheckCircleBold className="text-xl" />,
      },
      {
        id: 3,
        name: "Notes",
        path: `project/${boardId}/notes`,
        active: false,
        icon: <PiPenNibBold className="text-lg" />,
      },
    ]
    setItems(navItems);
}, [boardId])


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
          to={item.path}
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

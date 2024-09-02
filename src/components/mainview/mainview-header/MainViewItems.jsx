import { useState } from "react";
import { Link } from "react-router-dom";
import { PiKanbanBold, PiTableBold, PiListChecksBold } from "react-icons/pi";

export default function MainViewItems() {
    const viewItems = [
      {
        id: 1,
        name: "Board",
        path: "1/boardview",
        icon: <PiKanbanBold className="text-xl" />,
        active: false,
      },
      {
        id: 2,
        name: "Table",
        path: "1/tableview",
        icon: <PiTableBold className="text-xl" />,
        active: true,
      },
      {
        id: 3,
        name: "List",
        path: "1/listview",
        icon: <PiListChecksBold className="text-xl" />,
        active: false,
      },
    ];
  const [items, setItems] = useState(viewItems);

  function handleItemClick(itemId) {
    setItems((prevState) => (
      prevState.map((item) => (
        item.id === itemId ? {...item, active: true} : {...item, active: false}
      ))
    ))
  }

  return (
    <nav className="col-start-2 col-end-3 row-start-2 row-end-3 flex gap-2 justify-self-end sm:gap-5 lg:pb-4">
      {items.map((item) => (
        <Link
          to={item.path}
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          <div
            className={`duration-400 flex w-fit items-center gap-1 rounded-md ${item.active ? `bg-[#e8f0ff] dark:bg-[#b0ccff] dark:text-[#0f37de]` : `hover:bg-slate-100 dark:hover:bg-[#b0ccff] dark:hover:text-[#0f37de]`} px-2 py-2 text-[#365dff] dark:text-drkcol`}
          >
            {item.icon}
            <p className="hidden text-sm font-normal md:block">{item.name}</p>
          </div>
        </Link>
      ))}
    </nav>
  );
}

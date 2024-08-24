import { PiKanbanBold, PiTableBold, PiListChecksBold } from "react-icons/pi";

export default function MainViewItems() {
  return (
    <nav className="col-start-2 col-end-3 row-start-2 row-end-3 flex sm:gap-5 gap-2 justify-self-end lg:pb-4">
      <a href="#">
        <div className="flex w-fit items-center gap-1 rounded-md bg-[#e8f0ff] px-2 py-2 text-[#365dff]">
          <PiKanbanBold className="text-xl" />
          <p className="text-sm font-normal hidden md:block">Board</p>
        </div>
      </a>
      <a href="#">
        <div className="flex w-fit items-center gap-1 rounded-md px-2 py-2">
          <PiTableBold className="text-xl" />
          <p className="text-sm font-normal hidden md:block">Table</p>
        </div>
      </a>
      <a href="#">
        <div className="flex w-fit items-center gap-1 rounded-md px-2 py-2 ">
          <PiListChecksBold className="text-xl" />
          <p className="text-sm font-normal hidden md:block">List</p>
        </div>
      </a>
    </nav>
  );
}

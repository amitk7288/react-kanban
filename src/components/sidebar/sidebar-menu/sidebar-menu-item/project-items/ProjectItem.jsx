import {
  PiDotsThreeOutlineVerticalFill,
  PiPaperclipBold,
} from "react-icons/pi";

import SidebarMenuItem from "../SidebarMenuItem";

export default function ProjectItem() {
  return (
    <SidebarMenuItem>
      <div className="flex items-center gap-2">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex w-[30px] h-[30px] items-center justify-center rounded-md bg-blue-200 p-1.5">
          <PiPaperclipBold className="text-xl dark:text-drkbg2" />
        </div>
        <p className="text-xs xl:text-sm font-medium">Piper Enterprise</p>
      </div>
      <PiDotsThreeOutlineVerticalFill />
    </SidebarMenuItem>
  );
}

import {
  PiDotsThreeOutlineVerticalFill,
  PiPaperclipBold,
} from "react-icons/pi";

import SidebarMenuItem from "../SidebarMenuItem";

export default function ProjectItem() {
  return (
    <SidebarMenuItem className="cursor-pointer">
      <div className="flex items-center gap-2" onClick={"/project_name"}>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-blue-200 p-1.5">
          <PiPaperclipBold className="text-xl dark:text-drkbg2" />
        </div>
        <p className="text-xs font-medium xl:text-sm">PaperClip Ltd</p>
      </div>
      <PiDotsThreeOutlineVerticalFill />
    </SidebarMenuItem>
  );
}

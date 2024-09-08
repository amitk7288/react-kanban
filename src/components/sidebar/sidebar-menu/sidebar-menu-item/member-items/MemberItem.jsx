import SidebarMenuItem from "../SidebarMenuItem";

import { PiCaretDown, } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

export default function MemberItem({img, name}) {


  return (
    <SidebarMenuItem>
      <div className="flex items-center gap-2">
        <div className="basis-[40px] rounded-full">
          <img src={img} alt={name} className="rounded-md" />
        </div>
        <div>
          <div>
            <p className="text-xs font-medium xl:text-sm">{name}</p>
          </div>
          <div className="flex items-start gap-1">
            <GoDotFill className="text-green-400" />
            <span className="text-xs">Online - 11:03:48</span>
          </div>
        </div>
      </div>
      <PiCaretDown />
    </SidebarMenuItem>
  );
}
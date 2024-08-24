import SidebarMenuItem from "../SidebarMenuItem";
import member from "../../../../../assets/member.png";

import { PiCaretDown, } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

export default function MemberItem() {
  return (
    <SidebarMenuItem>
      <div className="flex items-center gap-2">
        <div className="basis-[40px]">
          <img src={member} alt="" />
        </div>
        <div>
          <div>
            <p className="text-xs xl:text-sm font-medium">Bred Smith</p>
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
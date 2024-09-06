import { Link } from "react-router-dom";
import SidebarMenuItem from "../SidebarMenuItem";
import MemberItem from "./MemberItem"

import { PiUsersThreeBold } from "react-icons/pi";

export default function MemberItems() {
  return (
    <div className="flex flex-col gap-3">
      <p className="mb-2 pl-1 font-medium xl:text-lg dark:text-drkcol">
        Team members
      </p>
      <div className="flex w-fit flex-col items-center gap-2.5">
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
        <MemberItem />
      </div>
      <Link to={`/members`}>
        <div className="text-[#365dff]">
          <SidebarMenuItem>
            <div className="flex items-center gap-2">
              <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-[30px] w-[30px] items-center justify-center rounded-md">
                <PiUsersThreeBold className="h-[30px] w-[30px] rounded-md bg-blue-200 p-1.5 text-2xl dark:text-[#365dff]" />
              </div>
              <p className="text-xs font-medium xl:text-sm">See all members</p>
            </div>
          </SidebarMenuItem>
        </div>
      </Link>
    </div>
  );
}
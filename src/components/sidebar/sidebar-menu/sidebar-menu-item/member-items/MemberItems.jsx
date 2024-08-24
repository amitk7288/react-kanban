import MemberItem from "./MemberItem"

export default function MemberItems() {
  return (
    <div>
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
    </div>
  );
}
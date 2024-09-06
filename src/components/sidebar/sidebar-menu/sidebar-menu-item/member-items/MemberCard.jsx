
export default function MemberCard() {
  return (
    <div className="flex w-auto flex-col justify-center gap-3 rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:h-auto dark:border-drkbrd dark:bg-drkbg dark:text-drkcol">
      <div className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border-[1px] bg-blue-100">
          <img src="" className="h-full w-full rounded-full object-cover" />
        </div>
      </div>
      <p className="text-center font-medium">member name</p>
      <p className="text-center text-sm">Active boards: 3</p>
    </div>
  );
}
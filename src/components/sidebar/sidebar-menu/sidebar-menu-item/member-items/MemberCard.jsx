
export default function MemberCard({img, name}) {
  return (
    <div className="flex w-auto flex-col justify-center gap-3 rounded-md border border-gray-200 bg-white p-4 shadow-lg sm:h-auto dark:border-drkbrd dark:bg-drkbg2 dark:text-drkcol">
      <div className="flex basis-1/3 cursor-pointer flex-col items-center justify-center gap-2">
        <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full border-[1px] bg-white">
          <img src={img} className="h-auto w-full rounded-full object-cover" />
        </div>
      </div>
      <p className="text-center font-medium">{name}</p>
      <p className="text-center text-sm">Active boards: 3</p>
    </div>
  );
}
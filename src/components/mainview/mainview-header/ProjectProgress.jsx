import {
  PiPaperclipBold,
} from "react-icons/pi";

export default function ProjectProgress({title}) {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid grid-cols-[50px_auto] items-center gap-3">
      <div className="col-start-1 col-end-2 row-start-1 row-end-2 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-blue-200 p-1.5">
        <PiPaperclipBold className="text-2xl dark:text-drkbg2" />
      </div>
      <div className="flex w-[100%] flex-col justify-between gap-1">
        <p className="whitespace-nowrap font-medium lg:text-lg">{title}</p>
        <div className="md:flex md:items-center md:gap-2">
          <div className="h-2.5 w-[100%] rounded-full bg-gray-200">
            <div
              className="h-2.5 rounded-full bg-[#365dff]"
              style={{ width: "45%" }}
            ></div>
          </div>
          <div className="w-[auto]">
            <span className="whitespace-nowrap text-sm font-normal text-[#8f959f] dark:text-drkcol">
              45% complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

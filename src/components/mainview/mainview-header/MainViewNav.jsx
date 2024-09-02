import {
  PiDiamondsFourBold,
  PiCheckCircleBold,
  PiPenNibBold,
  PiSealQuestionBold,
} from "react-icons/pi";

export default function MainViewNav() {
  return (
    <nav className="flex h-fit items-center sm:gap-4">
      <a
        href={`/overview`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiDiamondsFourBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Overview</p>
        </div>
      </a>
      <a
        href={`/tasks`}
        className="flex h-full cursor-pointer items-center justify-center border-b-2 border-[#365dff]"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiCheckCircleBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Tasks</p>
        </div>
      </a>
      <a
        href={`/notes`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiPenNibBold className="text-lg" />
          <p className="hidden text-sm font-normal md:block">Notes</p>
        </div>
      </a>
      <a
        href={`/questions`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiSealQuestionBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Questions</p>
        </div>
      </a>
    </nav>
  );
}
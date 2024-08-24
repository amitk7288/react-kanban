import {
  PiDiamondsFourBold,
  PiCheckCircleBold,
  PiPenNibBold,
  PiSealQuestionBold,
} from "react-icons/pi";

export default function MainViewNav() {
  return (
    <nav className="flex items-center sm:gap-4 h-fit">
      <a
        href="#"
        className="flex h-full items-center justify-center cursor-pointer"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiDiamondsFourBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Overview</p>
        </div>
      </a>
      <a
        href="#"
        className="flex items-center h-full justify-center cursor-pointer border-b-2 border-[#365dff]"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiCheckCircleBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Tasks</p>
        </div>
      </a>
      <a
        href="#"
        className="flex h-full items-center justify-center cursor-pointer"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiPenNibBold className="text-lg" />
          <p className="hidden text-sm font-normal md:block">Notes</p>
        </div>
      </a>
      <a
        href="#"
        className="flex h-full items-center justify-center cursor-pointer"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiSealQuestionBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Questions</p>
        </div>
      </a>
    </nav>
  );
}
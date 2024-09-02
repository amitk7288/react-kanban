import { Link } from "react-router-dom";
import {
  PiDiamondsFourBold,
  PiCheckCircleBold,
  PiPenNibBold,
  PiSealQuestionBold,
} from "react-icons/pi";

export default function MainViewNav() {
  return (
    <nav className="flex h-fit items-center sm:gap-4">
      <Link
        to={`/overview/1`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiDiamondsFourBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Overview</p>
        </div>
      </Link>
      <Link
        to={`/tasks/1`}
        className="flex h-full cursor-pointer items-center justify-center border-b-2 border-[#365dff]"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiCheckCircleBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Tasks</p>
        </div>
      </Link>
      <Link
        to={`/notes/1`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiPenNibBold className="text-lg" />
          <p className="hidden text-sm font-normal md:block">Notes</p>
        </div>
      </Link>
      <Link
        to={`/questions/1`}
        className="flex h-full cursor-pointer items-center justify-center"
      >
        <div className="flex w-fit items-center gap-1.5 rounded-md px-2 py-2">
          <PiSealQuestionBold className="text-xl" />
          <p className="hidden text-sm font-normal md:block">Questions</p>
        </div>
      </Link>
    </nav>
  );
}
